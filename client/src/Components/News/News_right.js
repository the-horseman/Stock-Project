import React, { useContext } from 'react';
import News_design from './style/News_design';
import { AuthContext } from '../../helper/AuthContext';
import cross from "./style/cross.svg"

function News_right() {

  const { displayNews, setDisplayNews } = useContext(AuthContext);

  return (
    <div className='news-right'>
      {
        displayNews.displayNews == false ?
          <News_design /> :
          <div className='news-display'>
            <div style={{ margin: "10px", position: "relative" }}>
              <img src={cross} alt="cross" className='news-cross' onClick={() => {
                setDisplayNews({
                  displayNews: false,
                  title: "",
                  content: "",
                  date: "",
                  image: "",
                  sentiment: ""
                });
              }} />
              <img id="news-image" src={displayNews.image} />
              <p id="news-title">{displayNews.title}</p>
              <p id='news-date'>{(displayNews.date).substring(0, 10)}</p>
              <p id='news-content'>{displayNews.content}</p>
              <p id='news-sentiment' style={{ color: displayNews.sentiment >= 0 ? 'green' : 'red' }}>Sentiment : {displayNews.sentiment >= 0 ? "Positive" : "Negative"}</p>
            </div>
          </div>
      }
    </div>
  )
}

export default News_right