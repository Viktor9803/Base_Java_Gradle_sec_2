package com.codewar.Base_Java_Gradle_sec_2.serviceRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.codewar.Base_Java_Gradle_sec_2.models.Users;

public interface usersRepository extends JpaRepository<Users, Integer> {

	Users findByUsername(String username);

//	Func findAll
	@Transactional(readOnly = true)
	@Query(value = "SELECT * FROM `usuarios` ORDER BY id DESC", nativeQuery = true)
	List<Users> findAllUserList();

//	Func findById
	@Transactional(readOnly = true)
	@Query(value = "SELECT * FROM `usuarios` where id = :idField", nativeQuery = true)
	List<Users> findByIdUser(@Param("idField") Integer idField);

	Optional<Users> findById(Integer id);

//	Func deleteById
	@Modifying
	@Transactional
	@Query(value = "DELETE FROM `usuarios` where id = :idField", nativeQuery = true)
	void deleteByIdUser(@Param("idField") Integer idField);

//	Func save
	@Modifying
	@Transactional
	@Query(value = "INSERT INTO `usuarios` (username, password, fname, lname, email, age, active, role) "
			+ "value (:usernameField, :passwordField, :fnameField, :lnameField, :emailField, :ageField, :activeField, :roleField)", nativeQuery = true)
	void createUser(@Param("usernameField") String usernameField, @Param("passwordField") String passwordField,
			@Param("fnameField") String fnameField, @Param("lnameField") String lnameField,
			@Param("emailField") String emailField, @Param("ageField") Integer ageField,
			@Param("activeField") boolean activeField, @Param("roleField") String roleField);

//	Func update
	@Modifying
	@Transactional
	@Query(value = "UPDATE `usuarios` SET fname = :fnameField, lname = :lnameField, "
			+ "email = :emailField, age = :ageField, role = :rolerField WHERE id = :idField", nativeQuery = true)
	void updateDUser(@Param("idField") Integer idField, @Param("fnameField") String fnameField, @Param("lnameField") String lnameField,
			@Param("emailField") String emailField, @Param("ageField") Integer ageField, @Param("rolerField") String rolerField);

}
