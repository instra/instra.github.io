// How to get an access token:
// http://jelled.com/instagram/access-token

// {{model.user.username}}, {{likes}} likes

var galleryFeed = new Instafeed({
  get: "user",
  userId: 2610949869,
  accessToken: "2610949869.b8b0534.82eac5c37f724511adee0529ee416a56",
  resolution: "standard_resolution",
  useHttp: "true",
  limit: 10,
  template: 
    // '<a href="{{image}}">'+
      '<div class="img-featured-container">'+
        '<div class="img-backdrop"></div>'+
        '<div class="description-container">'+
          // '<p class="caption">{{caption}}</p>'+
          '<span class="likes"><i class="icon ion-heart"></i> {{likes}}</span>'+
          '<span class="comments"><i class="icon ion-chatbubble"></i> {{comments}}</span>'+
        '</div>'+
        '<img src="{{image}}" class="img-responsive">'+
      '</div>',
    // '</a>'+
  target: "instafeed-gallery-feed",
  after: function() {
    // disable button if no more results to load
    if (!this.hasNext()) {
      btnInstafeedLoad.setAttribute('disabled', 'disabled');
    }
    
    var owl = $(".owl-carousel"),
        owlSlideSpeed = 300;

    // init owl    
    $(document).ready(function(){
      owl.owlCarousel({
        // navContainer: '.owl-nav-custom',
        // dotsContainer: '.owl-dots-custom',
        margin:10,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:6000,
        autoplayHoverPause:true,
        nav:true,
        responsive:{
          0:{
            items:1
          },
          200:{
            items:2
          },
          400:{
            items:3
          },
          768:{
            items:5
          }
        }
      });
    });

    // keyboard controls
    $(document.documentElement).keydown(function(event) {
      if (event.keyCode == 37) {
        owl.trigger('prev.owl.carousel', [owlSlideSpeed]);
      }
      else if (event.keyCode == 39) {
        owl.trigger('next.owl.carousel', [owlSlideSpeed]);
      }
    });
  }
});

galleryFeed.run();

var btnInstafeedLoad = document.getElementById("btn-instafeed-load");
btnInstafeedLoad.addEventListener("click", function() {
  galleryFeed.next()
});