(function(module) {
  var repoView = {};
  var repoCompiler = Handlebars.compile($('#repo-template').text());

  repoView.renderRepos = function() {
    $('#projects').empty().append(
      reposObj.withTheAttribute('name')
      .map(repoCompiler)
    );
  };

  reposObj.requestRepos(repoView.renderRepos);

  module.repoView = repoView;
})(window);
