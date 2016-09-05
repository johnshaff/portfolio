(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    /* TODO: DONE-ish Use your DOM skills to reveal only the about section! */
    $('.tab-content').hide();
    console.log('about controller just hid shit');
    $('#projects').fadeIn();
  };
  module.aboutController = aboutController;
})(window);
