/**
 * @file
 * Custom scripts for theme.
 */

(function ($) {

  Drupal.behaviors.openActiveMenu = {
    attach: function (context, settings) {
      $('#block-litsch-main-menu .menu.navbar-nav > .expanded.active').addClass('open');
    }
  };

})(jQuery);
