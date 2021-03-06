$(document).ready(function(){
    if($('div#right-column div.panel').length > 1) {

      $('div#right-column div.panel').removeClass('single-panel');
      $('div#right-column div.panel:not(:first):not(:last)').addClass('mid-panel');
      $('div#right-column div.panel:not(:last):not(:first)').addClass('mid-panel');

      $('div#right-column div.panel:not(:last) + div.panel-footer-curved').addClass('panel-footer-plain');
      $('div#right-column div.panel:not(:last) + div.panel-footer-curved').removeClass('panel-footer-curved');

      $('div#right-column div.panel:first').addClass('top-panel');
      $('div#right-column div.panel:last').addClass('bottom-panel');
    }

    if($('div#right-column div.panel-wide').length > 1) {

      $('div#right-column div.panel-wide').removeClass('single-panel');
      $('div#right-column div.panel-wide:not(:first):not(:last)').addClass('mid-panel');
      $('div#right-column div.panel-wide:not(:last):not(:first)').addClass('mid-panel');

      $('div#right-column div.panel-wide:not(:last) + div.panel-footer-curved-wide').addClass('panel-footer-plain');
      $('div#right-column div.panel-wide:not(:last) + div.panel-footer-curved-wide').removeClass('panel-footer-curved-wide');

      $('div#right-column div.panel-wide:first').addClass('top-panel');
      $('div#right-column div.panel-wide:last').addClass('bottom-panel');
    }

})