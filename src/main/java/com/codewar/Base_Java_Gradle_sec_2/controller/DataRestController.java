package com.codewar.Base_Java_Gradle_sec_2.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codewar.Base_Java_Gradle_sec_2.models.DataC;
import com.codewar.Base_Java_Gradle_sec_2.serviceRepository.dataRepository;

import lombok.extern.log4j.Log4j2;

@Log4j2
@RestController
@RequestMapping(value = "/data/list")
public class DataRestController {
	
	@Autowired
	public dataRepository dataRepo;
	
//	Func findAll
	@GetMapping(value = "/findAll", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<DataC> listData() {
		List<DataC> findList = dataRepo.findAllList();
		log.info("Datatable {}", findList);
		return findList;
	}

//	Func save
	@PostMapping(value = "/create/{ci}/{name}/{lname}/{phone}/{email}/{gender}", produces = MediaType.APPLICATION_JSON_VALUE)
	public void createData(@PathVariable("ci") Integer ci, @PathVariable("name") String name,
			@PathVariable("lname") String lname, @PathVariable("phone") Integer phone, @PathVariable("email") String email,
			@PathVariable("gender") String gender) {
		
		log.info("Datos {}, {}, {}, {}, {}, {}", ci, name, lname, phone, email, gender);
		dataRepo.createData(ci, name, lname, phone, email, gender);
		log.info("Datos agregados satisfactoriamente {}, {}, {}, {}, {}, {}", ci, name, lname, phone, email, gender);
	}

//	Func findById
	@GetMapping(value = "/findCi/{ci}", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<DataC> listDataByCi(@PathVariable("ci") Integer ci) {
		List<DataC> findListCi = dataRepo.findByCiList(ci);
		log.info("Datos {}", findListCi);
		return findListCi;		
	}
	
//	Func deleteById
	@PostMapping(value = "/delete/{ci}", produces = MediaType.APPLICATION_JSON_VALUE)
	public void deleteDataByCi(@PathVariable("ci") Integer ci) {
		dataRepo.deleteByCiList(ci);
		log.info("Datos de la ci: {} eliminados", ci);		
	}
	
//	Func deleteAll
	@PostMapping(value = "/deleteAll", produces = MediaType.APPLICATION_JSON_VALUE)
	public void deleteAllData() {
		dataRepo.deleteAllList();
	}
	
//	Func update
	@PostMapping(value = "/update/{ci}/{name}/{lname}/{phone}/{email}/{gender}", produces = MediaType.APPLICATION_JSON_VALUE)
	public void updateData(@PathVariable("ci") Integer ci, @PathVariable("name") String name,
			@PathVariable("lname") String lname, @PathVariable("phone") Integer phone, @PathVariable("email") String email,
			@PathVariable("gender") String gender) {
		
		dataRepo.updateData(ci, name, lname, phone, email, gender);
		log.info("Datos actualizados: {}, {}, {}, {}, {}, {}", ci, name, lname, phone, email, gender);
	}

}
