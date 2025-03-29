import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const products = [
  {
    id: 1,
    name: "Audífonos JBL Tune 520 On Ear",
    href: "https://www.mercadolibre.com.co/ventilador-samurai-ultra-silence-force-control-remoto-pared-cantidad-de-aspas-6-estructura-negro-aspas-negro-diametro-18-material-de-las-aspas-plastico-110v/p/MCO18615069",
    price: "199.900",
    oldPrice: "249.900",
    discount: "20% OFF",
    installments: "6 cuotas de $33.317",
    shipping: "Envío gratis por ser tu primera compra",
    imageSrc: "https://http2.mlstatic.com/D_NQ_NP_2X_712102-MLU77606445438_072024-F.webp",
    imageAlt: "Ventilador Samurai Ultra Silence Force",
  },
  {
    id: 2,
    name: "Gotas Mágicas Capilares Milagros",
    href: "https://http2.mlstatic.com/D_NQ_NP_2X_913296-MCO77786690890_072024-F.webp",
    price: "27.900",
    installments: "12 cuotas de $2.325",
    shipping: "Envío gratis",
    imageSrc: "https://http2.mlstatic.com/D_NQ_NP_2X_913296-MCO77786690890_072024-F.webp",
    imageAlt: "Gotas Mágicas Capilares Milagros",
  },
  {
    id: 3,
    name: "Apple iPhone 16 (128 GB) - Negro",
    href: "https://http2.mlstatic.com/D_NQ_NP_2X_677076-MLU79116568655_092024-F.webp",
    price: "3.329.900",
    oldPrice: "5.299.858",
    discount: "37% OFF",
    installments: "12 cuotas de $277.492",
    shipping: "Envío gratis por ser tu primera compra",
    imageSrc: "https://http2.mlstatic.com/D_NQ_NP_2X_677076-MLU79116568655_092024-F.webp",
    imageAlt: "Ventilador Samurai Ultra Silence Force",
  },
  {
    id: 4,
    name: "Conjunto Mujer Verde Atypical 474",
    href: "https://http2.mlstatic.com/D_NQ_NP_2X_826102-MCO76523181345_052024-F.webp",
    price: "38.500",
    oldPrice: "128.300",
    discount: "69% OFF",
    installments: "3 cuotas de $12.833",
    shipping: "Envío gratis",
    imageSrc: "https://http2.mlstatic.com/D_NQ_NP_2X_826102-MCO76523181345_052024-F.webp",
    imageAlt: "Conjunto Mujer Verde Atypical 474",
  },
  {
    id: 5,
    name: "Sombra Rainbow Trendy",
    href: "https://http2.mlstatic.com/D_NQ_NP_2X_889947-MLU69848124684_062023-F.webp",
    price: "22.213",
    oldPrice: "22.900",
    discount: "3% OFF",
    installments: "3 cuotas de $7.404",
    shipping: "Envío gratis por ser tu primera compra",
    imageSrc: "https://http2.mlstatic.com/D_NQ_NP_2X_889947-MLU69848124684_062023-F.webp",
    imageAlt: "Sombra Rainbow Trendy",
  },
  {
    id: 6,
    name: "Set X3 Brillos Gloss Profesional",
    href: "https://http2.mlstatic.com/D_NQ_NP_2X_804798-MCO76678587099_052024-F.webp",
    price: "17.500",
    shipping: "Lleva gratis por ser tu primera compra",
    imageSrc: "https://http2.mlstatic.com/D_NQ_NP_2X_804798-MCO76678587099_052024-F.webp",
    imageAlt: "Set X3 Brillos Gloss Profesional",
  },
];

export const ProductCarousel = () => {
  return (
    <div className="w-full px-6">
      <h2 className="text-lg font-bold mb-4">INSPIRADO EN TI</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        className="w-full"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="p-2">
            <div className="rounded-lg shadow-md p-3 bg-white">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="w-full h-50 object-cover rounded-md"
              />
              <h3 className="text-sm mt-2 font-medium">{product.name}</h3>
              <p className="text-gray-500 line-through text-sm">{product.oldPrice}</p>
              <p className="text-lg font-bold text-gray-900">{product.price}</p>
              <p className="text-green-600 text-xs">{product.installments}</p>
              <p className="text-green-500 font-bold text-xs">{product.shipping}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;