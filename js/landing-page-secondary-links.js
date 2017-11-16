$(function() {
  $('#promos div').click(function() {
    if ($(this).find('a').hasClass('button')) {
      var sHref = $(this).find('a').attr('href');
      if (sHref) {
        if($(this).find('a').hasClass('external')) {
          window.open(sHref);
          return false;
        } else {
          window.location = sHref;
        }
      } else {
        return false;
      }
    }
  });
 $('#promos div').addClass('href');
});