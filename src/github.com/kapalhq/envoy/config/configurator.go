package config

import (
	"github.com/jteso/task"
	"github.com/kapalhq/envoy/proxy"
)

type Configurator struct {
	backend  Backend
	observer Configurable
	// used to handle the background jobs related with the config backend
	taskManager *task.TaskManager
}

func NotifyOnChange(be Backend, obs Configurable) chan error {
	errorC := make(chan error, 1)

	configurator := &Configurator{
		backend:     be,
		observer:    obs,
		taskManager: task.NewTaskManager(),
	}

	t := configurator.addWatchOnChangeProxy()
	go func() {
		for err := range t.ErrorChan() {
			errorC <- err
		}
	}()
	return errorC
}

func (c *Configurator) addWatchOnChangeProxy() *task.Task {
	proxyChangesC := make(chan proxy.ApiProxySpec, 100)
	stopC := make(chan bool, 1)

	proxyWatcherTask := task.New("addWatchOnChangeProxy", func() error {
		go c.backend.WatchProxyChanges(proxyChangesC, stopC)
		for newProxy := range proxyChangesC {
			if newProxy != nil {
				c.observer.OnChangeProxy(newProxy)
			}
		}
		return nil
	})
	proxyWatcherTask.OnStopFn(func() {
		stopC <- true
	})
	proxyWatcherTask.RunOnce()
	c.taskManager.RegisterTask(proxyWatcherTask)

	return proxyWatcherTask
}
