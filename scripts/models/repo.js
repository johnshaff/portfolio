(function(module) {

  var reposObj = {};
  console.log(reposObj);

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
  }; //TODO: I have no idea why this curly brace shows up as an unexpected token in the dev console.

  reposObj.withTheAttribute = function(myAttr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.reposObj = reposObj;

})(window);
