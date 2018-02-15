         //  jQuery(function($) {
         //       function fixDiv() {
         //        var $cache = $('#getFixed');
         //        if ($(window).scrollTop() > 0)
         //            $cache.css({

         //            'display' : 'block',
         //            'position': 'fixed',
         //            'top': '0px'
         //      });
         //         else
         //         $cache.css({
         //         'position': 'relative',
         //         'top': 'auto',
         //         'display' : 'none'
         //      });
         //   }
         // $(window).scroll(fixDiv);
         //    fixDiv();
         //   });

$(document).ready(function(){
  $('.img-slider').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:0
                },
                600:{
                    items:1
                },
                1000:{
                    items:3
                }
            }
        })
});

