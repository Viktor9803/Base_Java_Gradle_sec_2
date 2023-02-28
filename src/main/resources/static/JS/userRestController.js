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
						return '<a id="btnEditData" type="button" class="btnEdit btn btn-primary btn-sm"> Editar datos </a>';
					}
				},
				{
					"data": "boton2",
					"render": function(data, type, row, full) {
						return '<a id="btnDeleteData" type="button" class="destruir btn btn-danger btn-sm"> Eliminar datos </a>';
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