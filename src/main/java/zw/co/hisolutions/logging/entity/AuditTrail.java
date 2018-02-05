package zw.co.hisolutions.logging.entity;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "audit_trail")
public class AuditTrail {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long auditTrailID;
    @Column(length = 255)
    private String auditTrailAction;
    @Lob
    private String auditTrailDetail;
    private String username;
    private String auditTrailIP;
    private String auditTrailBrowser;
    private Date auditTrailDate = new Date();
}
