package zw.co.hisolutions.common.entity.impl;

//package zw.co.hisolutions.core.common.basic.service.impl;
//
//import java.io.Serializable;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Service;
//import zw.co.hisolutions.core.common.basic.dao.GenericDao;
//import zw.co.hisolutions.core.common.basic.entity.BaseEntity;
//import zw.co.hisolutions.core.common.basic.service.GenericService;
//import zw.co.hisolutions.controllers.MainController;
//
///**
// * @author denzil
// * @param <T>
// * @param <ID>
// */
//@Service
//public class GenericServiceImpl<T extends BaseEntity, ID extends Serializable>
//        implements GenericService<T, ID> {
//
//    private GenericDao<T, ID> genericDao;
//
//    @Autowired
//    public GenericServiceImpl(GenericDao<T, ID> genericDao) {
//        this.genericDao = genericDao;
//    }
//
//    public GenericServiceImpl() {
//    }
//
//    @Override
//    public JpaRepository getDao() {
//        return genericDao;
//    }
//
//    public Class getController() {
//        return MainController.class;
//    }
//
//}
