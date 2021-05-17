import React, {Component} from 'react';

import generateNews from '../../mocks/news';
import NewsItem from './news-item';

export default class News extends Component {

    state = {
        newsCount: 3,
        newsData: generateNews()
    };

    renderNewsItems () {
        return this.state.newsData.slice(0, this.state.newsCount).map((it) => {
            return <NewsItem 
                        key={it.id} 
                        newsItemData={it} 
                        onNewsItemClick={this.props.onNewsItemClick}
                    />
        });
    };

    onAddButtonClick = () => {
        this.setState(({newsCount}) => {
            return {
                newsCount: newsCount + 3
            };
        });
    };

    render () {
        const addButton = this.state.newsCount < 20 ? <button className="news__btn" type="button" onClick={this.onAddButtonClick}>
                                                            Показать еще
                                                        </button>
                                                        : null;
        
        return (
            <section className="news">
                <p className="news__text">Почему выбирают нас?</p>
                <h2 className="news__title">Новости</h2>
        
                <div className="news__wrapper">
                    {this.renderNewsItems()}
                </div>
        
                {addButton}
            </section>
        );
    };
};