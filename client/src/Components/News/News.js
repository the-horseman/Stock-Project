import React from 'react'
import News_left from './News_left'
import News_right from './News_right'

function News() {
  return (
    <div className='News'>
      <p className='news-head'>News</p>
      <div className='news-container'>
        <News_left />
        <News_right />
      </div>
    </div>
  )
}

export default News