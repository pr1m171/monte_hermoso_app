	var map;
	var a = '1';
	$(document).ready(function(e) {
		$("#buscar").hide();
		
		$("#btn_search2").click(function(e){
			e.preventDefault();
			var direccion = $("#txt_buscar").val();
				GMaps.geocode({
					address: direccion,
						callback: function(results, status) {
							if (status == 'OK') {
								var latlng = results[0].geometry.location;
								map.setCenter(latlng.lat(), latlng.lng());
								map.addMarker({
									lat: latlng.lat(),
									lng: latlng.lng(),
									icon: "img/marker.png",
									title: '',
									infoWindow: {
									content: ''
									}	
								});
							}
						}
				});
				$("#buscar").hide();
		});
		
		$('.bxslider').bxSlider({
		  auto: true,
		  autoControls: true,
		  mode: 'fade',
		  captions: true
		});
		
	var largo_mapa = $(document).height(); 
	var largo_mapa_final = largo_mapa -50;
	$("#drame_cro").css("height",largo_mapa_final);
    $("#click_mapa").click(function(e){
		e.preventDefault();
		leamap();
		a = '2';
	});
    });


function mapear(){
		
				$.ajax({
					async:true,
					type: "POST",
					dataType: "html",
					contentType: "application/x-www-form-urlencoded",
					url:"http://127.0.0.1/monte_hermoso/connect/mapa.php",
					data:"vista=12",
					beforeSend:enviar_vista,
					success:add_markers,
					timeout:10000,
					error:problemas_vista
				});
			return false;
}
function enviar_vista(){
	
}
function add_markers(data){	
	var registros = data.split('//');
	jQuery.each( registros, function( i, val ) {
		
		var regis = val.split(':');
	GMaps.geocode({
		address: regis[1],
			callback: function(results, status) {
				if (status == 'OK') {
					var latlng = results[0].geometry.location;
					map.addMarker({
						lat: latlng.lat(),
						lng: latlng.lng(),
						icon: "img/marker_" + regis[3] + ".png",
						title: regis[0],
						infoWindow: {
						content: regis[2]
						}	
					});
				}
			}
	});
	});
}
function problemas_vista(){
	
}	
	function leamap(){
	if(a=='1'){
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
      
	  var styles = [ { featureType: "poi.business", elementType: "labels", stylers: [ { visibility: "off" } ] } ];
	  map.addStyle({
    styledMapName:"Styled Map",
    styles: styles,
    mapTypeId: "map_style"  
});

map.setStyle("map_style");
mapear();
		var largo_mapa = $(document).height(); 
		var largo_mapa_final = largo_mapa -100;
		var ancho_mapa = $(document).width();
		var ancho_mapa_final = ancho_mapa -6;
		$("#map_canvas").css("height",largo_mapa_final);
		$("#map_canvas").css("width",ancho_mapa_final);
		$("#map_canvas").css("margin-top","10px");
		$("#map_canvas").css("margin-bottom","10px");
	}
	
/*
	map.addMarker({
        lat: -38.98686, 
        lng: -61.290222,
		icon: "img/marker_cafe.png",
        title: 'Monte Hermoso',
        infoWindow: {
          content: '<p>Bienvenido! :-)</p>'
        }	
      });*/
	
	$("#buscador_bt").click(function(e){
		e.preventDefault();
		$("#buscar").show();
	});
	}