(function(module) {

  var repoView = {};
  var repoCompiler = Handlebars.compile($('#repo-template').text());

  repoView.renderRepos = function() {
    $('#projects').empty().append(
      reposObj.withTheAttribute('name')
      .map(repoCompiler)
    );
  };

  reposObj.requestRepos(repoView.renderRepos); //TODO: I can't figure out why reposObj is showing up as undefined in the dev console. reposObj is defined in the repo.js file which is called in correctly in the index.html page. 

  module.repoView = repoView;

})(window);
