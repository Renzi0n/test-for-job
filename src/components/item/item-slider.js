import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const ItemSlider = () => {
    SwiperCore.use([Navigation, Pagination]);

    return (
        <Swiper 
            className="swiper-container gallery item__gallery"
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={16}
            width={296}
            loop={true}
            loopFillGroupWithBlank={true}
            initialSlide={2} 
            pagination={{ clickable: true }}
            navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        >
            <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                    <img src="img/photo.jpg" alt="Фотобудка с ширмой" width="296" height="222" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <img src="img/photo.jpg" alt="Фотобудка с ширмой" width="296" height="222" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <img src="img/photo.jpg" alt="Фотобудка с ширмой" width="296" height="222" />
                </SwiperSlide> 
                <SwiperSlide className="swiper-slide">
                    <img src="img/photo.jpg" alt="Фотобудка с ширмой" width="296" height="222" />
                </SwiperSlide> 
                <SwiperSlide className="swiper-slide">
                    <img src="img/photo.jpg" alt="Фотобудка с ширмой" width="296" height="222" />
                </SwiperSlide> 
            </div>

            <div className="gallery__btn gallery__btn--next swiper-button-next"></div>
            <div className="gallery__btn gallery__btn--prev swiper-button-prev"></div>
        </Swiper>
    );
};

export default ItemSlider;