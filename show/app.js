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
      interval: 7000
    });

var code = getParameterByName('code');
var total = getParameterByName('total');
var num = getParameterByName('num');
var slide = getParameterByName('slide');
  
var token = code,
    num_photos = num;

if(slide=='display') {
	$('nav.botao').css('display', 'none');
}
if(total==0) {
$.ajax({
	url: 'https://api.instagram.com/v1/users/self/media/recent',
	dataType: 'jsonp',
	type: 'GET',
	data: {access_token: token, count: num_photos},
	success: function(data){
		for( x in data.data){
			if(x==0) {
				$('.carousel-inner').append('<div class="item one active"><ul class="thumbnails"></ul></div>');
			}
			if(x<6){
				$('.item.one ul.thumbnails').append('<li class="col-sm-2"><div class="fff"><div class="thumbnail"><a href="'+data.data[x].link+'" target="_blank"><img alt="" src="'+data.data[x].images.low_resolution.url+'"></a></div></div></li>');
			}			
		}
	},
	error: function(data){
		console.log(data);
	}
});
}
if(total==3) {
$.ajax({
	url: 'https://api.instagram.com/v1/users/self/media/recent',
	dataType: 'jsonp',
	type: 'GET',
	data: {access_token: token, count: num_photos},
	success: function(data){
		for( x in data.data){
			if(x==0) {
				$('.carousel-inner').append('<div class="item one active"><ul class="thumbnails"></ul></div>');
			}
			if(x==3) {
				$('.carousel-inner').append('<div class="item two"><ul class="thumbnails"></ul></div>');			
			}
			if(x==6) {
				$('.carousel-inner').append('<div class="item tree"><ul class="thumbnails"></ul></div>');			
			}
			if(x<3){
				$('.item.one ul.thumbnails').append('<li class="col-sm-4"><div class="fff"><div class="thumbnail"><a href="'+data.data[x].link+'" target="_blank"><img alt="cigarro eletrônico comprar vapor e sabor" src="'+data.data[x].images.low_resolution.url+'"></a></div></div></li>');
			}
			if(x>=3 && x<6) {
				$('.item.two ul.thumbnails').append('<li class="col-sm-4"><div class="fff"><div class="thumbnail"><a href="'+data.data[x].link+'" target="_blank"><img alt="cigarro eletrônico comprar vapor e sabor" src="'+data.data[x].images.low_resolution.url+'"></a></div></div></li>');
			}
			if(x>=6 && x<9) {
				$('.item.tree ul.thumbnails').append('<li class="col-sm-4"><div class="fff"><div class="thumbnail"><a href="'+data.data[x].link+'" target="_blank"><img alt="cigarro eletrônico comprar vapor e sabor" src="'+data.data[x].images.low_resolution.url+'"></a></div></div></li>');
			}
		}
	},
	error: function(data){
		console.log(data);
	}
});
}    
if(total==4)
{
$.ajax({
	url: 'https://api.instagram.com/v1/users/self/media/recent',
	dataType: 'jsonp',
	type: 'GET',
	data: {access_token: token, count: num_photos},
	success: function(data){
		for( x in data.data){
			if(x==0) {
				$('.carousel-inner').append('<div class="item one active"><ul class="thumbnails"></ul></div>');
			}
			if(x==4) {
				$('.carousel-inner').append('<div class="item two"><ul class="thumbnails"></ul></div>');			
			}
			if(x==9) {
				$('.carousel-inner').append('<div class="item tree"><ul class="thumbnails"></ul></div>');			
			}
			if(x<4) {
				$('.item.one ul.thumbnails').append('<li class="col-sm-3"><div class="fff"><div class="thumbnail"><a href="'+data.data[x].link+'" target="_blank"><img alt="cigarro eletrônico comprar vapor e sabor" src="'+data.data[x].images.low_resolution.url+'"></a></div></div></li>');
			}
			if(x>=4 && x<8) {
				$('.item.two ul.thumbnails').append('<li class="col-sm-3"><div class="fff"><div class="thumbnail"><a href="'+data.data[x].link+'" target="_blank"><img alt="cigarro eletrônico comprar vapor e sabor" src="'+data.data[x].images.low_resolution.url+'"></a></div></div></li>');
			}
			if(x>=8 && x<13) {
				$('.item.tree ul.thumbnails').append('<li class="col-sm-3"><div class="fff"><div class="thumbnail"><a href="'+data.data[x].link+'" target="_blank"><img alt="cigarro eletrônico comprar vapor e sabor" src="'+data.data[x].images.low_resolution.url+'"></a></div></div></li>');
			}
		}
	},
	error: function(data){
		console.log(data);
	}
});
}
if(total==5) {
$.ajax({
	url: 'https://api.instagram.com/v1/users/self/media/recent',
	dataType: 'jsonp',
	type: 'GET',
	data: {access_token: token, count: num_photos},
	success: function(data){
		for( x in data.data){
			if(x==0) {
				$('.carousel-inner').append('<div class="item one active"><ul class="thumbnails"></ul></div>');
			}
			if(x==5) {
				$('.carousel-inner').append('<div class="item two"><ul class="thumbnails"></ul></div>');			
			}
			if(x==10) {
				$('.carousel-inner').append('<div class="item tree"><ul class="thumbnails"></ul></div>');			
			}
			if(x<5){
				$('.item.one ul.thumbnails').append('<li class="col-sm-2 grid-2"><div class="fff"><div class="thumbnail"><a href="'+data.data[x].link+'" target="_blank"><img alt="cigarro eletrônico comprar vapor e sabor" src="'+data.data[x].images.low_resolution.url+'"></a></div></div></li>');
			}
			if(x>=5 && x<10) {
				$('.item.two ul.thumbnails').append('<li class="col-sm-2 grid-2"><div class="fff"><div class="thumbnail"><a href="'+data.data[x].link+'" target="_blank"><img alt="cigarro eletrônico comprar vapor e sabor" src="'+data.data[x].images.low_resolution.url+'"></a></div></div></li>');
			}
			if(x>=10 && x<15) {
				$('.item.tree ul.thumbnails').append('<li class="col-sm-2 grid-2"><div class="fff"><div class="thumbnail"><a href="'+data.data[x].link+'" target="_blank"><img alt="cigarro eletrônico comprar vapor e sabor" src="'+data.data[x].images.low_resolution.url+'"></a></div></div></li>');
			}
		}
	},
	error: function(data){
		console.log(data);
	}
});
}
if(total==6) {
$.ajax({
	url: 'https://api.instagram.com/v1/users/self/media/recent',
	dataType: 'jsonp',
	type: 'GET',
	data: {access_token: token, count: num_photos},
	success: function(data){
		for( x in data.data){
			if(x==0) {
				$('.carousel-inner').append('<div class="item one active"><ul class="thumbnails"></ul></div>');
			}
			if(x==6) {
				$('.carousel-inner').append('<div class="item two"><ul class="thumbnails"></ul></div>');			
			}
			if(x==12) {
				$('.carousel-inner').append('<div class="item tree"><ul class="thumbnails"></ul></div>');			
			}
			if(x<6){
				$('.item.one ul.thumbnails').append('<li class="col-sm-2"><div class="fff"><div class="thumbnail"><a href="'+data.data[x].link+'" target="_blank"><img alt="cigarro eletrônico comprar vapor e sabor" src="'+data.data[x].images.low_resolution.url+'"></a></div></div></li>');
			}
			if(x>=6 && x<12) {
				$('.item.two ul.thumbnails').append('<li class="col-sm-2"><div class="fff"><div class="thumbnail"><a href="'+data.data[x].link+'" target="_blank"><img alt="cigarro eletrônico comprar vapor e sabor" src="'+data.data[x].images.low_resolution.url+'"></a></div></div></li>');
			}
			if(x>=12 && x<18) {
				$('.item.tree ul.thumbnails').append('<li class="col-sm-2"><div class="fff"><div class="thumbnail"><a href="'+data.data[x].link+'" target="_blank"><img alt="cigarro eletrônico comprar vapor e sabor" src="'+data.data[x].images.low_resolution.url+'"></a></div></div></li>');
			}
		}
	},
	error: function(data){
		console.log(data);
	}
});
}
});
