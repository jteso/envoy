/*
* @Author: Javier Teso
* @Date:   2014-11-19 08:56:41
* @Last Modified by:   Javier Teso
* @Last Modified time: 2014-11-27 22:12:33
 */

package dao

import (
	"errors"
)

var ErrAlreadyExists = errors.New("album already exists")

// The DB interface defines methods to manipulate the albums.
type MiddlewareDB interface {
	AddInstance(instance *InstanceBase) int64

	GetInstance(mid string, eid int64) (i *InstanceBase, err error, found bool)
	GetInstanceByKeyId(key int64) (i *InstanceBase, err error, found bool)
	GetAllInstances(mid string) ([]int64, error)

	DeleteInstance(i *InstanceBase) (int64, error)
	DeleteInstanceByIds(mid string, eid int64) (int64, error)

	UpdateStatus(mid string, eid int64, s string) (int64, error)
}
