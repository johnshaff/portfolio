var movies = [];
var articleView = {};

function Movie (obj) {
  this.title = obj.title;
  this.year = obj.year;
  this.imdb = obj.imdb;
  this.synopsis = obj.synopsis;
};

//This clones my template and then replaces data from objects
//Removes the class from that clone so it's not grabbed again.
//And finally returns the entire new section for appending.
Movie.prototype.articleMaker = function() {
  var $newMovie = $('article.template').clone();
  $newMovie.find('h1').text(this.title);
  $newMovie.find('h4').text(this.year);
  $newMovie.find('a').attr('href', this.imdb);
  $newMovie.find('p').text(this.synopsis);

  $newMovie.removeClass();
  return $newMovie;
};

//This sorts by movie year, latest first.
localMovies.sort(function(firstObj, secondObj) {
  console.log('into sort');
  return (new Date(secondObj.year)) - (new Date(firstObj.year));
});

//This creates a new array from the sorted array.
localMovies.forEach(function(obj) {
  console.log('into push');
  movies.push(new Movie(obj));
});

//This runs the articleMaker method on each object.
//And then appends the returned article to the section.
movies.forEach(function (obj) {
  console.log('into append');
  $('.movies-div').append(obj.articleMaker());
});

articleView.handleMainNav = function () {
  $('.main-nav').on('click', '.tab', function() {
    $('.portfolio').hide();
    $('.movies-div').hide();
    $('.' + $(this).data('content')).fadeIn();
  });
  // $('.main-nav .tab:first').click();
};

articleView.handleMainNav();
