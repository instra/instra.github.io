function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

$(document).ready(function() {
  var code = getParameterByName('code');
  
var token = code,
    num_photos = 7;
 
$.ajax({
	url: 'https://api.instagram.com/v1/users/self/media/recent',
	dataType: 'jsonp',
	type: 'GET',
	data: {access_token: token, count: num_photos},
	success: function(data){
		for( x in data.data ){
			$('ul').append('<li><a href="'+data.data[x].link+'" target="_blank"><img src="'+data.data[x].images.low_resolution.url+'"></a></li>');
		}
	},
	error: function(data){
		console.log(data);
	}
});

});