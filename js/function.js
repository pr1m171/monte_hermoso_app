			
Zepto(function($){
	var loader = 0;
	var markers = [];
	var carga_mapa_on = 1;
	var ver_mapa = $('#ver_map')
	var caja_mapa = $('#map_canvas');
	ver_mapa.on('click', function(e){
		
	})
	var ele = $('#buscar')
	var btn_dormir = $("#btn_map_dormir")
	var btn_comer = $("#btn_map_comer")
	var btn_visitar = $("#btn_map_visitar")
	var btn_cafe = $("#btn_map_cafe")
	var btn_cancelar = $("#btn_map_cancelar")
	var btn_viaje = $("#btn_map_viaje")
	var btn_inmo = $("#btn_map_inmo")
	btn_dormir.on('click', function(e){
		clearMarkers();
		mapacarga(0, 'hoteles hospedaje hotel appart_hotel camping');
		ele.hide();
	})
	btn_comer.on('click', function(e){
		clearMarkers();
		mapacarga(0, 'restaurant pizzeria comida cafe');
		ele.hide();
	})
	btn_visitar.on('click', function(e){
		clearMarkers();
		mapacarga(0, 'turstico Museos pesca wifi Atractivo Turistico');
		ele.hide();
	})
	btn_cafe.on('click', function(e){
		clearMarkers();
		mapacarga(0, 'Cafe cafe confiteria panaderia');
		ele.hide();
	})
	btn_inmo.on('click', function(e){
		clearMarkers();
		mapacarga(0, 'inmobiliaria Inmobiliaria Inmobiliarias casa alquileres departamentos deptos');
		ele.hide();
	})
	btn_viaje.on('click', function(e){
		clearMarkers();
		mapacarga(0, 'viaje pasaje transporte terminal Combis taxi remis remises tour');
		ele.hide();
	})
	btn_cancelar.on('click', function(e){
		clearMarkers();
		mapacarga(0, 'nada');
		ele.hide();
	})
		var btn = $('#buscador_bt')
			btn.on('click', function(e){
				
				var ele = $('#buscar')
				ele.show();
			})
			
			var buscar = $("#btn_search2")
			var txtabuscar = $("#txt_buscar122")
			
			buscar.on('click', function(e){
				var txt = txtabuscar.attr('value');
				
				clearMarkers();
				mapacarga(0, txt);
			})
	function cargamelo(state, data){
		if(carga_mapa_on == 2){
			clearMarkers();
			mapacarga(1,'nada');
		}else{	
			mapacarga(0,'nada');
		}
	}
	var map;
	function mapacarga(carga, data){
	
             carga_mapa_on=2;           
			
  		var http = new XMLHttpRequest();
		var url = "http://www.mgocx.net/monte/connect/mapa.php";
		var params = "data=" + data;
		var lista = null;
		var lista2 = null;
		var cant = 0;
		var cant2 = 0;
		var comercio = null;
		var regis = null
		http.open("POST", url, true);
		var locations = [];
		var infowindow = new google.maps.InfoWindow();
		
	var geocoder = new google.maps.Geocoder();
	if(carga == 0){
    map = new google.maps.Map(document.getElementById('map_canvas'), {
      zoom: 15,
      center: new google.maps.LatLng(-38.984263, -61.290039),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
	}else{
		
	}
		
		
		http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		
		http.onreadystatechange = function() {//Call a function when the state changes.
			if(http.readyState == 4 && http.status == 200) {
				lista = http.responseText;
				lista2 = lista.split('//');
			
				var i = -1;
				for (i in lista2) {
					regis = lista2[i];
					comercio = regis.split(':');
					
					if(comercio == ''){
					}else{
					locations.push({nombre: comercio[0], direccion: comercio[1], coordenada: comercio[2],descripcion: comercio[3], icon:'img/marker_'+ comercio[4] +'.png'});
					
					cant = cant + 1;
					
					codeAddress(comercio[0],comercio[1],comercio[2],comercio[3], 'img/marker_'+ comercio[4] +'.png', cant);
					}
				}
				
			}
		}
		http.send(params);
	


	
	
function codeAddress(nombre,direccion, coordenada,descripcion,icon,i) {
  if(coordenada == '0'){
  geocoder.geocode( { 'address': direccion}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
		  icon: icon
      });
	  google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent('<b><u>' + nombre + ':</u></b><br>' + descripcion);
          infowindow.open(map, marker);
        }
      })(marker, i));
	  markers.push(marker);
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
  }else{
	  console.log(icon);
	  var a = direccion.split(',');
	  var marker = new google.maps.Marker({
          map: map,
          position: new google.maps.LatLng(a[0], a[1]),
		  icon: icon
      });
	  google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent('<b><u>' + nombre + ':</u></b><br>' + descripcion);
          infowindow.open(map, marker);
        }
      })(marker, i));
	  markers.push(marker);
  }
}		
}
	
	
	
	
	
	
	
			
				
			var elem = $('#btn_search2')
			elem.on('click', function(e){
				event.preventDefault();
				ele.hide();
				///Ejecutar la busqueda
					
			})
			
			
			
			
		function setAllMap(map) {
			for (var i = 0; i < markers.length; i++) {
				markers[i].setMap(map);
			}
		}
		function clearMarkers() {
			setAllMap(null);
		}
})