import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MostViewed_list() {

	const [mostViewed, setMostViewed] = useState([]);

	function renderMostViewed(stock, index) {
		return (
			<div key={index} className='MostViewed-stock'>
				<div style={{ margin: "20px" }}>
					<p id='MostViewed-stock-name'>{(stock.symbol).toUpperCase()}</p>
					<div id="MostViewed-price-container">
						<div>
							<p className='MostViewed-det-name'>Open</p>
							<p className='MostViewed-det-name'>Close</p>
							<p className='MostViewed-det-name'>High</p>
							<p className='MostViewed-det-name'>Low</p>
						</div>
						<div>
							<p className='MostViewed-det-price'>{(stock.price.open).toFixed(2)}</p>
							<p className='MostViewed-det-price'>{(stock.price.close).toFixed(2)}</p>
							<p className='MostViewed-det-price'>{(stock.price.high).toFixed(2)}</p>
							<p className='MostViewed-det-price'>{(stock.price.low).toFixed(2)}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}

	useEffect(() => {
		axios.get("http://localhost:3001/stock/mostViewed").then((response) => {
			setMostViewed(response.data);
		});
	}, []);

	return (
		<div className='MostViewed-list'>
			{mostViewed.map((item, index) => (
				renderMostViewed(item, index)
			))}
		</div>
	)
}

export default MostViewed_list