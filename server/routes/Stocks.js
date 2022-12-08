const express = require('express');
const router = express.Router();
const yahooFinance = require('yahoo-finance2').default;

function getPrice(stock) {
    return new Promise((resolve, reject) => {
        yahooFinance.quoteSummary(stock, { modules: ["summaryDetail"] }).then((result) => {
            const open = result.summaryDetail.open;
            const close = result.summaryDetail.previousClose;
            const high = result.summaryDetail.dayHigh;
            const low = result.summaryDetail.dayLow;
            resolve({open, close, high, low});
        });
    });
}

function getStockData(stock) {
    return new Promise((resolve, reject) => {
        yahooFinance.quote(stock, {
            fields: ["fiftyDayAverage",
                "fiftyDayAverageChange",
                "fiftyDayAverageChangePercent",
                "twoHundredDayAverage",
                "twoHundredDayAverageChange",
                "twoHundredDayAverageChangePercent",
                "fiftyTwoWeekLowChange",
                "fiftyTwoWeekLowChangePercent",
                "fiftyTwoWeekRange",
                "fiftyTwoWeekHighChange",
                "fiftyTwoWeekHighChangePercent",
                "fiftyTwoWeekLow",
                "fiftyTwoWeekHigh",
                "regularMarketChange",
                "regularMarketChangePercent",
                "regularMarketPrice",
                "regularMarketDayHigh",
                "regularMarketDayRange",
                "regularMarketDayLow",
                "regularMarketVolume",
                "regularMarketPreviousClose",
                "fullExchangeName",
                "financialCurrency",
                "regularMarketOpen",
                "averageDailyVolume3Month",
                "averageDailyVolume10Day",
                "displayName",
                "symbol"]
        }).then((result) => {
            resolve(result);
        });
    });
}


router.get("/mostviewed", (req, res) => {
    yahooFinance.trendingSymbols('US', { lang: 'en-US' }).then((result) => {
        const symbols = result.quotes;
        var len = symbols.length;
        for (var i = 0; i < symbols.length; ++i) {
            getPrice(symbols[i].symbol).then((result) => {
                symbols[symbols.length - len].price = result;
                len--;
                if (len == 0) {
                    res.send(symbols);
                }
            });
        }
    });
});

router.post("/data", (req, res) => {
    const { symbol } = req.body;
    getStockData(symbol).then((result) => {
        yahooFinance.quoteSummary(symbol, { modules: ["assetProfile"] }).then((result2) => {
            result.longBusinessSummary = result2.assetProfile.longBusinessSummary;
            result.website = result2.assetProfile.website;
            res.send(result);
        });
    });
});

router.post("/chart", (req, res) => {
    const {symbol, timePeriod} = req.body;
    var date = new Date();
    date = new Date(date.getTime() - timePeriod * 24 * 60 * 60 * 1000);
    const req_date = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
    yahooFinance.historical(symbol, {period1 : req_date}).then((result) => {
        var response = [];
        for (var i = 0; i < result.length; ++i) {
            response.push({
                x : result[i].date,
                y : [result[i].open, result[i].high, result[i].low, result[i].close]
            });
        }
        res.send([{data : response}]);
    });
});

module.exports = router;