import React, {Fragment} from 'react';

import MediaModal from './media-modal';

const Modal = ({isMediaModal, onCloseButtonClick}) => {
    let mediaModal;

    if (isMediaModal) {
        mediaModal = <MediaModal onCloseButtonClick={onCloseButtonClick} />;
        document.body.style.overflow = "hidden";
    } else {
        mediaModal = null;
    }

    return (
        <Fragment>
            {mediaModal}
        </Fragment>
    );
};

export default Modal;