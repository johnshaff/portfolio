(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {

    $('.tab-content').hide();
    console.log('about controller just hid shit');
    $('#projects').fadeIn();
  };
  module.aboutController = aboutController;
})(window);
