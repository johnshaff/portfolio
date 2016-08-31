(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];

  reposObj.requestRepos = function(callback) {
  $.when(
    $.ajax({
      url: 'https://api.github.com/users/johnshaff/repos' +
        '?per_page=5' +
        '&sort=updated',
      type: 'GET',
      headers: {'Authorization': 'token ' + githubToken},
      success: function(data) {
        reposObj.allRepos = data;
        callback();
      }
    }),
    $.ajax({
      url: 'https://api.github.com/users/johnshaff/followers' +
        '?per_page=5' +
        '&sort=updated',
      type: 'GET',
      headers: {'Authorization': 'token ' + githubToken},
      success: function(data) {
        reposObj.allRepos = data;
        callback();
      }
    }),
  };

  reposObj.withTheAttribute = function(myAttr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.reposObj = reposObj;
})(window);
