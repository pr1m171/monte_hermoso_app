$(function(){
                function setDisplay(text) {
                    
                }
                
                // We pass "updateLocation" a callback function,
                // to run once we have the coordinates.
                // We also set it to a variable, so we can know
                // right away if it's working or not
				var elem = $('#ver_map')
				elem.on('click', function(e){
                var lookup = jQT.updateLocation(function(coords){
                    
                        
                        
                        var map = new google.maps.Map($("#map_canvas").get(0), {
                          zoom: 15,
                          center: new google.maps.LatLng(-38.984263, -61.290039),
                          mapTypeId: google.maps.MapTypeId.ROADMAP
                        });
						var contentString = '<div id="content">'+
						'<div id="siteNotice">'+
						'</div>'+
						'<h1 id="firstHeading" class="firstHeading">Plaza San Martin</h1>'+
						'<div id="bodyContent">'+
						'<p>Texto texto</p>'+
						'</div>'+
						'</div>';
						  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });
						var image = 'img/marker.png';
						var myLatLng = new google.maps.LatLng(-38.984263, -61.290039);
						var beachMarker = new google.maps.Marker({
							position: myLatLng,
							map: map,
							icon: image,
							title: 'Plaza San Martin'
						});
						var myLatLng2 = new google.maps.LatLng(-38.984253, -61.290039);
						var beachMarker2 = new google.maps.Marker({
							position: myLatLng2,
							map: map,
							icon: image,
							title: 'Plaza San Martin'
						});
						google.maps.event.addListener(beachMarker, 'click', function() {
						infowindow.open(map,beachMarker);
						});
                }, function(){
                    // Error in retrieving location, just use defined LatLng

                    new google.maps.Map($("#map_canvas").get(0), {
                      zoom: 8,
                      center: new google.maps.LatLng(37.48, -122.24),
                      mapTypeId: google.maps.MapTypeId.ROADMAP
                    });
                });

                if (lookup) {
                    setDisplay('Looking up location&hellip;');
                }
				})
            });
			
			
Zepto(function($){
	var ele = $('#buscar')
				ele.hide();
			var elem = $('#btn_search2')
			elem.on('click', function(e){
				event.preventDefault();
				ele.hide();
			})
			var btn = $('#buscador_bt')
			btn.on('click', function(e){
				var ele = $('#buscar')
				ele.show();
			})
})
				
				