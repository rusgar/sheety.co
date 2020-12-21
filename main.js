$(document).ready(function(){
  $('#signup').submit(function(e) {// linea 14 de html, busca la funcion de la API
	e.preventDefault();
	let form = $(this);
	// AJAX es la tecnología para hacer peticiones asíncronas//
	$.ajax({
	  type: 'post',
	  dataType: 'json',
	  url: form.attr('action'), //busca el url de la api//
	  contentType: 'application/json; charset=utf-8',
	  data: JSON.stringify({
		email: {
		  name: $('#name').val(),
		  email: $('#email').val()
		} //data, informacion consumida y aplicada con el valor de la api//
	  }),
	  success: function() {
		$('#signup-success').show();
		$('#signup').hide();
	  },// funcion de cargar la informacion de la conexion y corregir los errores de unicio//
	error: function(xhr, res, text) {
	alert('Usted tiene un problema en el registro');
	  }
	});
  });
});