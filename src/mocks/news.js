const NEWS_COUNT = 20;

const generateNewsItem = (id) => {
    return {
        name: `Склад фотобудок #${id}`,
        text: `У нас есть на складе всего фотобудок: ${id}. Широчайший ассортимент фотобудок на 
        все случаи жизни`, 
        id
    };
};

const generateNews = () => {
    let news = [];

    for (let i = 0; i < NEWS_COUNT; i++) {
        news.push(generateNewsItem(i+1));
    };

    return news;
};

export default generateNews;