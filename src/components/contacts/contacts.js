import React, {Fragment} from 'react';

const Contacts = () => {

    return (
        <Fragment>
            <section className="contacts">
                <p className="contacts__text">Мы всегда доступны для вас</p>
                <h2 className="contacts__title">Контакты</h2>

                <ul className="contacts__list">
                    <li className="contacts__item">
                        <h3 className="contacts__item-title">Телефон</h3>
                        <p className="contacts__info">+7 495 123 45 67</p>
                    </li>

                    <li className="contacts__item contacts__item--address">
                        <h3 className="contacts__item-title">Адрес</h3>
                        <p className="contacts__info">
                            109382, Москва, пр. 
                            Егорьевский, д.2а, стр.10 въезд 
                            на машине только с улицы 
                            Люблинская
                        </p>
                    </li>

                    <li className="contacts__item contacts__item--email">
                        <h3 className="contacts__item-title">Почта</h3>
                        <p className="contacts__info"><a className="contacts_email" href="mailto:Info@test.ru">Info@test.ru</a></p>
                    </li>
                </ul>
            </section>

            <section>
                <img src="img/map.jpg" alt="Карта с адресом Егорьевский, д.2а, стр.10" width="360" height="360" />
            </section>
      </Fragment>
    );
};

export default Contacts;