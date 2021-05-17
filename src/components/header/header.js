import React from 'react';

const Header = ({onMediaButtonClick}) => {

    return (
        <header className="header">
            <h1 className="visually-hidden">Сайт фотостудии</h1>
    
            <img src="img/logo.svg" alt="Логотип фотоаппарат с фотокарточками" width="63" height="60" />
    
            <div className="media header__media">
                <button className="media__btn" 
                        type="button" 
                        title="Открыть видео"
                        onClick={onMediaButtonClick} >
                    <img className="media__preview" src="img/video-preview.jpg" alt="Превью видео с улыбающейся женщиной" width="315.4" height="188" />   
                    <div className="media__play"></div>
                </button>
            </div>
        </header>
    );
};

export default Header;