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
    $('.carousel').carousel({
      interval: 6000
    });



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
			if(x==0) {
				console.log(X+'é 0');
				$('.carousel-inner').append('<div class="item active"><ul class="thumbnails"><li class="col-sm-2"><div class="fff"><div class="thumbnail"><a href="'+data.data[x].link+'" target="_blank"><img alt="" src="'+data.data[x].images.low_resolution.url+'"></a></div></div></li>');
			} else if(x==7) {
				console.log(X+'é 7');
				$('.carousel-inner').append('</ul></div><div class="item"><ul class="thumbnails"><li class="col-sm-2"><div class="fff"><div class="thumbnail"><a href="'+data.data[x].link+'" target="_blank"><img alt="" src="'+data.data[x].images.low_resolution.url+'"></a></div></div></li>');
			} else if(x==14) {
				console.log(X+'é 14');
				$('.carousel-inner').append('</ul></div><div class="item"><ul class="thumbnails"><li class="col-sm-2"><div class="fff"><div class="thumbnail"><a href="'+data.data[x].link+'" target="_blank"><img alt="" src="'+data.data[x].images.low_resolution.url+'"></a></div></div></li>');
			} else if(x==data.data.length) {
				console.log(X+'é'+data.data.length);
				$('.carousel-inner').append('<li class="col-sm-2"><div class="fff"><div class="thumbnail"><a href="'+data.data[x].link+'" target="_blank"><img alt="" src="'+data.data[x].images.low_resolution.url+'"></a></div></div></li></ul></div>');
			} else {
				console.log(X+'é normal');
				$('.carousel-inner').append('<li class="col-sm-2"><div class="fff"><div class="thumbnail"><a href="'+data.data[x].link+'" target="_blank"><img alt="" src="'+data.data[x].images.low_resolution.url+'"></a></div></div></li>');
			}
			
		}
	},
	error: function(data){
		console.log(data);
	}
});

  });
