package com.codewar.Base_Java_Gradle_sec_2.serviceRepository;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import com.codewar.Base_Java_Gradle_sec_2.models.DataC;

public interface dataRepository extends CrudRepository<DataC, Integer> {
	
//	Func findAll
	@Transactional(readOnly = true)
	@Query(value = "SELECT * FROM `datacrud` ORDER BY id DESC", nativeQuery = true)
	List<DataC> findAllList();

//	Func deleteAll
	@Modifying
	@Transactional
	@Query(value = "DELETE * FROM `datacrud`", nativeQuery = true)
	void deleteAllList();

//	Func findById
	@Transactional(readOnly = true)
	@Query(value = "SELECT * FROM `datacrud` where ci = :ciField", nativeQuery = true)
	List<DataC> findByCiList(@Param("ciField") Integer ciField);

//	Func deleteById
	@Modifying
	@Transactional
	@Query(value = "DELETE FROM `datacrud` where ci = :ciField", nativeQuery = true)
	void deleteByCiList(@Param("ciField") Integer ciField);
	
//	Func save
	@Modifying
	@Transactional
	@Query(value = "INSERT INTO `datacrud` (ci, name, fname, phone, email, gender) "
			+ "value (:ciField, :nameField, :lnameField, :telfField, :emailField, :genderField)", nativeQuery = true)
	void createData(@Param("ciField") Integer ciField, @Param("nameField") String nameField, @Param("lnameField") String lnameField,
			@Param("telfField") Integer telfField, @Param("emailField") String emailField, @Param("genderField") String genderField);
	
//	Func update
	@Modifying
	@Transactional
	@Query(value = "UPDATE `datacrud` SET name = :nameField, fname = :lnameField, "
			+ "phone = :telfField, email = :emailField, gender = :genderField WHERE ci = :ciField", nativeQuery = true)
	void updateData(@Param("ciField") Integer ciField, @Param("nameField") String nameField, @Param("lnameField") String lnameField,
			@Param("telfField") Integer telfField, @Param("emailField") String emailField, @Param("genderField") String genderField);


}
