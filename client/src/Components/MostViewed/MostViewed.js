import React from 'react'
import MostViewed_list from './MostViewed_list'

function MostViewed() {
    return (
        <div className='MostViewed'>
            <div className='MostViewed-about'>
                <p className='MostViewed-head'>Most Viewed Stocks</p>
                <p className='MostViewed-text'>
                    A list of the most viewed and hot stocks.
                </p>
            </div>
            <MostViewed_list />
        </div>
    )
}

export default MostViewed