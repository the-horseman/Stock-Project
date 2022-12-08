import React, { useContext } from 'react'
import Toggle from 'react-toggle';
import Disp_news from './Disp_news';
import { AuthContext } from '../../helper/AuthContext';

function News_left() {

  const { setNewsType, newsType } = useContext(AuthContext);

  return (
    <div className='news-left'>
      <div className='news-butt-container'>
        <p className='butt-inst'>{newsType} News</p>
        <Toggle defaultChecked={true}
          icons={false}
          onChange={() => { newsType === "National" ? setNewsType("Global") : setNewsType("National") }}
        />
      </div>
      <Disp_news />
    </div>
  )
}

export default News_left