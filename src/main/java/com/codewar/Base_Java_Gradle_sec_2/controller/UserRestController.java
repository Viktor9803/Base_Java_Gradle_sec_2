package com.codewar.Base_Java_Gradle_sec_2.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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

//	Func findAll	
	@GetMapping(value = "/listUser")
	public List<Users> userListData() {
		List<Users> listUser = userRepo.findAllUserList();
		log.info("DataUser from table {}", listUser);
		return listUser;

	}

//	Func save
	@PostMapping(value = "/create/{username}/{password}/{fname}/{lname}/{email}/{age}/{active}/{role}/", produces = MediaType.APPLICATION_JSON_VALUE)
	public void createDUser(@PathVariable("username") String username, @PathVariable("password") String password,
			@PathVariable("fname") String fname, @PathVariable("lname") String lname,
			@PathVariable("email") String email, @PathVariable("age") Integer age,
			@PathVariable("active") boolean active, @PathVariable("role") String role) {

		log.info("Datos que se agregarán: {}, {}, {}, {}, {}, {}, {}, {}", username, fname, lname, email, age, active,
				role);
		userRepo.createUser(username, password, fname, lname, email, age, active, role);
		log.info("Datos agregados satisfactoriamente {}, {}, {}, {}, {}, {}, {}, {}", username, fname, lname, email,
				age, active, role);
	}

//	Func findById
	@GetMapping(value = "/findIdUser/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Users> listUserByID(@PathVariable("id") Integer id) {
		List<Users> listUserByID = userRepo.findByIdUser(id);
		log.info("Datos {}", listUserByID);
		return listUserByID;
	}

//	Func deleteById
	@PostMapping(value = "/delete/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public void deleteUserById(@PathVariable("id") Integer id) {
		userRepo.deleteByIdUser(id);
		log.info("Datos de usuario con id: {} eliminados", id);
	}

//	Func update
	@PostMapping(value = "/update/{id}/{fname}/{lname}/{email}/{age}/{role}", produces = MediaType.APPLICATION_JSON_VALUE)
	public void updateDUser(@PathVariable("id") Integer id, @PathVariable("fname") String fname,
			@PathVariable("lname") String lname, @PathVariable("email") String email, @PathVariable("age") Integer age,
			@PathVariable("role") String role) {
		
		userRepo.updateDUser(id, fname, lname, email, age, role);
		log.info("Datos actualizados: {}, {}, {}, {}, {}, {}", id, fname, lname, email, age, role);
	}

}
