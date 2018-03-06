package zw.co.hisolutions.util;

import java.util.Collections;
import javax.persistence.EntityGraph;
import org.hibernate.SessionFactory;
import org.hibernate.engine.query.spi.EntityGraphQueryHint;
import org.hibernate.engine.spi.SessionFactoryImplementor;
import org.hibernate.hql.internal.ast.ASTQueryTranslatorFactory;
import org.hibernate.hql.spi.QueryTranslator; 
import org.hibernate.hql.spi.QueryTranslatorFactory;
import org.hibernate.jpa.graph.internal.EntityGraphImpl;

/**
 *
 * @author denzil
 */
public class HqlToSqlTranslator {
    private SessionFactory sessionFactory;
 
  public void setSessionFactory(SessionFactory sessionFactory){
    this.sessionFactory = sessionFactory;
  }
 
  public String toSql(String hqlQueryText){
    if (hqlQueryText!=null && hqlQueryText.trim().length()>0){
      final QueryTranslatorFactory translatorFactory = new ASTQueryTranslatorFactory();
      final SessionFactoryImplementor factory = 
        (SessionFactoryImplementor) sessionFactory;
            
        EntityGraph<?> originEntityGraph = null;        
      EntityGraphQueryHint entityGraphQueryHint = new EntityGraphQueryHint(originEntityGraph);
      
      final QueryTranslator translator = translatorFactory.
        createQueryTranslator(
          hqlQueryText, 
          hqlQueryText, 
          Collections.EMPTY_MAP, 
          factory,
          entityGraphQueryHint
        );
      translator.compile(Collections.EMPTY_MAP, false);
      return translator.getSQLString(); 
    }
    return null;
  }
}
