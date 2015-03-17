/*
* @Author: Javier Teso
* @Date:   2014-11-20 08:45:27
* @Last Modified by:   Javier Teso
* @Last Modified time: 2014-11-27 21:23:51
 */

package dao

import (
	"encoding/xml"
	"time"
)

// type Status string -- enum are not supported by gurp

const (
	ERROR   string = "ERROR"
	SUCCESS        = "SUCCESS"
	RUNNING        = "RUNNING"
)

// Instance is the logical representation of either an executed or executing middleware
type Instance interface {
	GetID() int64
	GetMID() string
	GetEID() int64
	GetStatus() string
	SetStatus(s string)
}

type InstanceBase struct {
	XMLName   xml.Name `db:"-" json:"-" xml:"instance"`
	Id        int64    `db:"id" json:"id" xml:"id,attr"`
	Mid       string   `db:"middleware_id" json:"middlewareId" xml:"middlewareId"`
	Mlabel    string   `db:"middleware_label" json:"middlewareLabel" xml:"middlewareLabel"`
	Eid       int64    `db:"execution_id" json:"eid" xml:"eid"`
	Status    string   `db:"status" json:"status,omitempty" xml:"status"`
	CreatedOn int64    `db:"created_on" json:"createdOn" xml:"createdOn"`
}

func (i *InstanceBase) GetID() int64 {
	return i.Id
}

func (i *InstanceBase) GetMID() string {
	return i.Mid
}

func (i *InstanceBase) GetEID() int64 {
	return i.Eid
}

func (i *InstanceBase) GetStatus() string {
	return i.Status
}

func (i *InstanceBase) SetStatus(s string) {
	i.Status = s
}

func NewInstance(mid string, mlabel string, eid int64) *InstanceBase {
	return &InstanceBase{
		Mid:       mid,
		Mlabel:    mlabel,
		Eid:       eid,
		Status:    RUNNING,
		CreatedOn: time.Now().UnixNano(),
	}
}
