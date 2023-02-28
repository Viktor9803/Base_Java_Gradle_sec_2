package com.codewar.Base_Java_Gradle_sec_2.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UserController {

	@GetMapping(value = "/data/login")
	public String login() {
		return "baseJava/login";

	}

	@GetMapping(value = "/")
	public String index() {
		return "baseJava/home";

	}

}
