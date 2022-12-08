import React, { useContext } from 'react';
import { AuthContext } from "../../helper/AuthContext";

function StockData() {

    const { stockData } = useContext(AuthContext);

    return (
        <>
            <div className='stock-detail-head'>About Company : <p className='stock-text'>{stockData.longBusinessSummary}</p></div>
            <div className='stock-detail-container'>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <div>
                        <div className='stock-detail-head'><a href={stockData.website} target="_blanck">{stockData.website}</a></div>
                        <div className='stock-detail-head'>Symbol :
                            <p className='stock-text'> {stockData.symbol}</p></div>
                        <div className='stock-detail-head'>200 Day Average :
                            <p className='stock-text'> {stockData.twoHundredDayAverage}</p></div>
                        <div className='stock-detail-head'>200 Day Average Change :
                            <p className='stock-text'> {stockData.twoHundredDayAverageChange}</p></div>
                        <div className='stock-detail-head'>50 Day Average :
                            <p className='stock-text'> {stockData.fiftyDayAverage}</p></div>
                        <div className='stock-detail-head'>50 Day Average Change :
                            <p className='stock-text'> {stockData.fiftyDayAverageChange}</p></div>
                        <div className='stock-detail-head'>52 Week Low Change :
                            <p className='stock-text'> {stockData.fiftyTwoWeekLowChange}</p></div>
                        <div className='stock-detail-head'>52 Week High Change :
                            <p className='stock-text'> {stockData.fiftyTwoWeekHighChange}</p></div>
                        <div className='stock-detail-head'>52 Week Low :
                            <p className='stock-text'> {stockData.fiftyTwoWeekLow}</p></div>
                        <div className='stock-detail-head'>52 Week High :
                            <p className='stock-text'> {stockData.fiftyTwoWeekHigh}</p></div>
                        <div className='stock-detail-head'>Market Change :
                            <p className='stock-text'> {stockData.regularMarketChange}</p></div>
                    </div>
                    <div className='stock-text'>
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div>
                        <div className='stock-detail-head'>Market Price :
                            <p className='stock-text'> {stockData.regularMarketPrice}</p></div>
                        <div className='stock-detail-head'>Market Day High
                            <p className='stock-text'> {stockData.regularMarketDayHigh}</p></div>
                        <div className='stock-detail-head'>Market Day Low
                            <p className='stock-text'> {stockData.regularMarketDayLow}</p></div>
                        <div className='stock-detail-head'>Market Volume
                            <p className='stock-text'> {stockData.regularMarketVolume}</p></div>
                        <div className='stock-detail-head'>Market Previous Close
                            <p className='stock-text'> {stockData.regularMarketPreviousClose}</p></div>
                        <div className='stock-detail-head'>Market Open
                            <p className='stock-text'> {stockData.regularMarketOpen}</p></div>
                        <div className='stock-detail-head'>Exchange Name
                            <p className='stock-text'> {stockData.fullExchangeName}</p></div>
                        <div className='stock-detail-head'>Currency
                            <p className='stock-text'> {stockData.financialCurrency}</p></div>
                        <div className='stock-detail-head'>Daily Volume 3 Month
                            <p className='stock-text'> {stockData.averageDailyVolume3Month}</p></div>
                        <div className='stock-detail-head'>Daily Volume 10 Day
                            <p className='stock-text'> {stockData.averageDailyVolume10Day}</p></div>
                        <div className='stock-detail-head'>Price Alert Confidence
                            <p className='stock-text'> {stockData.customPriceAlertConfidence}</p></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StockData