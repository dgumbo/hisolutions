package zw.co.hisolutions.spring.configs;

import java.util.Properties;
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

@Configuration
@ComponentScan(basePackages = {"zw.co.hisolutions.tutorials.core.services.jpa"})
//@EnableTransactionManagement
@EnableJpaRepositories(basePackages = {"zw.co.hisolutions.tutorials.core.entities.dao"})//, entityManagerFactoryRef="entityManagerFactory") 
public class TestsPreConfiguration {

    @Autowired
    private Environment env;
    
    @Bean
    public DataSource dataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        //dataSource.setclass (="org.springframework.jdbc.datasource.DriverManagerDataSource">);
        dataSource.setDriverClassName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
        dataSource.setUrl("jdbc:sqlserver://localhost:1433;databaseName=hisolutions");
        dataSource.setUsername("sa");
        dataSource.setPassword("5p1tf1r3");  
        return dataSource;
    }

    @Bean (name="entityManagerFactory")
    public LocalContainerEntityManagerFactoryBean entityManagerFactory() throws ClassNotFoundException {
        LocalContainerEntityManagerFactoryBean entityManagerFactory = new LocalContainerEntityManagerFactoryBean();
        entityManagerFactory.setPackagesToScan("zw.co.hisolutions.tutorials.core.entities");//" value="org.wahid.cse.entity" />
        entityManagerFactory.setDataSource(dataSource());//" ref="dataSource" />

        entityManagerFactory.getJpaPropertyMap().put("hibernate.show_sql", "true");
        entityManagerFactory.getJpaPropertyMap().put("hibernate.hbm2ddl.auto", "create");
        entityManagerFactory.getJpaPropertyMap().put("hibernate.dialect", "org.hibernate.dialect.SQLServerDialect");

        entityManagerFactory.setPersistenceProviderClass(HibernatePersistenceProvider.class); // org.hibernate.jpa.HibernatePersistenceProvider

        return entityManagerFactory;
    }

    @Bean(name="transactionManager")
    public PlatformTransactionManager jpaTransactionManager() throws ClassNotFoundException { // TODO: Really need this?
        final JpaTransactionManager transactionManager = new JpaTransactionManager(); // http://stackoverflow.com/questions/26562787/hibernateexception-couldnt-obtain-transaction-synchronized-session-for-current
        transactionManager.setEntityManagerFactory(entityManagerFactory().getObject());
        return transactionManager;
    }


    private final Properties hibernateProperties() {
        final Properties hibernateProperties = new Properties();
        hibernateProperties.setProperty("hibernate.hbm2ddl.auto", "create-drop");
        hibernateProperties.setProperty("hibernate.dialect", env.getProperty("hibernate.dialect"));

        hibernateProperties.setProperty("hibernate.show_sql", "true");
        hibernateProperties.setProperty("hibernate.format_sql", "true");
        // hibernateProperties.setProperty("hibernate.globally_quoted_identifiers", "true");
        hibernateProperties.setProperty("hibernate.cache.region.factory_class", "org.hibernate.cache.ehcache.EhCacheRegionFactory");

        // Envers properties
        hibernateProperties.setProperty("org.hibernate.envers.audit_table_suffix", env.getProperty("envers.audit_table_suffix")); // TODO: Really need this?

        return hibernateProperties;
    }
}
