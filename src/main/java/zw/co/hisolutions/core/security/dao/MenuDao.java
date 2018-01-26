package zw.co.hisolutions.core.security.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import zw.co.hisolutions.core.security.entity.Menu;

@Repository
public interface MenuDao extends JpaRepository<Menu, Long> {
	List<Menu> findByMenuGroupId(Long menuGroupID);
	List<Menu> findByActiveStatusTrue();

    public void save(List<Menu> menus);



}
