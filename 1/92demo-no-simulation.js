
		if(geoPosition.init()){
			geoPosition.getCurrentPosition(success_callback,error_callback,{enableHighAccuracy:true});
		}
		else{
			document.getElementById('result').innerHTML = '<span class="error">Functionality not available</span>';
		}

		function success_callback(p)
		{
			var latitude = parseFloat( p.coords.latitude ).toFixed(2);
			var longitude = parseFloat( p.coords.longitude ).toFixed(2);
			document.getElementById('latitude').innerHTML = '<span class="information">Latitude:</span>' + latitude;
			document.getElementById('longitude').innerHTML = '<span class="information">Longitude:</span>' + longitude;		
			document.getElementById('coordinates').style.display = 'block';
		}
		
		function error_callback(p)
		{
			document.getElementById('result').innerHTML = '<span class="error">' + p.message + '</span>';			
		}		
	