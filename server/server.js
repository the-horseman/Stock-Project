const express = require('express');
const db = require("./models")
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());


const stocksRouter = require('./routes/Stocks');
app.use("/stock", stocksRouter);

const newsRouter = require('./routes/News');
app.use("/news", newsRouter);

const userRouter = require('./routes/User');
app.use("/user", userRouter);

const watchListRouter = require('./routes/Watchlist');
app.use("/watchlist", watchListRouter);

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server listening on http://localhost:${port}`);
    });
});