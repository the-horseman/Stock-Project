import React, { useState } from 'react';
import App from './App';
import Login from "./Components/Login/Login";
import Signup from './Components/Login/Signup';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContext } from './helper/AuthContext';

function Routing() {

    const [user, setUser] = useState({ isLoggedIn: false, email: "", FName: "", LName: "" });
    const [newsType, setNewsType] = useState("National");
    const [displayNews, setDisplayNews] = useState({
        displayNews: false,
        title : "",
        content : "",
        date : "",
        image : "",
        sentiment : ""
    });
    const [selectedStock, setSelectedStock] = useState("");
    const [watchList, setWatchList, ] = useState([]);
    const [stockData, setStockData] = useState({})

    return (
        <AuthContext.Provider value={{
            user, setUser, newsType, setNewsType, displayNews, setDisplayNews,
            selectedStock, setSelectedStock, setWatchList, watchList, stockData, setStockData
        }}>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/" element={<App />} />
                </ Routes>
            </Router>
        </AuthContext.Provider>
    )
}

export default Routing