import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const promotions = [
  {
    id: 1,
    imageSrc: "https://http2.mlstatic.com/D_NQ_748961-MLA83033788371_032025-OO.webp ",  
  },
  {
    id: 2,
    imageSrc: "https://http2.mlstatic.com/D_NQ_771541-MLA83311585613_032025-OO.webp",
  },
  {
    id: 3,
    imageSrc: "https://http2.mlstatic.com/D_NQ_689079-MLA83268294893_032025-OO.webp",
  },
  {
    id: 4,
    imageSrc: "https://http2.mlstatic.com/D_NQ_852503-MLA83308289239_032025-OO.webp",
  },
];

export const PromotionsCarousel = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6"> Ofertas Especiales Para Ti! </h1>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        className="w-full"
      >
        {promotions.map((promo) => (
          <SwiperSlide key={promo.id}>
            <a
              href={promo.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`block rounded-lg p-6 text-white shadow-lg transition-transform transform hover:scale-105 `}
            >
              <div className="flex flex-col md:flex-row items-center">
                <img src={promo.imageSrc} className="w-800 h-100 object-cover rounded-lg mb-4 md:mb-0 md:mr-6" />
                
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PromotionsCarousel;