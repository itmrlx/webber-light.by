// fancybox
jQuery.fn.getTitle = function() { // Copy the title of every IMG tag and add it to its parent A so that fancybox can show titles
  var arr = jQuery("a.fancybox");
  jQuery.each(arr, function() {
    var title = jQuery(this).children("img").attr("title");
    jQuery(this).attr('title',title);
  })
}
var thumbnails = jQuery("a:has(img)").not(".nolightbox").filter( function() { return /\.(jpe?g|png|gif|bmp)$/i.test(jQuery(this).attr('href')) }); // Find .post>a>img and create fancybox image gallery
var posts = jQuery(".item-images"); //find post
posts.each(function() {
  jQuery(this).find(thumbnails).addClass("fancybox").attr("rel","fancybox"+posts.index(this)).getTitle()
});
jQuery("a.fancybox").fancybox({ // fancybox on
  helpers : {
    overlay : {
      locked : false // try changing to true and scrolling around the page
    }
  }
});

// portfolio slider
$('.portfolio-slider').slick({
  infinite: true,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 7000,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});
// our clients slider
$('.our-clients-slider').slick({
  infinite: true,
  dots: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 7000,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});
// our clients slider
$('.our-reviews-slider').slick({
  infinite: true,
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 7000,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

// slow scroll menu
$(document).ready(function(){
  $(".header-t").on("click","a.scroll", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 500);
  });
});

// tabs
(function($) {
  $(function() {
    $('ul#nav-tab').on('click', 'li:not(.active)', function() {
      event.preventDefault(); // not go to tab content
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('.tab-container').find('.tabs-pane').removeClass('active').eq($(this).index()).addClass('active');
    });
  });
})(jQuery);

// send forms
function send_form (id, file, message) {
  $('#'+id).submit(function() {
    var str = $(this).serialize();
    $.ajax({
      type: 'POST',
      url: '/mail/'+file+'.php',
      data: str,
      success: function(msg){
        if(msg == 'OK'){
          result = '<h3 class="form-sended">'+message+'</h3>';
          $('#'+id).html(result);
        }else{
          result = msg;
          $('#'+id).html(result);
        }
      }
    });
    return false;
  });
}
send_form('form-id', 'phpform', 'Спасибо, скоро мы с Вами свяжемся!');
send_form('form-id2', 'phpform', 'Спасибо, скоро мы с Вами свяжемся!');

// change form title
function fform(title, value) {
  $('.modal-form-title').html(title);
  $('.modal-form-value').val(value);
}