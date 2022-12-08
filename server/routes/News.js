const express = require('express');
const router = express.Router();
const axios = require('axios');
const { JSDOM } = require('jsdom');
const { Readability } = require('@mozilla/readability');
const aposToLexForm = require('apos-to-lex-form');
const { WordTokenizer, SentimentAnalyzer, PorterStemmer } = require('natural');
const SW = require('stopword');

var dotask = (article) => {
    return new Promise((resolve, reject) => {
        axios.get(article.url).then((response) => {
            const dom = new JSDOM(response.data, {
                url: article.url
            });
            const art = new Readability(dom.window.document).parse();
            let content = (article.content).substring(0, 45);
            console.log(art);
            const ind = (art.textContent).indexOf(content);
            content = art.textContent.substring(ind);
            const lim = (article.content).indexOf("[+");
            const limit = parseInt((article.content).substring(lim + 1));
            for (var i = limit; i < content.length - 1; i++) {
                if (content[i] === '.' && content[i + 1] === ' ') {
                    content = content.substring(0, i + 1);
                    break;
                }
            }
            content = content.replaceAll('\t', '');
            content = content.replaceAll('\n', '');
            content = content.replace(/^\s+|\s+$/g, "");
            resolve(content);
        });
    });
}

router.post('/', async (req, res) => {
    const { toSearch } = req.body;
    let added = "";
    if (toSearch === "National") {
        added = "country=in";
    } else {
        added = "country=us";
    }
    let url = 'https://newsapi.org/v2/top-headlines?' + added + "&category=business&language=en&apiKey=a320967040a846d485081578d0283fa6"
    axios.get(url).then((respo) => {
        if (respo.data.articles.length === 0) {
            res.send({ error: "No news found" });
        }
        var response = [];
        for (var i = 0; i < respo.data.articles.length; i++) {
            if (respo.data.articles[i].content != null) {
                response.push(respo.data.articles[i]);
            }
            if (response.length == 7) {
                break;
            }
        }
        var article_left = response.length;
        for (var i = 0; i < response.length; i++) {
            dotask(response[i]).then((content) => {
                var lexed = aposToLexForm(response[response.length - article_left].description);
                lexed = lexed.toLowerCase();
                var alphaonly = lexed.replace(/[^a-zA-Z0-9\s]/g, '');
                const tokenizer = new WordTokenizer();
                var tokens = tokenizer.tokenize(alphaonly);
                var filtered = SW.removeStopwords(tokens);
                const analyser = new SentimentAnalyzer('English', PorterStemmer, 'afinn');
                const analysis = analyser.getSentiment(filtered);
                response[response.length - article_left].content = content;
                response[response.length - article_left].analysis = analysis;
                article_left--;
                if (article_left === 0) {
                    res.send(response);
                }
            });
        }
    });
});

module.exports = router;