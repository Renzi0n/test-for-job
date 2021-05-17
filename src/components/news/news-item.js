import React from 'react';

const NewsItem = ({newsItemData, onNewsItemClick}) => {
    const {name, text} = newsItemData;

    return (
        <article className="news-item" onClick={() => onNewsItemClick(newsItemData)}>
            <img src="img/news.jpg" alt="Мужчина на фоне фотобудки" width="328" height="328" />

            <div className="news-item__wrapper">
                <p className="news-item__type">Услуги</p>
                <h3 className="news-item__title">{name}</h3>
                <p className="news-item__text">
                    {text}
                </p>
                <p className="news-item__date">20 Марта 2021</p>
            </div>
        </article>
    );
};

export default NewsItem;