import React from 'react';

const OrderModalTimeRent = ({timeRent}) => {
    const {name, id} = timeRent;

    return (
        <option 
            value={id}
        >
            {name}
        </option>
    );
};

export default OrderModalTimeRent;