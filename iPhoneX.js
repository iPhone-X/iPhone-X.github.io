$(document).ready(function(){
  var slide = $('.slide').first();
  showSlide(slide);

})

function showSlide(slide){
  slide.addClass('active');

  slide.on('transitionend', function(){
    $(this).off('transitionend');
    setTimeout(function(){
       var nextSlide = (slide.next('.slide').length == 0) ? $('.slide').first() : slide.next('.slide');

      slide.removeClass('active').on('transitionend', function(){
        $(this).off('transitionend');
        showSlide(nextSlide);
      })

    }, 3000);
  })
}
