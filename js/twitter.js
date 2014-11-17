			
Zepto(function($){
	var car_twitter = $('#ver_tweet')
	var twwet = $("#resultado_tweet")
	car_twitter.on('click', function(e){
		
	})
	tweets();
	function tweets(){         
			
  		var http = new XMLHttpRequest();
		var url = "http://montehermoso.gov.ar/app/connect/noticia.php";
		var params = "data=data";
		http.open("POST", url, true);
		
		http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		
		http.onreadystatechange = function() {//Call a function when the state changes.
			if(http.readyState == 4 && http.status == 200) {
				var resultado = http.responseText;
				twwet.html(resultado);
				var loaderr = $("#loader");
				loaderr.hide();
			}
		}
		http.send(params);	
}
})