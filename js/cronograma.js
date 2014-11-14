			
Zepto(function($){
	var cron = $('#ver_cronograma')
	var vaina = $('#carga_cron')
	cron.on('click', function(e){
		cronograma();
	})
	function cronograma(){         
			
  		var http = new XMLHttpRequest();
		var url = "http://www.mgocx.net/monte/connect/cronograma.php";
		var params = "data=data";
		http.open("POST", url, true);
		
		http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http.setRequestHeader("Content-length", params.length);
		http.setRequestHeader("Connection", "close");
		
		http.onreadystatechange = function() {//Call a function when the state changes.
			if(http.readyState == 4 && http.status == 200) {
				var resultado = http.responseText;
				vaina.html(resultado);
			}
		}
		http.send(params);	
}
})