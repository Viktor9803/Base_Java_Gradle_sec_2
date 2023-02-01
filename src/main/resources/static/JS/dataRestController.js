//VAR GLOBALES
var ciEdit;
var idReg;

$(document).ready(function() {

	/*#####Ocultar modal boton close#####*/
	$('body').on('click', '.btn-close', function(e) {
		//e.preventDefault();
		$("#formModal").modal('hide');
		//console.log($('#formModal').modal().text());
	});

	/*####Mostrar modal registro#####*/
	$("#btnFormModal").on("click", function(e) {
		e.preventDefault();
		idReg = '';
		//##### Limpiar formulario
		$('#ciField').val('');
		$('#nameField').val('');
		$('#lnameField').val('');
		$('#telfField').val('');
		$('#emailField').val('');
		$('#genderField').val($('#genderField').attr('selected'));
		$('.dataModalFormClass').removeClass('is-valid').removeClass('border border-success').removeClass('border border-danger');

		//##### ocultar validaciones
		$('#validCi').attr('hidden', 'hidden');
		$('#validName').attr('hidden', 'hidden');
		$('#validLname').attr('hidden', 'hidden');
		$('#validTelf').attr('hidden', 'hidden');
		$('#validEmail').attr('hidden', 'hidden');
		$('#validGender').attr('hidden', 'hidden');

		$('#formModal').modal('show');
		$('#titleModalReg').text('Nuevo registro');
		//console.log($('#formModal').modal().text());
	});

	/*####Eliminar registro#####*/
	$('body').on('click', '.destruir', function(e) {
		//e.preventDefault();
		//console.log('click');
		eliminarRegistro();
	});

	/*#####Editar usuarios#####*/
	$('body').on('click', '.btnEdit', function(e) {
		//e.preventDefault();
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

		listarRegistros();

		$('#formModal').modal('show');
		$('#titleModalReg').text('Editar registro');
	});

	/**######LLAMADA AJAX BUSCAR ID BOTON EDITAR REGISTROS #####*/
	function listarRegistros() {
		//console.log(ciEdit)
		$.ajax({
			type: "GET",
			url: '/data/list/findCi/' + ciEdit,
			success: function(result) {
				console.log(result);
				$('#ciField').val(result[0].ci);

				$('#nameField').val(result[0].nombre);
				$('#lnameField').val(result[0].apellido);
				$('#telfField').val(result[0].telefono);
				$('#emailField').val(result[0].email);
				$('#genderField').val(result[0].genero);
				$('#idField').val(result[0].id);
				idReg = result[0].id;
			},
			error: function(error) {
				console.log("error", error);
			}
		}).done(function() {
			console.log('Exito');
			/*Swal.fire({
				icon: 'success',
				title: 'Registro actualizado exitosamente',
				showConfirmButton: false,
				timer: 1500
			})*/

		}).fail(function() {
			Swal.fire({
				icon: 'error',
				title: 'No se pudo ejecutar el servicio',
				showConfirmButton: false,
				timer: 1500
			})
		});
	}

	/*#####Ajax editar registro#####*/
	function actualizarRegistro() {
		$.ajax({
			type: "POST",
			url: '/data/list/update/' + $('#ciField').val() + '/' + $('#nameField').val() + '/' + $('#lnameField').val() + '/' + $('#telfField').val() + '/' + $('#emailField').val() + '/' + $('#genderField').val()
		}).done(function() {
			Swal.fire({
				icon: 'success',
				title: 'Registro actualizado exitosamente',
				showConfirmButton: false,
				timer: 1500
			})
			$("#formModal").modal('hide');

			//##### Limpiar formulario
			$('#ciField').val('');
			$('#nameField').val('');
			$('#lnameField').val('');
			$('#telfField').val('');
			$('#emailField').val('');
			$('#genderField').val($('#genderField').attr('selected'));
			$('.dataModalFormClass').removeClass('is-valid').removeClass('border border-success');

			dataListRequest();

		}).fail(function() {
			Swal.fire({
				icon: 'error',
				title: 'No se pudo ejecutar el servicio',
				showConfirmButton: false,
				timer: 1500
			})
		});
	}

	/**######LLAMADA AJAX BOTON ELIMINAR REGISTROS #####*/
	function eliminarRegistro() {
		$.ajax({
			type: "POST",
			url: '/data/list/delete/' + $('#btnDeleteData').attr('cidlt')
		}).done(function() {
			/*console.log($('#btnDeleteData').attr('cidlt'));*/
			Swal.fire({
				icon: 'success',
				title: 'Registro eliminado exitosamente',
				showConfirmButton: false,
				timer: 1500
			})
			dataListRequest();

		}).fail(function() {
			Swal.fire({
				icon: 'error',
				title: 'No se pudo ejecutar el servicio',
				showConfirmButton: false,
				timer: 1500
			})
			dataListRequest();
		});
	}

	/*#####Evento submit ajax nuevo registro#####*/
	$('#formData').on('submit', function(e) {
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
	});

	/*#####Validaciones del formulario#####*/
	$('.dataModalFormClass').on('blur', function() {
		//console.log($(this).attr('id'));
		if ($(this).val() != '' && $(this).val().trim() != '') {
			$(this).val($(this).val().trim());
			//console.log('Valido');
			//console.log($('.referenceForm.is-valid').length);
			$(this).addClass('is-valid').removeClass('border border-danger').addClass('border border-success');
			if ($(this).attr('id') == 'ciField') {
				$('#validCi').attr('hidden', 'hidden');
			}
			else if ($(this).attr('id') == 'nameField') {
				$('#validName').attr('hidden', 'hidden');
			}
			else if ($(this).attr('id') == 'lnameField') {
				$('#validLname').attr('hidden', 'hidden');
			}
			else if ($(this).attr('id') == 'telfField') {
				$('#validTelf').attr('hidden', 'hidden');
			}
			else if ($(this).attr('id') == 'emailField') {
				$('#validEmail').attr('hidden', 'hidden');
			}
			else if ($(this).attr('id') == 'genderField') {
				$('#validGender').attr('hidden', 'hidden');
			}
		} else {
			//console.log('Ivalido');
			$(this).removeClass('is-valid').removeClass('border border-success').addClass('border border-danger');
			if ($(this).attr('id') == 'ciField') {
				$('#validCi').removeAttr('hidden');
			}
			else if ($(this).attr('id') == 'nameField') {
				$('#validName').removeAttr('hidden');
			}
			else if ($(this).attr('id') == 'lnameField') {
				$('#validLname').removeAttr('hidden');
			}
			else if ($(this).attr('id') == 'telfField') {
				$('#validTelf').removeAttr('hidden');
			}
			else if ($(this).attr('id') == 'emailField') {
				$('#validEmail').removeAttr('hidden');
			}
			else if ($(this).attr('id') == 'genderField') {
				$('#validGender').removeAttr('hidden');
			}
		}
	});

	/*#####Ajax nuevo registro#####*/
	function nuevoRegistro() {
		$.ajax({
			type: "POST",
			url: '/data/list/create/' + $('#ciField').val() + '/' + $('#nameField').val() + '/' + $('#lnameField').val() + '/' + $('#telfField').val() + '/' + $('#emailField').val() + '/' + $('#genderField').val()
		}).done(function() {
			Swal.fire({
				icon: 'success',
				title: 'Registro agregado exitosamente',
				showConfirmButton: false,
				timer: 1500
			})
			$("#formModal").modal('hide');

			//##### Limpiar formulario
			$('#ciField').val('');
			$('#nameField').val('');
			$('#lnameField').val('');
			$('#telfField').val('');
			$('#emailField').val('');
			$('#genderField').val($('#genderField').attr('selected'));
			$('.dataModalFormClass').removeClass('is-valid').removeClass('border border-success');

			dataListRequest();

		}).fail(function() {
			Swal.fire({
				icon: 'error',
				title: 'No se pudo ejecutar el servicio',
				showConfirmButton: false,
				timer: 1500
			})
		});
	}

	/*#####DataTable Listar todos los registros#####*/
	dataListRequest();
	function dataListRequest() {
		//var origin   = window.location.origin;
		$('#dataListRequest').DataTable({
			destroy: true,
			order: false,
			scrollX: true,
			"ordering": false,
			"paging": true,
			"bLengthChange": true,
			"iDisplayLength": 10,
			"pagingType": $(window).width() < 768 ? "simple" : "full_numbers",
			dom: 'lfrtip',
			/*buttons: [
				{
					text: '<button class="btn btn-success">Exportar a Excel <i class="fas fa-file-excel"></i></button>'
				},
				{
					text: '<button class="btn btn-danger">Exportar a PDF <i class="far fa-file-pdf"></i></button>'
				}
			],*/
			autoWidth: false,
			language: {
				url: '/JS/language.json'
			},
			ajax: {
				url: '/data/list/findAll',
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
					"data": "ci",
					"render": function(data, type, row, full) {
						return data;
					}
				},
				{
					"data": "nombre",
					"render": function(data, type, row, full) {
						return data;
					}
				},
				{
					"data": "apellido",
					"render": function(data, type, row, full) {
						return data;
					}
				},
				{
					"data": "telefono",
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
					"data": "genero",
					"render": function(data, type, row, full) {
						return data;
					}
				},
				{
					"data": "boton1",
					"render": function(data, type, row, full) {
						return '<a id="btnEditData" type="button" class="btnEdit btn btn-primary btn-sm" ciedt="' + row["ci"] + '"> Editar datos </a>';
					}
				},
				{
					"data": "boton1",
					"render": function(data, type, row, full) {
						return '<a id="btnDeleteData" type="button" class="destruir btn btn-danger btn-sm" cidlt="' + row["ci"] + '"> Eliminar datos </a>';
					}
				},
			],
			"initComplete": function(settings, json) {
				//console.log(json);
				//console.log(json.length);
				$('#dataListRequest_length').children().children().removeClass('form-select');
			}
		});
	}

});