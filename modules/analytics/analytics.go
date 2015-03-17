package analytics

//type Analytics struct {
//	DB dao.MiddlewareDB
//}
//
//func NewAnalytics(params core.ModuleParams) *Analytics {
//	return &Analytics{
//		DB: dao.NewSQLiteDB(true),
//	}
//}
//
//func (ba *Analytics) ProcessRequest(ctx core.FlowContext) (*http.Response, error) {
//	mdlwrId, _ := ctx.GetUserData(UD_MDLWR_ID) //fixme error handling
//	mdlwrLabl, _ := ctx.GetUserData(UD_MDLWR_LABEL)
//
//	dbInstanceID := ba.DB.AddInstance(dao.NewInstance(mdlwrId.(string),
//		mdlwrLabl.(string),
//		ctx.GetId()))
//	ctx.SetUserData(UD_DB_PIPELINE_ID, dbInstanceID)
//	return nil, nil
//}
//
//func (ba *Analytics) ProcessResponse(ctx core.FlowContext) (*http.Response, error) {
//	instanceId, found := ctx.GetUserData(UD_DB_PIPELINE_ID)
//
//	if found == false {
//		logutils.FileLogger.Error("Error while trying to update the status. InstanceId: %d cannot be found in the context.", instanceId)
//	}
//	i, err, found := ba.DB.GetInstanceByKeyId(instanceId.(int64))
//
//	if found == false {
//		logutils.FileLogger.Error("Error while trying to update the status. InstanceId: %d cannot be found in the db. Err: %s", instanceId, err)
//	} else {
//		if err != nil {
//			ba.DB.UpdateStatus(i.GetMID(), i.GetEID(), dao.ERROR)
//		}
//		_, err_update := ba.DB.UpdateStatus(i.GetMID(), i.GetEID(), dao.SUCCESS)
//		if err_update != nil {
//			logutils.FileLogger.Error("Error while trying to update the status. InstanceMID: %s and InstaceEID:%d. Error: %s", i.GetMID(), i.GetEID(), err_update)
//		}
//	}
//	return nil, nil
//}
//
//func init() {
//	core.Register("analytics", NewAnalytics)
//}
