import React from 'react';

const MediaModal = ({onCloseButtonClick}) => {

    return (
        <div className="modal-gallery">
            <div className="modal-gallery__sub"></div>
            <div className="modal-gallery__wrapper modal-order modal-media">
            <iframe width="360" height="475" 
                src="https://www.youtube.com/embed/INMGfoRFkxA" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
            <button className="modal-gallery__close modal-media__close" 
                    type="button"
                    onClick={onCloseButtonClick} >

            </button>
            </div>
        </div>
    );
};

export default MediaModal;