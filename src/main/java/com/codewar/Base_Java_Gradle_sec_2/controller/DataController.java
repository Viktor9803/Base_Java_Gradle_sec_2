package com.codewar.Base_Java_Gradle_sec_2.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/data")
public class DataController {
	
	@GetMapping(value = "/home")
	public String home() {
		
		return "baseJava/home";
	}
	
	@GetMapping(value = "/list")
	public String listData() {

		return "baseJava/ListData";
	}

}
