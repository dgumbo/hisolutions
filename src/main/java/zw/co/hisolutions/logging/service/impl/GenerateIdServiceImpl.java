package zw.co.psmi.hms.logging.service.impl;

import java.io.Serializable;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SessionImplementor;
import org.hibernate.id.IdentifierGenerator;
import org.springframework.stereotype.Service;


@Service
public class GenerateIdServiceImpl implements IdentifierGenerator{
	@Override
	public Serializable generate(SessionImplementor session, Object object) throws HibernateException {
		String prefix = "AUD";
		long count = 0;
		 Connection connection = session.connection();
		    try {
		        Statement statement=connection.createStatement();
		        ResultSet rs=statement.executeQuery("select count(audittrailid) as Id from audittrail ");
		        if(rs.next())
		            {
		        	count = rs.getLong("Id");
		        	}
		        } catch (SQLException e) { e.printStackTrace(); }
		count++;   
		String number = new StringBuilder((new StringBuilder("00000000000"+count).reverse().toString()).substring(0, 12)).reverse().toString();
		prefix = prefix+number;		
		return prefix;
	}

}
