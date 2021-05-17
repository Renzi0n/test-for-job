import React, {Component, Suspense} from 'react';

import Option from './item-option';
import ItemTimeRent from './item-time-rent';

import {setTimeRentChecked, getPriceWithoutCoeff, getCurrentTimeRentCoeff, findIndex} from '../../utils/item';
import Loader from '../loader/loader';

const ItemSlider = React.lazy(() => import('./item-slider'));

export default class Item extends Component {

    state = Object.assign({}, this.props.itemData, {
        allOptionsPrice: 0
    });

    renderTimeRent () {
        return this.state.timeRent.map((it) => {
            return <ItemTimeRent 
                        timeRent={it} 
                        key={it.id} 
                        onTimeRentRadioChange={this.onTimeRentRadioChange}
                    />
        });
    };

    onTimeRentRadioChange = (id) => {
        const { allOptionsPrice } = this.state;

        this.setState(({price, timeRent}) => {
            
            return {
                price: getPriceWithoutCoeff(price - allOptionsPrice, timeRent) * getCurrentTimeRentCoeff(id, timeRent) + allOptionsPrice,
                timeRent: setTimeRentChecked(id, timeRent)
            };
        });
    };

    renderOptions () {
        return this.state.options.map((it) => {
            return <Option 
                        option={it} 
                        key={it.id} 
                        onOptionCheckboxChange={this.onOptionCheckboxChange}
                    />;
        });
    };

    onOptionCheckboxChange = (optionPrice, isChecked, id) => {
        this.setState(({price, allOptionsPrice, options}) => {
            const optionIndex = findIndex(options, id);

            return {
                price: isChecked ? price + optionPrice : price - optionPrice,
                allOptionsPrice: isChecked ? allOptionsPrice + optionPrice : allOptionsPrice - optionPrice,
                options: [
                    ...options.slice(0, optionIndex),
                    Object.assign(options[optionIndex], {isChecked}),
                    ...options.slice(optionIndex + 1),
                ]
            };
        });
    };

    render () {
        const { name, price } = this.state;

        return (
            <article className="item">
                <Suspense fallback={<Loader />}>
                    <ItemSlider />
                </Suspense>

                <div className="item__info">
                    <h3 className="item__name">{name}</h3>
                    <p className="item__size">Размер: <span>2м x 1.5м x 2 м</span></p>
                </div>

                <div className="item__options">
                    <h4 className="item__options-title">Доп. опции</h4>

                    <form className="item__options-wrapper">
                        
                        {this.renderOptions()}

                    </form>
                </div>

                <div className="item__time">
                    <p className="item__time-title">Укажите время аренды</p>

                    <form className="item__time-wrapper" onChange={this.onItemTimeRentChange} >
                        {this.renderTimeRent()}
                    </form>
                </div>

                <div className="item__wrapper">
                    <p className="item__price">{price} ₽</p>
                    <button 
                        className="item__btn" 
                        type="button"
                        onClick={() => this.props.onOrderButtonClick(this.state)}
                    >
                        Оставить заявку
                    </button>
                </div>

            </article>
        );
    };
};
