//    |  |  |  |  |  |  |  |  |  |  |  |
//    |  |  |  |  |  |  |  |  |  |  |  |
//    v  v  v  v  v  v  v  v  v  v  v  v

// ==================================================================================
// PLEASE INSERT YOUR CONTACT DETAILS HERE

var latitude    = "-33.858769"; // Use this website to find your coordinates: http://itouchmap.com/latlong.html
var longitude   = "151.213721";
var address     = "2 Macquarie St, <br />Sydney NSW 2000, Australia";
var phone       = "+1 (234) 567-8901";
var email       = "info@company.com";

// ==================================================================================

//    ^  ^  ^  ^  ^  ^  ^  ^  ^  ^  ^  ^
//    |  |  |  |  |  |  |  |  |  |  |  |
//    |  |  |  |  |  |  |  |  |  |  |  |





/* -- Page scroller
   -- src: http://stackoverflow.com/questions/8011822/animate-scroll-to-next-prev-post
   ---------------------------- */

$(function() {

    // Prev / next button scroller
    function scroll(direction) {

        var scroll, i,
                positions = [],
                here = $(window).scrollTop(),
                collection = $('.section');

        collection.each(function() {
            positions.push(parseInt($(this).offset()['top'],10));
        });

        for(i = 0; i < positions.length; i++) {
            if (direction == 'next' && positions[i] > here) { scroll = collection.get(i); break; }
            if (direction == 'prev' && i > 0 && positions[i] >= here) { scroll = collection.get(i-1); break; }
        }

        if (scroll) {
            $.scrollTo(scroll, {
                duration: 600 
            });
        }

        return false;
    }

    
    $(".next,.prev").click(function() {        
        return scroll($(this).attr('id'));        
    });

    // Scroll to anchor
    var $root = $('html, body');
    $('a.scrollAnchor').click(function() {
        $root.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 700);
        return false;
    });

    // One page scroller
    $('#main-nav').onePageNav({
      currentClass: 'current',
      changeHash: false,
      scrollSpeed: 600,
      scrollOffset: 30,
      scrollThreshold: 0.5,
      filter: '',
      easing: 'swing',
      begin: function() {
          $('body').append('<div id="device-dummy" style="height: 1px;"></div>');
      },
      end: function() {
          $('#device-dummy').remove();
      },
      scrollChange: function($currentListItem) {
          //I get fired when you enter a section and I pass the list item of the section
      }
  });

});

// Scroll to top of page

$("a.home").click(function() {
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
});





/* -- Thumbs Slider
   -- src: http://caroufredsel.dev7studios.com
   ---------------------------- */

$(document).ready(function(){

  $(".carousel-small").carouFredSel({
      responsive: true,
      width: '100%',
      circular: false,
      infinite: true,

      auto:{
        play : true,
        pauseDuration: 0,
        duration: 700
      },
      scroll:{
        items: 1,
        duration: 400,
        wipe: true
      },
      items:{
        visible:{
          min: 1,
          max: 4
        },
        width: 320,
        height: 'auto'
      },
      prev : "#carousel-prev",
      next : "#carousel-next"
    });

});


/* -- Full Screen Viewport Container
   ---------------------------- */

$(function () {

      // Set Initial Screen Dimensions

      var screenWidth = $(window).width() + "px";
      var screenHeight = $(window).height() + "px";

      $(".home.fullscreen #intro").css({
        width: screenWidth,
        height: screenHeight
      });

      // Every time the window is resized...

      $(window).resize( function () {

        // Fetch Screen Dimensions

        var screenWidth = $(window).width() + "px";
        var screenHeight = $(window).height() + "px";
        
        // Set Slides to new Screen Dimensions
        
        $(".home.fullscreen #intro").css({
          width: screenWidth,
          height: screenHeight
        }); 
        
      });

  });






/* -- Contact Form Take off Animation
   -- src: 
   ---------------------------- */

$("#contact-form").submit(function(event) {

  /* stop form from submitting normally */
  event.preventDefault();

  /* get some values from elements on the page: */
  var $form = $( this ),
      url = $form.attr( 'action' );

  /* Send the data using post */
  var posting = $.post( url, { name: $('.name').val(), email: $('.email').val(), message: $('.message').val() } );

  /* Put the results in a div */
  posting.done(function( data ) {
          });

  document.getElementById("lead-form").className += " blast-off";
  document.getElementById("confirmation-msg").className += " sent";

});






/* -- Bootstrap Javascript
   ---------------------------- */

$(document).ready(function(){

  // -- Tabs

  $('#tab a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
  });

  // -- Accordion

  $("#accordion").collapse({
    toggle: true
  });

  // -- Alerts

  $(".alert").alert();

});






/* -- Animation Effect when elements appear in viewpoint
   -- src: 
   ---------------------------- */

$(function() {
  var scrollFunction = function () {

    $('.home #about, .inner #about').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+400) {
        $('.focus-area.first').addClass("slideUp");

        setTimeout(function(){
            $('.focus-area.second').addClass('slideUp');
        }, 500);

        setTimeout(function(){
            $('.focus-area.third').addClass('slideUp');
        }, 1000);

        setTimeout(function(){
            $('.focus-area.fourth').addClass('slideUp');
        }, 1500);

        setTimeout(function(){
            $('.focus-area.fifth').addClass('slideUp');
        }, 2000);
      }
    });


    $('.animation-fade').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+600) {
        $(this).addClass("fadeIn");
      }
    });

    $('.animation-pullup').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+600) {
        $(this).addClass("pullUp");
      }
    });

    $('.animation-slideup').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+600) {
        $(this).addClass("slideUp");
      }
    });

    $('.animation-hatch').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+600) {
        $(this).addClass("hatch");
      }
    });

    $('.animation-bounce').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+600) {
        $(this).addClass("bounce");
      }
    });

    $('.animation-pulse').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+600) {
        $(this).addClass("pulse");
      }
    });

  };
  $(window).scroll(scrollFunction);

});


// $(window).scroll(function() {

//     // About Section - Timed Animations

    

//   });

setTimeout(function(){
    $('.portfolio-item .block-item.first').addClass('slideRight');
}, 500);




/* -- Magnific Popup (Responsive Lightbox)
   -- src: www.dimsemenov.com/plugins/magnific-popup
   ---------------------------- */

$(document).ready(function() {
  $('.popup-image').magnificPopup({
    type: 'image',

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 100,
    mainClass: 'my-mfp-slide-bottom',

    image: {
      verticalFit: true
    }
  });

  $('.popup-ajax').magnificPopup({
    type: 'ajax',
    alignTop: true,
    tLoading: 'Loading project #%curr%...',
    closeBtnInside: true,
    overflowY: 'scroll',
    delegate: 'a',
    removalDelay: 200,
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    callbacks: {
      beforeOpen: function() {
        $('#wrapper').addClass('blur-effect');
        this.st.mainClass = this.st.el.attr('data-effect');
      },
      open: function() {
        $(window).scroll(scrollFunction);
      },
      beforeClose: function() {
        $('#wrapper').removeClass('blur-effect');
      }
    },
    midClick: true
  });

});




/* -- Image Hover Effect
   -- src: 
   ---------------------------- */

(function() {
  var pspZoom;

  $.gridSize = function() {
    var inWidth;
    inWidth = window.innerWidth;
    if (inWidth > 1200) {
      return 4;
    }
    if (inWidth > 900) {
      return 3;
    }
    if (inWidth > 600) {
      return 2;
    }
    return 1;
  };

  $.fillArray = function(len, val) {
    var arr;
    arr = [];
    while (len-- > -1) {
      arr[len] = val;
    }
    return arr;
  };

  $.resizeGrid = function(columns) {
    var shifts;
    shifts = $.fillArray($(".grid .block-item").length, 0);
    console.log("shifts before> " + shifts);
    $(".grid .tall").each(function(_i, element) {
      var index, _results;
      index = $(element).prevAll().length;
      index += columns;
      _results = [];
      while (index < shifts.length) {
        shifts[index] += 1;
        _results.push(index += columns);
      }
      return _results;
    });
    console.log("shifts after> " + shifts);
    $(".grid .block-item").each(function(ind, element) {
      $(element).removeClass("shift0 shift1 shift2 shift3 shift4 shift5");
      return $(element).addClass("shift" + shifts[ind]);
    });
    return console.log("Resizing to " + columns + " columns");
  };

  $(window).resize(function() {
    if ($.currentGridSize != null) {
      if ($.gridSize() !== $.currentGridSize) {
        $.resizeGrid($.gridSize());
        return $.currentGridSize = $.gridSize();
      }
    } else {
      return console.log('no current grid size');
    }
  });

  $(function() {
    $.currentGridSize = $.gridSize();
    console.log("Resizing to " + $.currentGridSize + " columns");
    $.resizeGrid($.currentGridSize);
    return true;
  });

  console.log("Reloaded");

  /*
    The rest of this document was created for previous pens:
      Description on hover:
         http://codepen.io/tholex/pen/IxALf
      "Pespective" image hover effect:
         http://codepen.io/tholex/pen/gtEeq
  */


  pspZoom = function(val, max) {
    return (val / max) * (-25) + 12.5;
  };

  if (!Modernizr.touch) {
    $(".grid .block-item").mouseenter(function(e) {
      this.delayStamp = new Date();
      this.lastRatio = 0;
      return $(this).find('img').css({
        '-webkit-transform': "scale3D(1.5, 1.5, 1)",
        '-moz-transform': "scale3D(1.5, 1.5, 1)",
        '-ms-transform': "scale3D(1.5, 1.5, 1)",
        '-o-transform': "scale3D(1.5, 1.5, 1)",
        'transform': "scale3D(1.5, 1.5, 1)"
      });
    }).mousemove(function(e) {
      var offset, ratio, timeDiff, x, y;
      timeDiff = new Date() - this.delayStamp;
      ratio = timeDiff > 300 ? 1.0 : timeDiff / 300;
      ratio = (ratio - this.lastRatio) > 0.08 ? this.lastRatio + 0.075 : ratio;
      this.lastRatio = ratio;
      offset = $(this).offset();
      x = pspZoom(e.pageX - offset.left, $(this).width());
      y = pspZoom(e.pageY - offset.top, $(this).height());
      return $(this).find('img').css({
        'left': "" + (ratio * x) + "%",
        'top': "" + (ratio * 5 * y) + "px"
      });
    }).mouseleave(function() {
      return $(this).find('img').attr("data-translate-delay-stamp", "-1").css({
        '-webkit-transform': "scale3D(1, 1, 1)",
        '-moz-transform': "scale3D(1, 1, 1)",
        '-ms-transform': "scale3D(1, 1, 1)",
        '-o-transform': "scale3D(1, 1, 1)",
        'transform': "scale3D(1, 1, 1)",
        'left': "0",
        'top': "0"
      });
    });
  }

  /*
  if !Modernizr.touch
    $(".grid .block-item")
      .mousemove (e) ->
        offset = $(@).offset();
        x = -(e.pageX - offset.left) / 4;
        y = -(e.pageY - offset.top) / 4;
  
        $(@).find('img').css({
          '-webkit-transform': "scale3D(1.5, 1.5, 1) translate3d(#{x}px, #{y}px, 0px)"
          '-moz-transform': "scale3D(1.5, 1.5, 1) translate3d(#{x}px, #{y}px, 0px)"
          '-ms-transform': "scale3D(1.5, 1.5, 1) translate3d(#{x}px, #{y}px, 0px)"
          '-o-transform': "scale3D(1.5, 1.5, 1) translate3d(#{x}px, #{y}px, 0px)"
          'transform': "scale3D(1.5, 1.5, 1) translate3d(#{x}px, #{y}px, 0px)"
        })
      .mouseleave ->
        $(@).find('img').css({
          '-webkit-transform': "scale3D(1, 1, 1)"
          '-moz-transform': "scale3D(1, 1, 1)"
          '-ms-transform': "scale3D(1, 1, 1)"
          '-o-transform': "scale3D(1, 1, 1)"
          'transform': "scale3D(1, 1, 1)"
        })
  */


}).call(this);




/* -- Icon Hover Text
   -- src: http://codepen.io/dominicmagnifico/pen/echtu
   ---------------------------- */

$(document).ready(function(){
  $('div.focus-area').hover(function(){
    $('div.focus-description').eq($(this).index()).addClass('active').siblings().removeClass('active');
    $(this).addClass('highlight').siblings().removeClass('highlight');
  });
});




/* -- Isotope
   -- src: http://isotope.metafizzy.co/demos/adding-items.html
   ---------------------------- */

// All images need to be loaded for this plugin to work so
    // we end up waiting for the whole window to load in this example
    $(window).load(function () {
        $(document).ready(function(){
            collage();
        });
    });


    // Here we apply the actual CollagePlus plugin
    function collage() {
        $('.Collage').removeWhitespace().collagePlus(
            {
                'fadeSpeed'     : 2000,
                'effect'        : 'effect-2',
                'direction'     : 'vertical',
                'allowPartialLastRow' : true
            }
        );
    };

    // This is just for the case that the browser window is resized
    var resizeTimer = null;
    $(window).bind('resize', function() {
        // hide all the images until we resize them
        // $('.Collage .Image_Wrapper').css("opacity", 0);
        // set a timer to re-apply the plugin
        if (resizeTimer) clearTimeout(resizeTimer); 
        resizeTimer = setTimeout(collage, 200);
    });



/* -- Sliding Side Nav
   -- src: http://tympanus.net/codrops/2013/04/17/slide-and-push-menus/
   ---------------------------- */

$(document).ready(function(){
  new gnMenu( document.getElementById( 'gn-menu' ) );
});



/* -- Custom Google Map
   ---------------------------- */

var map;
var MY_MAPTYPE_ID = 'custom_style';

function initialize() {

  var coordinates = new google.maps.LatLng(latitude, longitude);

  var featureOpts = [
    {
      stylers: [
        { hue: '#2c3e50' },
        { visibility: 'simplified' },
        { gamma: 1 },
        { weight: 1 }
      ]
    },
    {
      elementType: 'labels',
      stylers: [
        { visibility: 'off' }
      ]
    },
    {
      featureType: 'water',
      stylers: [
        { color: '#34495e' }
      ]
    }
  ];

  var mapOptions = {
    zoom: 17,
    disableDefaultUI: true,
    center: coordinates,
    scrollwheel: false,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var styledMapOptions = {
    name: 'Custom Style'
  };

  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

  var contentString = '<div class="contact-details">' + address + '<br /><br />' + phone + '<br /><a href="mailto:' + email + '">' + email + '</a></div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var image = 'img/map-pointer.png';
  var marker = new google.maps.Marker({
      position: coordinates,
      map: map,
      icon: image
  });

  google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
  });

}

google.maps.event.addDomListener(window, 'load', initialize);

