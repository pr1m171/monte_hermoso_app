	var map;
	$(document).ready(function(e) {
     
	
		
    });
	
	function mapa(){
		 map = new GMaps({
        div: '#map_canvas',
        lat: -38.98686, 
        lng: -61.290222,
        zoom: 18,
        zoomControl : true,
        zoomControlOpt: {
            style : 'SMALL',
            position: 'TOP_RIGHT'
        },
        panControl : true,
        streetViewControl : true,
        mapTypeControl: false
      });
      map.addMarker({
        lat: -38.98686, 
        lng: -61.290222,
		icon: "img/transporte.png",
        title: 'Monte Hermoso',
        infoWindow: {
          content: '<p>Bienvenido! :-)</p>'
        }
		
      });
	  	var largo_mapa = $(document).height(); 
		var largo_mapa_final = largo_mapa -100;
		var ancho_mapa = $(document).width();
		var ancho_mapa_final = ancho_mapa -6;
		$("#map_canvas").css("height",largo_mapa_final);
		$("#map_canvas").css("width",ancho_mapa_final);
	}