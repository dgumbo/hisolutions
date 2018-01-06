package zw.co.hisolutions.spring.configs_test;

import javax.sql.DataSource;
import org.hibernate.jpa.HibernatePersistenceProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabase;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

import com.mysql.jdbc.Driver;
import com.microsoft.sqlserver.jdbc.SQLServerDriver;
import org.hsqldb.jdbcDriver;

@Configuration
@ComponentScan(basePackages = {"zw.co.hisolutions.tutorials.core.services.jpa"})
@EnableJpaRepositories(basePackages = {"zw.co.hisolutions.tutorials.core.entities.dao"})//, entityManagerFactoryRef="entityManagerFactory") 
public class TestsPreConfiguration_HISolutions {
    @Autowired
    private Environment env;

    @Bean
    public DataSource dataSource() {
        //-- Return the correct data source depending on prefered environemnt  --//
        //-- Warning may drop and create existing tables  --//

        return dataSource_MySQL();
        //return dataSource_SQLServer();
        //return dataSource_HSQL();
    }

    private DataSource dataSource_MySQL() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("com.mysql.jdbc.Driver");
        dataSource.setUrl("jdbc:mysql://localhost:3306/hisolutions_dev");
        dataSource.setUsername("root");
        dataSource.setPassword("root");
        return dataSource;
    }

    private DataSource dataSource_SQLServer() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
        dataSource.setUrl("jdbc:sqlserver://192.200.10.110;databaseName=hisolutions_dev");
        dataSource.setUsername("HISAdmin");
        dataSource.setPassword("5p1tf1r3");
        return dataSource;
    }

    private DataSource dataSource_HSQL() {
        EmbeddedDatabaseBuilder builder = new EmbeddedDatabaseBuilder();
        EmbeddedDatabase dataSource = builder.setType(EmbeddedDatabaseType.HSQL)
                .build();
        return dataSource;
    }

    @Bean(name = "entityManagerFactory")
    public LocalContainerEntityManagerFactoryBean entityManagerFactory() throws ClassNotFoundException {
        LocalContainerEntityManagerFactoryBean entityManagerFactory = new LocalContainerEntityManagerFactoryBean();
        entityManagerFactory.setPackagesToScan("zw.co.hisolutions.tutorials.core.entities");//" value="org.wahid.cse.entity" />

        //entityManagerFactory.getJpaPropertyMap().put("hibernate.hbm2ddl.auto", "update");
        entityManagerFactory.getJpaPropertyMap().put("hibernate.hbm2ddl.auto", "create-drop");

        entityManagerFactory.getJpaPropertyMap().put("hibernate.show_sql", "true");
        //entityManagerFactory.getJpaPropertyMap().put("hibernate.format_sql", "true");

        String hibernate_dialect = "";
        DataSource data_source = dataSource();
        try {
            String driverClassName = data_source.getConnection().getMetaData().getURL();
            if (driverClassName.toLowerCase().contains("sqlserver")) {
                hibernate_dialect = "org.hibernate.dialect.SQLServerDialect";
            } else if (driverClassName.toLowerCase().contains("mysql")) {
                hibernate_dialect = "org.hibernate.dialect.MySQLDialect";
            } else if (driverClassName.toLowerCase().contains("hsql")) {
                hibernate_dialect = "org.hibernate.dialect.HSQLDialect";
            }
        } catch (SQLException ex) {
            Logger.getLogger(TestsPreConfiguration_HISolutions.class.getName()).log(Level.SEVERE, null, ex);
        }
        entityManagerFactory.setDataSource(data_source);//" ref="dataSource" /> 
        entityManagerFactory.getJpaPropertyMap().put("hibernate.dialect", hibernate_dialect);

        entityManagerFactory.setPersistenceProviderClass(HibernatePersistenceProvider.class); // org.hibernate.jpa.HibernatePersistenceProvider

        return entityManagerFactory;
    }

    @Bean(name = "transactionManager")
    public PlatformTransactionManager jpaTransactionManager() throws ClassNotFoundException { // TODO: Really need this?
        final JpaTransactionManager transactionManager = new JpaTransactionManager(); // http://stackoverflow.com/questions/26562787/hibernateexception-couldnt-obtain-transaction-synchronized-session-for-current
        transactionManager.setEntityManagerFactory(entityManagerFactory().getObject());
        return transactionManager;
    }
}
