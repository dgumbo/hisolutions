package zw.co.hisolutions.logging.service.impl;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import zw.co.hisolutions.logging.entity.AuditTrail;
import zw.co.hisolutions.logging.entity.dao.AuditTrailDao;
import zw.co.hisolutions.logging.service.AuditTrailService;
import zw.co.hisolutions.security.entity.UserLogin;

@Service
@Slf4j
public class AuditTrailServiceImpl implements AuditTrailService {

    AuditTrailDao auditTrailDao;

    @Autowired
    public AuditTrailServiceImpl(AuditTrailDao audittrailDao) {
        this.auditTrailDao = audittrailDao;
    }

    @Override
    public void saveAuditTrail(String action, String detail, UserLogin userLogin) {
        AuditTrail auditTrail = new AuditTrail();
        auditTrail.setAuditTrailAction(action);
        auditTrail.setAuditTrailDetail(detail);
        auditTrail.setUsername(userLogin.getUsername());
        auditTrail.setAuditTrailIP(userLogin.getIp());
        auditTrail.setAuditTrailBrowser(userLogin.getBroswer());
        //log.info("save::" + auditTrail);
        auditTrailDao.save(auditTrail);
    }
}
