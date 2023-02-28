package com.codewar.Base_Java_Gradle_sec_2.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codewar.Base_Java_Gradle_sec_2.models.Users;
import com.codewar.Base_Java_Gradle_sec_2.serviceRepository.usersRepository;

import lombok.extern.log4j.Log4j2;

@Log4j2
@RestController
@RequestMapping(value = "/data/user")
public class UserRestController {
	
	@Autowired
	private usersRepository userRepo;
	
	@GetMapping(value = "/listUser")
	public List<Users> userListData() {
		List<Users> listUser = userRepo.findAllUserList();
		log.info("DataUser from table {}", listUser);
		return listUser;
		
	}

}
