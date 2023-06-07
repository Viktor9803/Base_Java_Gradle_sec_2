/**
 * 
 */
$(document).ready(function() {

	/*#####Validaciones del formulario login#####*/
	$('.formClass').on('blur', function() {
		//console.log($(this).attr('id'));
		if ($(this).val() != '' && $(this).val().trim() != '') {
			$(this).val($(this).val().trim());
			//console.log('Valido');
			//console.log($('.referenceForm.is-valid').length);
			$(this).addClass('is-valid').removeClass('border border-danger').addClass('border border-success');
		} else {
			//console.log('Ivalido');
			$(this).removeClass('is-valid').removeClass('border border-success').addClass('border border-danger');
		}
	});

	/************EVENTO SUBMIT BOTON EVIAR FORMULARIO PARA NUEVO REGISTRO / ACTUALIZAR REGISTRO************/
	/*$('#formData').on('submit', function(e) {
		//console.log($('.referenceForm.is-valid').length);
		e.preventDefault();
		e.stopImmediatePropagation();
		if ($('.dataModalFormClass.is-valid').length == 6) {
			$('.dataModalFormClass').val().trim();
			//console.log('Envio del rest');
			//console.log($('.dataModalFormClass.is-valid').length());
			if (idReg == undefined || idReg == '' || idReg == null) {
				nuevoRegistro();
			} else {
				actualizarRegistro();
			}
		} else {
			//console.log('Formulario incompleto');
			$(".dataModalFormClass").each(function() {
				//Validaciones formulario
				$(this).trigger('focus');
				$(this).trigger('blur');
			});
		}
	});*/

	/************ FUNCIÓN PARA EDITAR USUARIO EVENTO BTN / AJAX ************/
	/*$('body').on('click', '.btnEditU', function(e) {
			e.preventDefault();
			ciEdit = $(this).attr('ciedt');
			//console.log(ciEdit);
			//##### Limpiar formulario
			$('#ciField').val('');
			$('#nameField').val('');
			$('#lnameField').val('');
			$('#telfField').val('');
			$('#emailField').val('');
			$('#genderField').val($('#genderField').attr('selected'));
			$('.dataModalFormClass').addClass('is-valid').removeClass('border border-danger').addClass('border border-success');
	
			//##### ocultar validaciones
			$('#validCi').attr('hidden', 'hidden');
			$('#validName').attr('hidden', 'hidden');
			$('#validLname').attr('hidden', 'hidden');
			$('#validTelf').attr('hidden', 'hidden');
			$('#validEmail').attr('hidden', 'hidden');
			$('#validGender').attr('hidden', 'hidden');
	
			listarUsuario();
	
			$('#formModal').modal('show');
			$('#titleModalReg').text('Editar registro');
		});*/

	/*function listarUsuario() {
		$.ajax({
			type: "GET",
			url: '/data/user/findIdUser/' + $('#btnEditUser').attr('idDlt'),
			success: function(result) {
				console.log(result);
				$('#fNameField').val(result[0].fname);

				$('#lNameField').val(result[0].lname);
				$('#emailField').val(result[0].email);
				$('#ageField').val(result[0].age);
				$('#roleField').val(result[0].role);
				idReg = result[0].id;
			},
			error: function(error) {
				console.log("error", error);
			}
		}).done(function() {
			console.log('Exito');

		}).fail(function() {
			Swal.fire({
				icon: 'error',
				title: 'No se pudo ejecutar el servicio',
				showConfirmButton: false,
				timer: 1500
			})
		});
	}*/

	/*function actualizarUsuario() {
		$.ajax({
			type: "POST",
			url: '/data/user/update/' + $('#btnEditUser').attr('idEdt') + '/' + $('#fNameField').val() + '/' + $('#lNameField').val() + '/' + $('#emailField').val() + '/' + $('#ageField').val() + '/' + $('#roleField').val()
		}).done(function() {
			Swal.fire({
				icon: 'success',
				title: 'Registro actualizado exitosamente',
				showConfirmButton: false,
				timer: 1500
			})
			$("#formModal").modal('hide');

			//##### Limpiar formulario
			$('#fNameField').val('');
			$('#lNameField').val('');
			$('#emailField').val('');
			$('#ageField').val('');
			$('#roleField').val('');
			//$('#genderField').val($('#genderField').attr('selected'));
			$('.dataModalFormClass').removeClass('is-valid').removeClass('border border-success');

			userListRequest();

		}).fail(function() {
			Swal.fire({
				icon: 'error',
				title: 'No se pudo ejecutar el servicio',
				showConfirmButton: false,
				timer: 1500
			})
		});
	}*/

	/************ FUNCIÓN PARA ELIMINAR USUARIO EVENTO BTN / AJAX ************/

	$('body').on('click', '.destruirU', function(e) {
		e.preventDefault();
		//console.log('click');
		eliminarUsuario();
	});

	function eliminarUsuario() {
		$.ajax({
			type: "POST",
			url: '/data/user/delete/' + $('#btnDeleteUser').attr('idDlt')
		}).done(function() {
			Swal.fire({
				icon: 'success',
				title: 'Usuario eliminado exitosamente',
				showConfirmButton: false,
				timer: 1500
			})
			userListRequest();

		}).fail(function() {
			Swal.fire({
				icon: 'error',
				title: 'No se pudo ejecutar el servicio',
				showConfirmButton: false,
				timer: 1500
			})
			userListRequest();
		});
	}

	/**********AJAX LISTAR USUARIOS (DATATABLE)***********/
	userListRequest();
	function userListRequest() {
		//var origin   = window.location.origin;
		$('#userListRequest').DataTable({
			destroy: true,
			order: false,
			scrollX: true,
			"ordering": false,
			"paging": true,
			"bLengthChange": true,
			"iDisplayLength": 10,
			"pagingType": $(window).width() < 768 ? "simple" : "full_numbers",
			dom: 'lfrtip',
			autoWidth: false,
			language: {
				url: '/JS/language.json'
			},
			ajax: {
				url: '/data/user/listUser',
				dataSrc: '',
				complete: function(xhr, status) {
					//console.log(xhr);
					//console.log(status);
					//console.log('Completado consume del servicio');
				}
			},
			columns: [
				{
					"data": "id",
					"render": function(data, type, row, full) {
						return data;
					}
				},
				{
					"data": "username",
					"render": function(data, type, row, full) {
						return data;
					}
				},
				{
					"data": "fname",
					"render": function(data, type, row, full) {
						return data;
					}
				},
				{
					"data": "lname",
					"render": function(data, type, row, full) {
						return data;
					}
				},
				{
					"data": "email",
					"render": function(data, type, row, full) {
						return data;
					}
				},
				{
					"data": "age",
					"render": function(data, type, row, full) {
						return data;
					}
				},
				{
					"data": "create_date",
					"render": function(data, type, row, full) {
						return new Date(data).toLocaleString();
					}
				},
				{
					"data": "active",
					"render": function(data, type, row, full) {
						return (data == true) ? "Activo" : "Inactivo";
					}
				},
				{
					"data": "role",
					"render": function(data, type, row, full) {
						return (data == "ROLE_USER") ? "USUARIO" : (data == "ROLE_ADMIN") ? "ADMINISTRADOR" : "NO USER";
					}
				},
				{
					"data": "boton1",
					"render": function(data, type, row, full) {
						return '<a id="btnEditUser" type="button" class="btnEditU btn btn-primary btn-sm" idEdt="' + row["id"] + '"> Editar datos </a>';
					}
				},
				{
					"data": "boton2",
					"render": function(data, type, row, full) {
						return '<a id="btnDeleteUser" type="button" class="destruirU btn btn-danger btn-sm" idDlt="' + row["id"] + '"> Eliminar datos </a>';
					}
				},
			],
			"initComplete": function(settings, json) {
				//console.log(json);
				//console.log(json.length);
				$('#userListRequest_length').children().children().removeClass('form-select');
			}
		});
	}

});