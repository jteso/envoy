# logutils

`logutils` is a Go package that enriches the standard library "log" package
to make logging a bit more practical, without throwing yet another logging package to the Go ecosystem.


## Usage

```
filter := &logutils.LevelFilter{
        Levels:   []logutils.LogLevel{"DEBUG", "INFO", "WARN", "ERROR"},
        MinLevel: "INFO",
        Writer:   os.Stdout,
    }

logger := log.New(filter, "", 0)
logger.Println("[INFO] testing....") // <-- this will print
logger.Println("[DEBUG] hello.....") // <-- this will not be printed
```

or using the utility `logger`:

```
LogDebugf(ConsoleLogger, "testing... %s", "the logger") 
LogInfof(ConsoleLogger, "testing....") 
LogWarnf(ConsoleLogger, "testing....") 
LogErrorf(ConsoleLogger, "testing....") 
LogFatalf(ConsoleLogger, "a very bad thing happened") // it will exit after throwing the stacktrace 


```

## TODO

- FileLogger
- SyslogLogger

