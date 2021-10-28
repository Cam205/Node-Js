const path = require('path');
const fs = require('fs');
const request = require('request-promise');

let articlePath = path.join(__dirname, './popular.articles.json');

request('https://reddit.com/r/popular.json', (err, res, body) => {
    
    if(err) console.log(err);

    let articlesArr = [];

    JSON.parse(body).data.children.forEach(item => {

        let title = item.data.title;
        let url = item.data.url;
        let author = item.data.author


        let articleObj = {title, url, author};

        articlesArr.push(articleObj);
    })

        fs.appendFileSync(articlePath, JSON.stringify(articlesArr));
    })