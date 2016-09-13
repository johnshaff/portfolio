
function Movie(newObj) {
  this.category = newObj.category;
  this.title = newObj.title;
  this.year = newObj.year;
  this.director = newObj.director;
  this.imdb = newObj.imdb;
  this.synopsis = newObj.synopsis;
}

Movie.allMovies = [];

Movie.prototype.toHtml = function() {
  var source = $('#template').html();
  var templateRender = Handlebars.compile(source);
  return templateRender(this);
};

Movie.loadAll = function(inputData) {
  Movie.allMovies = inputData.sort(function(a,b) {
    return (new Date(b.year)) - (new Date(a.year));
  }).map(function (movieObject){
    return new Movie(movieObject);
  });
};

Movie.fetchAll = function() {
  if (localStorage.movieReviews) {
    Movie.loadAll(JSON.parse(localStorage.movieReviews));
    Movie.renderIndexPage();
  } else {
    $.getJSON('movieRev.json', function(data) {
      localStorage.setItem('movieReviews', JSON.stringify(data));
      Movie.loadAll(data);
      Movie.renderIndexPage();
    });
  }
};

Movie.renderIndexPage = function(){
  Movie.allMovies.forEach(function (a) {
    $('#movies').append(a.toHtml());
  });
};
