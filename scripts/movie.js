var movies = [];

function Movie (newObj) {
  this.category = newObj.category;
  this.title = newObj.title;
  this.year = newObj.year;
  this.director = newObj.director;
  this.imdb = newObj.imdb;
  this.synopsis = newObj.synopsis;
}

Movie.prototype.toHtml = function() {
  var source = $('#template').html();
  var templateRender = Handlebars.compile(source);
  console.log('Current object', this);
  return templateRender(this);
};

localData.sort(function(a,b) {
  return (new Date(b.year)) - (new Date(a.year));
});

localData.forEach(function(ele) {
  movies.push(new Movie(ele));
});

movies.forEach(function(a){
  $('#movies').append(a.toHtml());
});
