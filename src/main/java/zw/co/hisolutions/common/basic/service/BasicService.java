package zw.co.hisolutions.common.basic.service;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author dgumbo
 * @param <T>
 */
public interface BasicService<T> {

    public JpaRepository<T, Long> getDao();

//    default T getByID(Long id) {
//        return getDao().findOne(id);
//    }

    @Transactional(isolation = Isolation.READ_UNCOMMITTED, propagation = Propagation.REQUIRED)
    public String save(T t);

    default List<T> findAll() {
        return getDao().findAll();
    }
}
