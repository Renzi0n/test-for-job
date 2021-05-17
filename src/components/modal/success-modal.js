import React from 'react';

const SuccessModal = ({closeAllModal}) => {
    return (
        <div className="modal-gallery">
            <div className="modal-gallery__sub" onClick={closeAllModal}></div>
            <div className="modal-gallery__wrapper modal-order--success">
                <p className="modal-order__text-success">
                    Заявка успешно отправлена!
                </p>
                <button className="modal-gallery__close" type="button" onClick={closeAllModal}>
                </button>
            </div>
        </div>
    );
};

export default SuccessModal;