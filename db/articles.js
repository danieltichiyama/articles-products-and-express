let articlesDB = [
  {
    title: "Making a server, worst practices",
    author: "Daniel Ichiyama",
    body:
      "It often really hard to make a fully functioning server with all of the bells and whistles that we know as errorHandling, edgeCases, and FUCKING SHIT!",
    URLTitle: "Making-a-server,-worst-practices"
  }
];

module.exports = {
  getArticles: function() {
    return articlesDB;
  },

  addArticle: function(obj) {
    if (!obj.title || !obj.body || !obj.author) {
      return false;
    }

    for (let i = 0; i < articlesDB.length; i++) {
      if (
        articlesDB[i].title === obj.title &&
        articlesDB[i].author === obj.author
      ) {
        return false;
      }
    }

    obj.URLTitle = obj.title.replace(/ /gi, "-");

    articlesDB.unshift(obj);
    return true;
  },

  editArticle: function(URLTitle, obj) {
    if (!obj.title || !obj.body || !obj.author) {
      return false;
    }

    for (i = 0; i < articlesDB.length; i++) {
      if (articlesDB[i].URLTitle === URLTitle) {
        for (key in obj) {
          articlesDB[i][key] = obj[key];
        }
        return true;
      }
    }
    return false;
  },

  getArticle: function(URLTitle) {
    for (i = 0; i < articlesDB.length; i++) {
      if (articlesDB[i].URLTitle === URLTitle) {
        return articlesDB[i];
      }
    }
  },

  deleteArticle: function(URLTitle) {
    for (i = 0; i < articlesDB.length; i++) {
      if (articlesDB[i].URLTitle === URLTitle) {
        let deletedItem = articlesDB.splice(i, 1);
        return deletedItem[0].title;
      }
    }
    return false;
  }
}; //end of module exports
