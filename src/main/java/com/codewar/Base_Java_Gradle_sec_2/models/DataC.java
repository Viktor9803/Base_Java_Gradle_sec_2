package com.codewar.Base_Java_Gradle_sec_2.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

import com.sun.istack.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="datacrud")
public class DataC {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@NonNull
	private Integer ci;
		
	@NotNull
	private Integer id;
	@NotEmpty(message = "Llene el campo Nombre")
	private String name;
	@NotEmpty(message = "Llene el campo apellido")
	private String lname;
	@NotEmpty(message = "Ingrese un numero de contacto")
	private String phone;
	@NotEmpty(message = "Ingrese un correo electronico") @Email(message = "Ingrese un correo electronico valido")
	private String email;
	@NotEmpty(message = "Seleccione un genero")
	private String gender;

}
