// var movies = [];

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
  console.log('Current object', this);
  return templateRender(this);
};

Movie.loadAll = function(inputData) {
  console.log(inputData);
  inputData.sort(function(a,b) {
    return (new Date(b.year)) - (new Date(a.year));
  }).forEach(function(ele) {
    Movie.allMovies.push(new Movie(ele));
  });
};

Movie.fetchAll = function() {
  if (localStorage.movieReviews) {
    /* When our data is already in localStorage:
    1. We can process and load it,
    2. Then we can render the index page.  */
    Movie.loadAll(JSON.parse(localStorage.movieReviews));
    Movie.renderIndexPage();
  } else {
    /* Without our localStorage in memory, we need to:
    1. Retrieve our JSON file with $.getJSON
      1.a Load our json data
      1.b Store that data in localStorage so that we can skip the server call next time,
      1.c And then render the index page.*/
    $.getJSON('scripts/movieRev.json', function(data) {
      console.log('hey');
      localStorage.setItem('movieReviews', JSON.stringify(data));
      Movie.loadAll(data);
      Movie.renderIndexPage();
    });
  }
};

// Movie.fetchAll();

Movie.renderIndexPage = function(){
  Movie.allMovies.forEach(function (a) {
    $('#movies').append(a.toHtml());
  });
};
