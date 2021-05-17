import React from 'react';

import MediaModal from './media-modal';
import OrderModal from './order-modal';
import SuccessModal from './success-modal';
import NewsItemModal from './news-item-modal';

const Modal = ({isMediaModal, orderData, newsData, isSuccessModal, closeAllModal, onSubmitForm}) => {
    document.body.style.overflow = "hidden";

    if (isMediaModal) {
        return <MediaModal closeAllModal={closeAllModal} />;
    } else if (orderData) {
        return <OrderModal 
                    orderData={orderData} 
                    closeAllModal={closeAllModal} 
                    onSubmitForm={onSubmitForm}
                />;
    } else if (isSuccessModal) {
        return <SuccessModal closeAllModal={closeAllModal} />
    } else if (newsData) {
        return <NewsItemModal 
                    closeAllModal={closeAllModal} 
                    newsData={newsData}
                />
    }

    document.body.style.overflow = "scroll";
    return null;
};

export default Modal;