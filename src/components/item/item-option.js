import React, { Component } from 'react';

export default class Option extends Component {
    state = {
        isChecked: false
    };

    onCheckboxChange = () => {
        this.setState(({isChecked}) => {
            const {option: { price, id }, onOptionCheckboxChange} = this.props;
            
            onOptionCheckboxChange(price, !isChecked, id);
            return {
                isChecked: !isChecked
            };
        });
    };

    render () {
        const { id, name, price} = this.props.option;

        return (
            <div className="option">
                <img src="img/photo-option.jpg" alt="Фотобудка с ширмой миниатюра" width="60" height="60" />
                <div className="option__text">
                <h5 className="option__title">{name}</h5>
                <p className="option__price">от {price} ₽</p>
                </div>
                <label className="option__label">
                    <input
                        className="option__checkbox visually-hidden" 
                        type="checkbox" id={`checkbox#${id}`} 
                        value={`checkbox#${id}`} 
                        checked={this.state.isChecked}
                        onChange={this.onCheckboxChange}
                    />
                    <span className="option__span"></span>
                </label>
            </div>
        ); 
    };
};