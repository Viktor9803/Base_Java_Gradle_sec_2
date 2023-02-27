package com.codewar.Base_Java_Gradle_sec_2.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
@EnableWebSecurity
public class securityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private UserDetailsService userDetailsService;

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {

		auth.userDetailsService(userDetailsService);

	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {

		http.authorizeRequests()
				.antMatchers("/data/home", "/resources/**").permitAll()
				.antMatchers("/data/list").hasAnyRole("USER", "ADMIN")
				.antMatchers("/data/list/findAll").hasAnyRole("USER", "ADMIN")
				.antMatchers(HttpMethod.POST, "/data/list/create/**").hasRole("ADMIN")
				.antMatchers("/data/list/findCi/**").hasAnyRole("USER", "ADMIN")
				.antMatchers(HttpMethod.POST, "/data/list/delete/**").hasRole("ADMIN")
				.antMatchers(HttpMethod.POST, "/data/list/deleteAll").hasRole("ADMIN")
				.antMatchers(HttpMethod.POST, "/data/list/update/**").hasAnyRole("USER", "ADMIN")
				.and()
					.csrf().disable()
					.formLogin().loginPage("/data/login").defaultSuccessUrl("/data/home").failureUrl("/data/login?error").permitAll()
				.and()
		        	.logout().logoutSuccessUrl("/data/home").invalidateHttpSession(true).permitAll();
	}

	@Bean
	public BCryptPasswordEncoder passEncoder() {
		return new BCryptPasswordEncoder();
	}

}
