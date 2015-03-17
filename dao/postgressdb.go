package dao

import (
	"database/sql"

	"github.com/coopernurse/gorp"
	//_ "github.com/mattn/go-sqlite3"
	"log"
	"sync"

	"github.com/jteso/envoy/logutils"
	_ "github.com/lib/pq"
)

var (
	sqliteDBInstance *SQLiteDB
	once             sync.Once
)

type SQLiteDB struct {
	dbmap  *gorp.DbMap
	Logger *logutils.Logger
}

func NewSQLiteDB(truncate bool) *SQLiteDB {
	once.Do(func() {
		sqliteDBInstance = &SQLiteDB{
			dbmap:  initdb(truncate),
			Logger: logutils.New(logutils.ConsoleFilter),
		}
	})

	return sqliteDBInstance
}

func (s *SQLiteDB) AddInstance(instance *InstanceBase) int64 {
	err := s.dbmap.Insert(instance)
	checkErr(err, "Insert failed")

	var key int64
	err2 := s.dbmap.SelectOne(&key, "select id from instances where middleware_id = :mid and execution_id = :eid",
		map[string]interface{}{"mid": instance.GetMID(), "eid": instance.GetEID()})
	checkErr(err2, "Getting ID failed")
	return key
}

func (s *SQLiteDB) GetInstance(mid string, eid int64) (i *InstanceBase, err error, found bool) {
	inst := &InstanceBase{}
	err = s.dbmap.SelectOne(&inst, "select * from instances where middleware_id= :mid and execution_id= :eid",
		map[string]interface{}{"mid": mid, "eid": eid})

	if err != nil {
		return &InstanceBase{}, err, false
	}

	return inst, nil, true

}

func (s *SQLiteDB) GetInstanceByKeyId(key int64) (i *InstanceBase, err error, found bool) {
	inst := &InstanceBase{}
	err = s.dbmap.SelectOne(&inst, "select * from instances where id= :id",
		map[string]interface{}{"id": key})

	if err != nil {
		return &InstanceBase{}, err, false
	}
	return inst, nil, true
}

func (s *SQLiteDB) GetAllInstances(mid string) ([]int64, error) {
	var eids []int64
	_, err := s.dbmap.Select(&eids, "select id from instances where middleware_id= :mid",
		map[string]interface{}{"mid": mid})
	return eids, err
}

func (s *SQLiteDB) DeleteInstance(i *InstanceBase) (int64, error) {
	return s.dbmap.Delete(i)
}

func (s *SQLiteDB) DeleteInstanceByIds(mid string, eid int64) (int64, error) {
	rs, err := s.dbmap.Exec("delete from instances where middleware_id= :mid and execution_id= :eid",
		map[string]interface{}{"mid": mid, "eid": eid})
	if err != nil {
		return 0, err
	}
	return rs.RowsAffected()

}

func (s *SQLiteDB) UpdateStatus(mid string, eid int64, status string) (int64, error) {
	i, _, _ := s.GetInstance(mid, eid)
	i.SetStatus(status)

	rows, err := s.dbmap.Update(i)
	if err != nil {
		return 0, err
	}
	return rows, nil
}

func (s *SQLiteDB) closeDB() {
	s.dbmap.Db.Close()
}

func initdb(truncate bool) *gorp.DbMap {

	// connect to db using standard Go database/sql API
	// use whatever database/sql driver you wish
	db, err := sql.Open("postgres", "host=localhost port=5432 dbname=xprssn_db sslmode=disable")
	checkErr(err, "sql.Open failed")

	// construct a gorp DbMap
	dbmap := &gorp.DbMap{Db: db, Dialect: gorp.PostgresDialect{}}

	// add a table, setting the table name to 'instances' and
	// specifying that the Id property is an auto incrementing PK
	dbmap.AddTableWithName(InstanceBase{}, "instances").SetKeys(true, "Id")

	// create the table. in a production system you'd generally
	// use a migration tool, or create the tables via scripts
	err = dbmap.CreateTablesIfNotExists()
	checkErr(err, "Create tables failed")

	// delete any existing rows
	if truncate {
		err := dbmap.TruncateTables()
		checkErr(err, "Table truncation failed")
	}

	return dbmap
}

func checkErr(err error, msg string) {
	if err != nil {
		log.Fatalln(msg, err)
	}
}
