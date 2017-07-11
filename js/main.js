
jQuery(document).ready(function(){
//NavSide	
	var menuAcordeon = $('.nav__secundario-menu');
	if( menuAcordeon.length > 0 ) {
		menuAcordeon.each(function(){
			var menu = $(this);
			menu.on('change', 'input[type="checkbox"]', function(){
				var checkbox = $(this);
				console.log(checkbox.prop('checked'));
				( checkbox.prop('checked') ) ? checkbox.siblings('ul').attr('style', 'display:none;').slideDown(800) : checkbox.siblings('ul').attr('style', 'display:block;').slideUp(800);
			});
		});
	}

//Select
$('.selectNumCuenta').on('click','.select',function(){
  var parent = $(this).closest('.selectNumCuenta');
  if ( ! parent.hasClass('abierto')){
    parent.addClass('abierto');
    $('.selectNumCuenta.abierto').not(parent).removeClass('abierto');
  }else{
    parent.removeClass('abierto');
  }
}).on('click','ul>li',function(){
  var parent = $(this).closest('.selectNumCuenta');
  parent.removeClass('abierto').find('.select').text( $(this).text() );
});

//Hora y Fecha
var ahora = new Date();
moment.locale('es-do');

var formatoFecha = moment(ahora).format( 'D MMMM YYYY, h:mm:ss a');
document.getElementById('fecha').innerHTML = formatoFecha;



});





