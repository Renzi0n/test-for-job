const OPTIONS_COUNT = 20;
const ITEMS_COUNT = 20;

const generateTimeRentData = (id) => {
    return [
        {name: '1 час', id: `1-hour#${id}`, coeff: 1, isTimeRentChecked: true},
        {name: '2 часа', id: `2-hour#${id}`, coeff: 1.2, isTimeRentChecked: false},
        {name: '3 часа', id: `3-hour#${id}`, coeff: 1.3, isTimeRentChecked: false},
        {name: '5 часов', id: `5-hour#${id}`, coeff: 1.5, isTimeRentChecked: false},
        {name: 'выставка 2 дня', id: `2-days#${id}`, coeff: 2, isTimeRentChecked: false},
        {name: 'выставка 3 дня', id: `3-days#${id}`, coeff: 3, isTimeRentChecked: false},
    ];
};

const generateOption = (defaultId, id) => {
    return {
        id: `${id}_${defaultId}`,
        name: `Разработка макета рамки #${defaultId}`,
        price: 17500 + defaultId*100,
        isChecked: false
    };
};

const generateOptions = (id) => {
    let options = [];

    for (let i = 0; i < OPTIONS_COUNT; i++) {
        options.push(generateOption(i + 1, id));
    };

    return options;
};

const generateItem = (id) => {
    return {
        id: `${id}`,
        name: `Фотобудка с ширмой #${id}`,
        price: 17000 + id*100,
        options: generateOptions(id),
        timeRent: generateTimeRentData(id)
    };
};

const generateItems = () => {
    let items = [];

    for (let i = 0; i < ITEMS_COUNT; i++) {
        items.push(generateItem(i + 1));
    };

    return items;
};

export default generateItems;