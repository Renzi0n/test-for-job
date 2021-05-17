import React from 'react';

const ItemTimeRent = ({timeRent, onTimeRentRadioChange}) => {
    const {name, id, coeff, isTimeRentChecked} = timeRent;

    return (
        <label className="item__radio" htmlFor={id}>
            <input 
                className="visually-hidden" type="radio" 
                id={id} name="time" value={id} 
                checked={isTimeRentChecked} 
                onChange={() => onTimeRentRadioChange(id, coeff)}
            />
            <span className="item__radio-span">
                {name}
            </span>
        </label>
    );
};

export default ItemTimeRent;