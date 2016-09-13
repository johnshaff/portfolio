(function(module) {
  var movieController = {};

  movieController.reveal = function() {
    
    $('.tab-content').hide();
    console.log('movieController just hid some shit');
    $('#movies').fadeIn();
  };
  module.movieController = movieController;
})(window);
