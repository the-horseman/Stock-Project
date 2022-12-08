import React from 'react'
import LayerBG from './style/LayerBG'
import Watchlist_left from './Watchlist_left'
import Watchlist_right from './Watchlist_right'

function WatchList() {
  return (
    <div className='WatchList'>
      <LayerBG />
      <p className='watchlist-head'>Watch List</p>
      <div className='watchlist-container'>
        <Watchlist_left />
        <Watchlist_right />
      </div>
    </div>
  )
}

export default WatchList