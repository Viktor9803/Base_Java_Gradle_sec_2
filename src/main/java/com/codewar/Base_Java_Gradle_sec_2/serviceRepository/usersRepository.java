package com.codewar.Base_Java_Gradle_sec_2.serviceRepository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.codewar.Base_Java_Gradle_sec_2.models.Users;

public interface usersRepository extends JpaRepository<Users, Integer> {
	
	Users findByUsername(String username);
	
//	Func findAll
	@Transactional(readOnly = true)
	@Query(value = "SELECT * FROM `usuarios` ORDER BY id DESC", nativeQuery = true)
	List<Users> findAllUserList();

}
