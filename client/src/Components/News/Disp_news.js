import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../helper/AuthContext';
import axios from 'axios';

function Disp_news() {

    const { newsType, setDisplayNews } = useContext(AuthContext);
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.post('http://localhost:3001/news', { toSearch: newsType }).then((response) => {
            setNews(response.data);
        });
    }, [newsType]);

    function newsCLick(article) {
        setDisplayNews({
            displayNews: true,
            title: article.title,
            content: article.content,
            date: article.publishedAt,
            image: article.urlToImage,
            sentiment: article.analysis
        });
    }

    return (
        <div className='news-disp-container'>
            <div className='news-top-container'>
                {news.length > 0 ? <div id='news-1'
                    style={{ backgroundImage: `url(${news[0].urlToImage})` }}
                    onClick={() => { newsCLick(news[0]) }}>
                    <p className='news-text'>{news[0].description}</p>
                </div> : null}
                <div className='news-mid-container'>
                    {news.length > 0 ? <div id='news-2' style={{ backgroundImage: `url(${news[1].urlToImage})` }}
                        onClick={() => { newsCLick(news[1]) }}>
                        <p className='news-text'>{news[1].description}</p>
                    </div> : null}
                    {news.length > 0 ? <div id='news-3' style={{ backgroundImage: `url(${news[2].urlToImage})` }}
                        onClick={() => { newsCLick(news[2]) }}>
                        <p className='news-text'>{news[2].description}</p>
                    </div> : null}
                </div>
                {news.length > 0 ? <div id='news-4' style={{ backgroundImage: `url(${news[3].urlToImage})` }}
                    onClick={() => { newsCLick(news[3]) }}>
                    <p className='news-text'>{news[3].description}</p>
                </div> : null}
            </div>
            <div className='news-bottom-container'>
                {news.length > 0 ? <div id='news-5' style={{ backgroundImage: `url(${news[4].urlToImage})` }}
                    onClick={() => { newsCLick(news[4]) }}>
                    <p className='news-text'>{news[4].description}</p>
                </div> : null}
                {news.length > 0 ? <div id='news-6' style={{ backgroundImage: `url(${news[5].urlToImage})` }}
                    onClick={() => { newsCLick(news[5]) }}>
                    <p className='news-text'>{news[5].description}</p>
                </div> : null}
            </div>
        </div>
    )
}

export default Disp_news