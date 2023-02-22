package com.codewar.Base_Java_Gradle_sec_2.security;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.codewar.Base_Java_Gradle_sec_2.models.Users;
import com.codewar.Base_Java_Gradle_sec_2.serviceRepository.usersRepository;

@Service
public class myUserDetailsService implements UserDetailsService {

	@Autowired
	public usersRepository usersRepo;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Users user = usersRepo.findByUsername(username);
		if (user != null) {
			List<GrantedAuthority> grantedAuthorities = new ArrayList<>();

			GrantedAuthority grantedAuthority = new SimpleGrantedAuthority(user.getRole());
			grantedAuthorities.add(grantedAuthority);

			return new User(user.getUsername(), user.getPassword(), grantedAuthorities);
		} else {
			throw new UsernameNotFoundException("User named " + username + " do not exist!");
		}
	}

}
