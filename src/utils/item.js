const setTimeRentChecked = (id, timeRent) => {
    return timeRent.map((it) => {
        it.isTimeRentChecked = it.id === id ? true : false;

        return it;
    });
}

const findIndex = (arr, id) => {
    return arr.findIndex((it) => it.id === id);
};

const getPriceWithoutCoeff = (price, timeRent) => {
    const checkedIndex = timeRent.findIndex((it) => it.isTimeRentChecked === true);

    return price / timeRent[checkedIndex].coeff;
};

const getCurrentTimeRentCoeff = (id, timeRent) => {
    const currentTimeRentIndex = timeRent.findIndex((it) => it.id === id)

    return timeRent[currentTimeRentIndex].coeff;
};

export {setTimeRentChecked, getPriceWithoutCoeff, getCurrentTimeRentCoeff, findIndex};