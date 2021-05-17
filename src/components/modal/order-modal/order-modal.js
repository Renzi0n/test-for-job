import React, {Component} from 'react';
import IMask from 'imask';

import OrderModalOption from './order-modal-option';
import OrderModalTimeRent from './order-modal-time-rent';

export default class OrderModal extends Component {

    state = {
        price: this.props.orderData.price,
        currentTimeRentId: this.props.orderData.timeRent.find((it) => it.isTimeRentChecked).id
    };

    renderOrderModalOptions () {
        return this.props.orderData.options
            .filter(({isChecked}) => isChecked)
            .map((it) => {
                return <OrderModalOption 
                            option={it}
                            key={it.id}
                        />
            });
    };

    onTimeRentSelectChange = ({target}) => {
        const { allOptionsPrice, timeRent } = this.props.orderData;

        this.setState(({price}) => {
            const prevTimeRentCoeff = timeRent.find((it) => it.id === this.state.currentTimeRentId).coeff;
            const currentTimeRentCoeff = timeRent.find((it) => it.id === target.value).coeff;

            return {
                price: ((price - allOptionsPrice) / prevTimeRentCoeff) * currentTimeRentCoeff + allOptionsPrice,
                currentTimeRentId: target.value
            }
        });
    };

    renderOrderModalTimeRent () {
        return this.props.orderData.timeRent
            .map((it) => {
                return <OrderModalTimeRent 
                            timeRent={it}
                            key={it.id}
                        />
            });
    };

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

        const { orderData: {name, allOptionsPrice}, closeAllModal, onSubmitForm } = this.props;
        
        return (
            <div className="modal-gallery">
                <div className="modal-gallery__sub" onClick={closeAllModal}></div>
                <form action="#" className="modal-gallery__wrapper modal-order" onSubmit={onSubmitForm}>
                    <h2 className="modal-order__title">Ваша заявка</h2>
            
                    <ul className="modal-order__list">
                        <li className="modal-order__item">
                            <div className="modal-order__item-wrap">
                                <h3 className="modal-order__item-title">{name}</h3>
                                <p className="modal-order__item-size">Размер: <span>2м x 1.5м x 2 м</span></p>
                            </div>
                            <p className="modal-order__item-price">{this.state.price - allOptionsPrice} ₽</p>

                            <select 
                                className="modal-order__time" name="order-time" 
                                id="order-time" value={this.state.currentTimeRentId}
                                onChange={this.onTimeRentSelectChange}
                            >

                                {this.renderOrderModalTimeRent()}

                            </select>
                        </li>
            
                        {this.renderOrderModalOptions()}
                    </ul>
            
                    <div className="modal-order__text-wrap">
                        <p className="modal-order__text">Итого:</p>
                        <p className="modal-order__price">{this.state.price} ₽</p>
                    </div>
            
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
            
                    <button className="modal-order__submit" type="submit">Отправить заявку</button>
                    <button className="modal-order__close modal-gallery__close" type="button" onClick={closeAllModal}></button>
                </form>
            </div>
        );
    };
};