import React, { Fragment } from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const NewsItemModalSwiper = () => {
    SwiperCore.use([Navigation, Pagination]);

    return (
        <Fragment>
            <Swiper 
                className="swiper-container modal-gallery__gallery gallery"
                slidesPerView={1}
                slidesPerGroup={1}
                spaceBetween={16}
                width={320}
                loop={true}
                loopFillGroupWithBlank={true}
                initialSlide={2} 
                pagination={{ el: ".modal-gallery__pagination", clickable: true }}
                navigation={{ nextEl: ".modal-gallery__btn--next", prevEl: ".modal-gallery__btn--prev " }}
            >   
                <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                        <img src="img/insta.jpg" alt="Фотобудка с ширмой" width="296" height="222" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="img/insta.jpg" alt="Фотобудка с ширмой" width="296" height="222" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="img/insta.jpg" alt="Фотобудка с ширмой" width="296" height="222" />
                    </SwiperSlide> 
                    <SwiperSlide className="swiper-slide">
                        <img src="img/insta.jpg" alt="Фотобудка с ширмой" width="296" height="222" />
                    </SwiperSlide> 
                    <SwiperSlide className="swiper-slide">
                        <img src="img/insta.jpg" alt="Фотобудка с ширмой" width="296" height="222" />
                    </SwiperSlide> 
                </div>
            </Swiper>

            <div className="modal-gallery__btn--next gallery__btn swiper-button-next"></div>
            <div className="modal-gallery__btn--prev gallery__btn swiper-button-prev"></div>
            <div className="modal-gallery__pagination swiper-pagination"></div>
        </Fragment>
    );
};

export default NewsItemModalSwiper;