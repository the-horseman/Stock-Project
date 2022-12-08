import React, { useContext, useEffect, useState } from 'react';
import Watchlist from './style/Watchlist-design';
import { AuthContext } from "../../helper/AuthContext";
import StockData from './StockData';
import axios from 'axios';
import cross from "./style/cross.svg";
import Chart from "react-apexcharts";


function Watchlist_right() {

    const [chartData, setChartData] = useState([]);
    const [timePeriod, setTimePeriod] = useState(31);

    const { selectedStock, setSelectedStock, setStockData } = useContext(AuthContext);

    useEffect(() => {
        if (selectedStock != "") {
            axios.post("http://localhost:3001/stock/chart", {
                symbol: selectedStock,
                timePeriod: timePeriod
            }).then((result) => {
                setChartData(result.data);
            });
        }
    }, [selectedStock, timePeriod])

    useEffect(() => {
        if (selectedStock != "") {
            axios.post("http://localhost:3001/stock/data", { symbol: selectedStock }).then((result) => {
                setStockData(result.data);
            });
        }
    }, [selectedStock])

    const chartOptions = {
        chart: {
            type: 'candlestick',
            height: 350,
            background: '#ffffff',
        },
        title: {
            text: 'CandleStick Chart',
            align: 'left'
        },
        xaxis: {
            type: 'datetime'
        },
        yaxis: {
            tooltip: {
                enabled: true
            }
        }
    };

    return (
        <div className='watchlist-right'>
            {
                selectedStock == "" ?
                    <Watchlist /> :
                    <div className="stock-data-conatiner">
                        <img src={cross} alt="cross" className='stock-cross' onClick={() => { setSelectedStock("") }} />
                        <div className='stock-bound'>
                            <div className="chart-container">
                                <Chart
                                    options={chartOptions}
                                    series={chartData}
                                    type="candlestick"
                                    height="375"
                                    className="chart"
                                />
                                <div className='chart-butts'>
                                    <p style={{ cursor: "pointer" }} onClick={() => { setTimePeriod(7) }}>1 Week</p>
                                    <p style={{ cursor: "pointer" }} onClick={() => { setTimePeriod(31) }}>1 Month</p>
                                    <p style={{ cursor: "pointer" }} onClick={() => { setTimePeriod(31 * 6) }}>6 Months</p>
                                    <p style={{ cursor: "pointer" }} onClick={() => { setTimePeriod(365) }}>1 Year</p>
                                    <p style={{ cursor: "pointer" }} onClick={() => { setTimePeriod(365 * 2) }}>2 Year</p>
                                </div>
                            </div>
                            <StockData />
                        </div>
                    </div>
            }
        </div>
    )
}

export default Watchlist_right