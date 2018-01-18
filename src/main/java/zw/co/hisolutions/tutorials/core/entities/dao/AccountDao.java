package zw.co.hisolutions.tutorials.core.entities.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import zw.co.hisolutions.tutorials.core.entities.Account;

@Repository
public interface AccountDao extends CrudRepository<Account, Long> {

    public Account getByUsername(String accountName);   

    public Account getById(Long id);
}
