import React, { useContext, useEffect } from 'react';
import { AuthContext } from "../../helper/AuthContext";
import axios from 'axios';
import Watchlist_item from './Watchlist_item';
const options = require("./style/Stock_List");

function Watchlist_left() {

	const { setSelectedStock, setWatchList, watchList, user } = useContext(AuthContext);

	useEffect(() => {
		axios.get("http://localhost:3001/watchlist/", {
			headers: {
				accesstoken: localStorage.getItem("accesstoken")
			}
		}).then((response) => {
			setWatchList(response.data);
			console.log(response.data);
		});
	}, []);

	const seeClick = () => {
		const val = document.getElementById('stock-input').value;
		setSelectedStock(val + ".NS");
	};

	const addClick = () => {
		const val = document.getElementById('stock-input').value;
		const symbol = val + ".NS";
		axios.post("http://localhost:3001/watchlist/add", {
			symbol: symbol
		}, {
			headers: {
				accesstoken: localStorage.getItem("accesstoken"),
			}
		}).then((response) => {
			if (response.data.error) {
				alert(response.data.error);
			} else {
				setWatchList([...watchList, response.data]);
			}
		});
	}

	return (
		<div className='watchlist-left'>
			<div className='input-container'>
				<select id='stock-input'>
					{options.map((option, index) => (
						<option key={index} style={{ backgroundColor: "white" }} value={option.value}>{option.label}</option>
					))}
				</select>
				<div className="butt-container">
					<button className='inp-butt' onClick={addClick}>Add</button>
					<button className='inp-butt' onClick={seeClick}>See</button>
				</div>
			</div>
			<div className='stock-container'>
				{user.isLoggedIn === true ?
					watchList.map((stock, index) => (
						<Watchlist_item stock={stock} index={index} />
					))
					: <p className='login-inst'>Login to See WatchList</p>}
			</div>
		</div>
	)
}

export default Watchlist_left