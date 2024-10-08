
$(document).ready(function(){
  $(window).scroll(function() { 
    if ($(document).scrollTop() > 150) { 
      $(".navbar-solid-state").css({"background-color":"#242d44","color": "#ffffff"}); 
      $(".a-transparent").css({"background-color":"transparent","color": "transparent"});
    } else {
      $(".navbar-solid-state").css("background-color", "transparent"); 
      $(".a-transparent").css({"background-color":"transparent","color": "transparent"});
    }
  });
});


$(document).ready(function(){

   var $window = $(window),
        $body = $('body'),
        $header = $('#header'),
        $banner = $('#banner');

    /* // Disable animations/transitions until the page has loaded.
      $body.addClass('is-loading');

      $window.on('load', function() {
        window.setTimeout(function() {
          $body.removeClass('is-loading');
        }, 100);
      });*/

      var $menu = $('#menu');

      $menu._locked = false;

      $menu._lock = function() {

        if ($menu._locked)
          return false;

        $menu._locked = true;

        window.setTimeout(function() {
          $menu._locked = false;
        }, 350);

        return true;

      };

      $menu._show = function() {

        if ($menu._lock())
          $body.addClass('is-menu-visible');

      };

      $menu._hide = function() {

        if ($menu._lock())
          $body.removeClass('is-menu-visible');

      };

      $menu._toggle = function() {

        if ($menu._lock())
          $body.toggleClass('is-menu-visible');

      };

      $menu
        .appendTo($body)
        .on('click', function(event) {

          event.stopPropagation();

            $menu._hide();

        })
        .find('.inner')
          .on('click', '.close', function(event) {

            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();

              $menu._hide();

          })
          .on('click', function(event) {
            event.stopPropagation();
          })
          .on('click', 'a', function(event) {

            var href = $(this).attr('href');

            event.preventDefault();
            event.stopPropagation();

              $menu._hide();

              window.setTimeout(function() {
                window.location.href = href;
              }, 350);

          });

      $body
        .on('click', 'a[href="#menu"]', function(event) {

          event.stopPropagation();
          event.preventDefault();

            $menu._toggle();

        })
        .on('keydown', function(event) {

            if (event.keyCode == 27)
              $menu._hide();

        });
});



jQuery(document).ready(function($) {  
  $(window).load(function(){
    var $body = $('body');
    $('#preloader').fadeOut('slow',function(){
      $(this).remove();
    });
    $('.body-content').fadeIn(2500);
  });
});