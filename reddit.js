const path = require('path');
const fs = require('fs');
const rp = require('request-promise');

rp("https://reddit.com/r/popular.json")
  .then((res) => {
    let articleArr = [];

    JSON.parse(res).data.children.map((article) => {
      let obj = {
        title: article.data.title,
        url: article.data.url,
        author: article.data.author,
      };

      articleArr.push(obj);
      fs.writeFile(
        "popular-articles.json",
        JSON.stringify(articleArr),
        (err) => {
          if (err) throw err;
        }
      );
      console.log(obj);
    });
  })
  .catch((err) => {
    if (err) throw err;
  });