import React from 'react';

const Info = () => {

    return (
        <section className="info">
            <h2 className="info__title">
                <span className="info__pink">Фото на </span> 
                праздник
            </h2>
            <p className="info__description">
                Lorem ipsum dolor sit amet, consectetur 
                <a href="/" className="info__pink"> adipiscing elit</a>, 
                sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua.
            </p>

            <ul className="info__list features">
                <li className="features__item">

                    <img className="features__img" src="img/infinity.svg" alt="Знак бесконечности" width="42" height="41" />
                    <h3 className="features__title">Безлимитная печать&nbsp;фото</h3>

                </li>
                <li className="features__item">

                    <img className="features__img" src="img/mask.svg" alt="Маскарадная маска" width="48" height="48" />
                    <h3 className="features__title">Фотореквизит в&nbsp;наличии</h3>

                </li>
                <li className="features__item">

                    <img className="features__img" src="img/cards.svg" alt="Фотокарточки" width="41" height="34" />
                    <h3 className="features__title">Фотоотчет в электронном виде</h3>

                </li>
                <li className="features__item">

                    <img className="features__img" src="img/label.svg" alt="Бирка" width="35" height="35" />
                    <h3 className="features__title">Цены ниже&nbsp;рынка</h3>

                </li>
            </ul>
        </section>
    );
};

export default Info;