package com.codewar.Base_Java_Gradle_sec_2.serviceRepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.codewar.Base_Java_Gradle_sec_2.models.Users;

public interface usersRepository extends JpaRepository<Users, Integer> {
	
	Users findByUsername(String username);

}
