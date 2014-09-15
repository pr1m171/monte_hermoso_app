	var map;
	$(document).ready(function(e) {
     
	leamap();
		
    });
	
	function leamap(){
		var largo_mapa = $(document).height(); 
		var largo_mapa_final = largo_mapa -100;
		var ancho_mapa = $(document).width();
		var ancho_mapa_final = ancho_mapa -6;
		$("#map_canvas").css("height",largo_mapa_final);
		$("#map_canvas").css("width",ancho_mapa_final);
		$("#map_canvas").css("margin-top","10px");
		$("#map_canvas").css("margin-bottom","10px");
		
		var map = L.map('map_canvas').setView([-38.98748, -61.288], 15);
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
		}).addTo(map);
		
		// add a marker in the given location, attach some popup content to it and open the popup
		L.marker([-38.98748, -61.288]).addTo(map);
		
		var largo_mapa = $(document).height(); 
		var largo_mapa_final = largo_mapa -100;
		var ancho_mapa = $(document).width();
		var ancho_mapa_final = ancho_mapa -6;
		$("#map_canvas").css("height",largo_mapa_final);
		$("#map_canvas").css("width",ancho_mapa_final);
		$("#map_canvas").css("margin-top","10px");
		$("#map_canvas").css("margin-bottom","10px");

	}