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
	
});