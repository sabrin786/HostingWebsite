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

$('.quotes-carousel').owlCarousel({
    loop:true,
    nav:false,
    items:1,
    dots:true
})

$('.blog-carousel').owlCarousel({
    loop:true,
    nav:false,
    items:3,
    dots:true,
    margin:20,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        }
    }
})

