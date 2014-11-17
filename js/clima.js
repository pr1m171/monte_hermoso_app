			
Zepto(function($){
	var climas = $('#ver_clima')
	var climato = $("#resultado_clima")
	climas.on('click', function(e){
		
	})
	clima();
	function clima(){         
			
  		var http = new XMLHttpRequest();
		var url = "http://www.mgocx.net/monte/connect/clima.php";
		var params = "data=data";
		http.open("POST", url, true);
		
		http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		
		http.onreadystatechange = function() {//Call a function when the state changes.
			if(http.readyState == 4 && http.status == 200) {
				var resultado = http.responseText;
				climato.html(resultado);
			}
		}
		http.send(params);	
}
})