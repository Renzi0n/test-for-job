import React, { Component } from 'react';

import IMask from 'imask';

export default class OrderModalTel extends Component {
    componentDidMount = () => {
        this.maskedInput = IMask(document.querySelector('.modal-order__input'), {
            mask: '+7 (000) 000 00 00',
            lazy: false,
         });

         this.maskedInput.value = '+7 (000) 000 00 00';
    }

    componentWillUnmount = () => {
        this.maskedInput.destroy();
    };

    onInputFocus = () => {
        this.maskedInput.unmaskedValue = '+{7} {(000) 000 00 00}';
    };

    render () {
        return (
            <div className="modal-order__tel">
                <input 
                    className="modal-order__input" type="tel" 
                    name="tel" onFocus={this.onInputFocus}
                />
                <select className="modal-order__tel-select">
                    <option value="phone">Позвоните мне</option>
                    <option value="whatsapp">Whatsapp</option>
                    <option value="sms">Sms</option>
                </select>
            </div>
        ); 
    };
};