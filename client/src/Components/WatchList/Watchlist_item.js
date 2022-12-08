import React, { useContext } from 'react';
import { AuthContext } from "../../helper/AuthContext";
import axios from 'axios';

function Watchlist_item({ stock, index }) {

    const { setSelectedStock, setWatchList, watchList } = React.useContext(AuthContext);

    const seeClick = () => {
        const val = stock.symbol;
        setSelectedStock(val);
    };

    const deleteClick = () => {
        const val = stock.symbol;
        axios.post("http://localhost:3001/watchlist/remove", {
            symbol: val
        }, {
            headers: {
                "accesstoken": localStorage.getItem("accesstoken")
            }
        }).then((response) => {
            alert("Stock removed from watchlist");
            setWatchList(
                watchList.filter((item) => (
                    item.symbol != val
                ))
            );
        })
    };

    return (
        <div key={index} className='stock-item'>
            <p className='stock-item-name' onClick={seeClick}>{stock.symbol}</p>
            <div className='stock-item-price-container'>
                <p className='stock-item-head'>Open : <p className='stock-item-value'>
                    {stock.openPrice}</p></p>
                <p className='stock-item-head'>Close : <p className='stock-item-value'>
                {stock.closePrice}</p></p>
                <p className='stock-item-head'>High : <p className='stock-item-value'>
                {stock.highPrice}</p></p>
                <p className='stock-item-head'>Low : <p className='stock-item-value'>
                {stock.lowPrice}</p></p>
                <p className='stock-item-delete' onClick={deleteClick}>DELETE</p>
            </div>
        </div>
    )
}

export default Watchlist_item