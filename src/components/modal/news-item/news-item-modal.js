import React from 'react';

import NewsItemModalSwiper from './news-item-modal-slider';

const NewsItemModal = ({closeAllModal, newsData}) => {
    const {name, text} = newsData;

    return (
        <div className="modal-gallery">
            <div className="modal-gallery__sub" onClick={closeAllModal}></div>
            <div className="modal-gallery__wrapper">
                <NewsItemModalSwiper />

                <div className="modal-gallery__info-wrapper">
                    <p className="modal-gallery__type">Услуги</p>
                    <p className="modal-gallery__date">20 Марта 2021</p>
                    <h3 className="modal-gallery__title">{name}</h3>
                    <p className="modal-gallery__text">
                        {text}
                    </p>
                </div>
                <button className="modal-gallery__close" type="button" onClick={closeAllModal}></button>
            </div>
        </div>
    );
};

export default NewsItemModal;