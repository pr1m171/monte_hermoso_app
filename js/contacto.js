			
Zepto(function($){

	var btn_contacto = $("#enviar_contacto");
	btn_contacto.on('click', function(e){
		enviar_consulta();
	})
	function enviar_consulta(){         
		var nombre = $("#txt_con_nombre").val();
		var email = $("#txt_con_email").val();
		var asunto = $("#txt_con_asunto").val();
		var consulta= $("#txt_con_consulta").val();
		
  		var http = new XMLHttpRequest();
		var url = "http://www.montehermoso.gov.ar/app/connect/contacto.php";
		var params = "nombre=" + nombre + "&email=" + email + "&asunto=" + asunto + "&consulta=" + consulta;
		http.open("POST", url, true);
		
		http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		
		http.onreadystatechange = function() {//Call a function when the state changes.
			if(http.readyState == 4 && http.status == 200) {
				var resultado = http.responseText;
				if(resultado == '1'){
					alert('Enviado correctamente');
				}else{
					alert(resultado);	
				}
			}
		}
		http.send(params);	
}
})