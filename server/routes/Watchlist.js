const express = require('express');
const router = express.Router();
const { validateToken } = require('../middleware/AuthMiddleWare');
const { Stock } = require('../models');
const yahooFinance = require('yahoo-finance2').default;

function getPrice(stock) {
    return new Promise((resolve, reject) => {
        yahooFinance.quoteSummary(stock, { modules: ["summaryDetail"] }).then((result) => {
            const open = result.summaryDetail.open;
            const close = result.summaryDetail.previousClose;
            const high = result.summaryDetail.dayHigh;
            const low = result.summaryDetail.dayLow;
            resolve({ open, close, high, low });
        });
    });
}

router.get("/", validateToken, async (req, res) => {
    const watchList = await Stock.findAll({
        where: {
            userId: req.user.id
        }
    });
    var len = watchList.length;
    for(var i=0; i<watchList.length; i++) {
        getPrice(watchList[i].dataValues.symbol).then((result) => {
            watchList[watchList.length - len].dataValues.openPrice = result.open;
            watchList[watchList.length - len].dataValues.closePrice = result.close;
            watchList[watchList.length - len].dataValues.highPrice = result.high;
            watchList[watchList.length - len].dataValues.lowPrice = result.low;
            len--;
            if(len == 0) {
                res.json(watchList);
            }
        });
    }
});

router.post("/add", validateToken, async (req, res) => {
    const { symbol } = req.body;
    const userId = req.user.id;
    console.log(userId, symbol);
    const present = await Stock.findOne({
        where: {
            symbol: symbol,
            UserId: userId
        }
    });
    if (present) {
        res.json({ error: "Already in Watchlist" });
    } else {
        const stock = await Stock.create({
            symbol: symbol,
            UserId: userId
        });
        getPrice(symbol).then((result) => {
            stock.dataValues.openPrice = result.open;
            stock.dataValues.closePrice = result.close;
            stock.dataValues.highPrice = result.high;
            stock.dataValues.lowPrice = result.low;
            res.json(stock);
        });
    }
});

router.post("/remove", validateToken, async (req, res) => {
    const { symbol } = req.body;
    const userId = req.user.id;
    await Stock.destroy({
        where: {
            symbol: symbol,
            UserId: userId
        }
    });
    return res.json({ success: "Removed from Watchlist" });
});

module.exports = router;