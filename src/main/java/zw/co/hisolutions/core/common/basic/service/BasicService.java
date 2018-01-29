package zw.co.hisolutions.core.common.basic.service;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.hateoas.Link;
import org.springframework.hateoas.Resource;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import zw.co.hisolutions.core.common.basic.entity.BaseEntity; 

/**
 * @author denzil
 * @param <T>
 */ 
public interface BasicService<T extends BaseEntity> {

    @Transactional(isolation = Isolation.READ_UNCOMMITTED, propagation = Propagation.SUPPORTS, readOnly = true)
    default List<T> findAll() {
        return getDao().findAll();
    }

    @Transactional(isolation = Isolation.READ_UNCOMMITTED, propagation = Propagation.SUPPORTS, readOnly = true)
    default T find(Long id) {
        return getDao().findById(id).get();
    }

    @Transactional(isolation = Isolation.READ_UNCOMMITTED, propagation = Propagation.REQUIRED)
    default T create(T data) throws Exception {
        return getDao().save(data);
    }

    default void delete(Long id) throws Exception {
        T entity = find(id);
        getDao().delete(entity);
    }

    default T update(Long id, T data) throws Exception{
        data.setId(id);
        return getDao().save(data);
    }
     
    default Resource<T> buildResource(T entity) {
        Resource<T> entity_resource = new Resource<>(entity);
        Link selectlink = linkTo(getController()).slash(entity_resource.getContent().getId()).withSelfRel().withType("get");;
        Link deletelink = linkTo(getController()).slash(entity_resource.getContent().getId()).slash("delete").withRel("delete").withType("delete");;
        entity_resource.add(selectlink);
        entity_resource.add(deletelink);

        return entity_resource;
    }
    
    public JpaRepository<T, Long> getDao();
    public Class  getController();
}
