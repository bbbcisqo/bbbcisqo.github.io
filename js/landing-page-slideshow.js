$(function() {

  $.fn.cycle.updateActivePagerLink = function(pager, currSlideIndex) {
    $(pager).find('span').removeClass('current').filter('span:eq('+currSlideIndex+')').addClass('current');
  };

  $('#slideshow').cycle({
    prev:  '#slideshow-prev',
    next:  '#carousel-next',
    pager: '#slideshow-controls-div',
    pagerAnchorBuilder: function(idx, slide) {
      var sReturn = '<';
          sReturn += 'span><';
          sReturn += 'a href="#">&nbsp;<';
          sReturn += '/a><'
          sReturn += '/span>';
        return sReturn;
        }
      });

});