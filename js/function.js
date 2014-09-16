	var map;
	var a = '1';
	$(document).ready(function(e) {
	var largo_mapa = $(document).height(); 
	var largo_mapa_final = largo_mapa -50;
	$("#drame_cro").css("height",largo_mapa_final);
    $("#click_mapa").click(function(e){
		e.preventDefault();
		leamap();
		a = '2';
	});
    });
	
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
      map.addMarker({
        lat: -38.98686, 
        lng: -61.290222,
		icon: "img/marker.png",
        title: 'Monte Hermoso',
        infoWindow: {
          content: '<p>Bienvenido! :-)</p>'
        }	
      });
	  var styles = [ { featureType: "poi.business", elementType: "labels", stylers: [ { visibility: "off" } ] } ];
	  map.addStyle({
    styledMapName:"Styled Map",
    styles: styles,
    mapTypeId: "map_style"  
});

map.setStyle("map_style");
		var largo_mapa = $(document).height(); 
		var largo_mapa_final = largo_mapa -100;
		var ancho_mapa = $(document).width();
		var ancho_mapa_final = ancho_mapa -6;
		$("#map_canvas").css("height",largo_mapa_final);
		$("#map_canvas").css("width",ancho_mapa_final);
		$("#map_canvas").css("margin-top","10px");
		$("#map_canvas").css("margin-bottom","10px");
	}
	}