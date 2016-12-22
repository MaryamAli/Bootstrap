// $(document).ready(function(){
//   alert("Docment is ready!");
// });


$("#message-box").css("background-color", "#FFE69A");

// Twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

// Facebook
(function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

// Google Map
var map;
function initMap() {
  var myLatLng = {lat: 33.781923, lng: -84.380259};
  map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 16,
  });
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello from Atlanta!'
  });
}

$(document).ready(function() {

  //collapse navbar after clicking
  //$(".collapse").collapse('hide');


  // Smooth scrolling
  var $root = $('html, body');
        $('.navbar-nav a').click(function() {
            var href = $.attr(this, 'href');
            $root.animate({
                scrollTop: $(href).offset().top
            }, 500, function () {
                window.location.hash = href;
            });
            return false;
        });

  // Stellar
  $('#work-pic').stellar(
        {scrollProperty: 'transform',
        parallaxBackgrounds: true,
        responsive: true
        });
  $('#work-pic2').stellar(
        {scrollProperty: 'transform',
        parallaxBackgrounds: true,
        responsive: true
        });

  // Tooltips
  $(function () {
       $('#item1').tooltip();
     });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  // Contact Me Section
  $('#contact-btn').on('click', function() {

    // Text Area
    var comment = $('#message-box').val();

    if (comment === "") {
      // turn border red
      $('#message-box').css('border', '2px solid red');
    } else {
      // hide text area      
      comment = comment.toUpperCase();
      var comment2 = " Thanks!";
      $('#visible-comment3').html(comment + comment2).css('color', '#0284F0');
      $('#message-box').hide();
    }

    // Name Area
    var name2 = $('#input-name').val();
    name2 = name2.toUpperCase();
    $('#visible-comment1').html(name2).css('color', '#0284F0');
    $('#input-name').hide();

    // Email Area
    var email = $('#input-email').val();
    $('#visible-comment2').html(email).css('color', '#0284F0');
    $('#input-email').hide();
    return false;   
  });
  
  // Keyup event
  $('#message-box').on('keyup', function() {
    var charCount= $('#message-box').val().length;
    $('#char-count').html(charCount);
    if (charCount > 50) {
      // turn red
      $('#char-count').css('color', 'red');
    } else {
      // stay black
      $('#char-count').css('color', '#333');
    };
  }); 

  // Works array
  for ( var i = 0; i < works.length; ++i) {
    $("#work-row").append("\
      <div class='col-md-3 col-xs-6'>\
          <div class='hover-text'>\
            <a href=" + works[i].URL + " class='work-img'>\
            <span class='info'><p class='proj-title'>Title:</p> " + works[i].title + " </span>\
              <img class='img-responsive' src='" + works[i].pic + "'>\
            </a>\
          </div>\
    ");

    var images = $("#work-row img");

    if(i%2 === 0){
      //make border blue
      $(images[i]).css("border", "2px solid #0284F0");

    } else {
      //make border grey
      $(images[i]).css("border", "2px solid #858585");
    };

    $(".work-img").mouseenter( function() {
        $(".info", this).show();
    }).mouseleave(function (){
        $(".info", this).hide();
    });

  };

});
