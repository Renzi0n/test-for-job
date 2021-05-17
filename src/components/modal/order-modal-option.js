import React from 'react';

const OrderModalOption = ({option}) => {
    const {name, price} = option;
    return (
        <li className="modal-order__item">
            <h3 className="modal-order__item-title">{name}</h3>
            <p className="modal-order__item-price">{price} ₽</p>
        </li>
    );
};

export default OrderModalOption;