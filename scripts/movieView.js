var movieView = {};

movieView.populateFilters = function() {
  $('article').not('.template').each(function() {
    var director, category, optionTag;
    director = $(this).find('address a').text();
    optionTag = '<option value="' + director + '">' + director + '</option>';
    $('#director-filter').append(optionTag);

    category = $(this).attr('data-category');
    optionTag = '<option value="' + category + '">' + category + '</option>';
    if ($('#category-filter option[value="' + category + '"]').length === 0) {
      $('#category-filter').append(optionTag);
    }
  });
};

movieView.handleDirectorFilter = function() {
  $('#director-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $('article[data-director="' + $(this).val() + '"]').fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#category-filter').val('');
  });
};

movieView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $('article[data-category="' + $(this).val() + '"]').fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#director-filter').val('');
  });
};
//
movieView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function(e) {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
    // console.log($(this).data('content'));
  });
  $('.main-nav .tab:first').click(); // Sets up the page.
};
//
// movieView.setTeasers = function() {
//   $('.article-body *:nth-of-type(n+2)').hide(); // Hide's past the second line.
//
//   $('#movies').on('click', 'a.read-on', function(e) {
//     e.preventDefault();
//     $(this).parent().find('*').fadeIn();
//     $(this).hide();
//   });
// };

Movie.fetchAll();
movieView.populateFilters();
movieView.handleDirectorFilter();
movieView.handleCategoryFilter();
movieView.handleMainNav();
// movieView.setTeasers();
