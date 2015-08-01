{
	
	var start_p = L.popup();
	start_p.
	setContent("<strong>BUC TRACKER BUILDER</strong><br/>Move, zoom, click: a popup will appear with a basic version of the configuration file").
	setLatLng(config.center).
	openOn(map);
	
	
	var popup = L.popup();

	function onMapClick(e) {
		map.panTo(e.latlng);
		var lat = e.latlng.lat;
		var lng = e.latlng.lng;
		var zoom = map.getZoom();
		popup
		.setLatLng(e.latlng)
		.setContent("<strong>BASIC CONFIG:</strong><br/>{<br/>&nbsp;var config = <br/>&nbsp;{<br/>&nbsp;&nbsp;center: ["+lat+","+lng+"],<br/>&nbsp;&nbsp;zoom: "+zoom+"<br/>&nbsp;}<br/>}")
		.openOn(map);
		
	}
		
	map.on('click', onMapClick);

}