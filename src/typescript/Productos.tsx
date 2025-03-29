import React from "react";

const products = [
  {
    id: 1,
    name: "Tonico Capilar Flash Cubre Canas Y Sham - mL a $140",
    href: "https://http2.mlstatic.com/D_NQ_NP_2X_864211-MCO77199785114_072024-F.webp",
    price: "67.355",
    oldPrice: "70.900",
    discount: "5% OFF",
    installments: "12 cuotas de 5.613",
    shipping: "Envío gratis por ser tu primera compra",
    imageSrc: "https://http2.mlstatic.com/D_NQ_NP_2X_864211-MCO77199785114_072024-F.webp",
    imageAlt: "Ventilador Samurai Ultra Silence Force",
  },
  {
    id: 2,
    name: "Mascarilla capilar milagros multivitamínica",
    href: "https://http2.mlstatic.com/D_NQ_NP_2X_792671-MLA79987808843_102024-F.webp",
    price: "32.841",
    oldPrice: "36.900",
    discount: "11% OFF",
    installments: "3 cuotas de $10.787",
    shipping: "Envío gratis",
    imageSrc: "https://http2.mlstatic.com/D_NQ_NP_2X_792671-MLA79987808843_102024-F.webp",
    imageAlt: "Mascrilla multivitaminica",
  },
  {
    id: 3,
    name: "Mascarilla Coco Reparación Hair Food Garnier 350ml",
    href: "https://http2.mlstatic.com/D_NQ_NP_2X_869663-MLU78023691217_072024-F.webp",
    price: "32.580",
    oldPrice: "33.850",
    discount: "3% OFF",
    installments: "3 cuotas de $10.860",
    shipping: "Envío gratis por ser tu primera compra",
    imageSrc: "https://http2.mlstatic.com/D_NQ_NP_2X_869663-MLU78023691217_072024-F.webp",
    imageAlt: "Mascarilla Coco Reparación",
  },
  {
    id: 4,
    name: "Audífonos Pro 2ª Gen Compatibles Con iPhone Y Android",
    href: "https://www.mercadolibre.com.co/audifonos-pro-2-gen-compatibles-con-iphone-y-android/p/MCO26686078",
    price: "299.900",
    oldPrice: "349.900",
    discount: "14% OFF",
    installments: "12 cuotas de $24.992",
    shipping: "Envío gratis por ser tu primera compra",
    imageSrc: "https://http2.mlstatic.com/D_NQ_NP_2X_967511-MLU78870039634_092024-F.webp",
    imageAlt: "Audífonos Pro 2ª Gen",
  },
  {
    id: 5,
    name: "Sombras Huda Nude - G Color Rosa",
    href: "https://http2.mlstatic.com/D_NQ_NP_2X_873080-MLA80962278529_112024-F.webp",
    price: "17.994",
    oldPrice: "29.990",
    discount: "40% OFF",
    shipping: "Costo de envío según ubicación",
    imageSrc: "https://http2.mlstatic.com/D_NQ_NP_2X_873080-MLA80962278529_112024-F.webp",
    imageAlt: "Sombras Huda Nude",
  },
  {
    id: 6,
    name: "Brillo labial Maybelline Lifter Gloss Shade Petal 5.4mL",
    href: "www.https://http2.mlstatic.com/D_NQ_NP_2X_855623-MLU77784638367_072024-F.webp",
    price: "60.960",
    oldPrice: "70.900",
    discount: "20% OFF",
    installments: "3 cuotas de $20.320",
    shipping: "Envío gratis",
    imageSrc: "https://http2.mlstatic.com/D_NQ_NP_2X_855623-MLU77784638367_072024-F.webp",
    imageAlt: "Brillo labial Maybelline",
  },
  {
    id: 7,
    name: "Auriculares Inalámbricos Xiaomi Redmi Buds 6 Lite Bt - Blue Color Azul",
    href: "https://http2.mlstatic.com/D_NQ_NP_2X_673015-MLA79553852215_092024-F.webp",
    price: "93.953",
    oldPrice: "199.900",
    discount: "53% OFF",
    installments: "3 cuotas de $31.318",
    shipping: "Envío gratis",
    imageSrc: "https://http2.mlstatic.com/D_NQ_NP_2X_673015-MLA79553852215_092024-F.webp",
    imageAlt: "Auriculares Redmi Buds 6 Lite",
  },
  {
    id: 8,
    name: "Tablet Xiaomi Redmi Pad Se 8gb 256gb Gris",
    href: "https://http2.mlstatic.com/D_NQ_NP_2X_643420-MLU77346186066_072024-F.webp",
    price: "685.900",
    oldPrice: "1.200.000",
    discount: "42% OFF",
    installments: "3 cuotas de $228.633",
    shipping: "Envío gratis",
    imageSrc: "https://http2.mlstatic.com/D_NQ_NP_2X_643420-MLU77346186066_072024-F.webp",
    imageAlt: "Redmi Pad",
  },
  {
    id: 9,
    name: "Tablet 10 Pulgadas Memoria 12+128 Con Teclado Y Accesorios",
    href: "https://http2.mlstatic.com/D_NQ_NP_2X_725434-MCO81067892672_122024-F.webp",
    price: "455.803",
    oldPrice: "469.900",
    discount: "3% OFF",
    installments: "12 cuotas de $37.984",
    shipping: "Envío gratis",
    imageSrc: "https://http2.mlstatic.com/D_NQ_NP_2X_725434-MCO81067892672_122024-F.webp",
    imageAlt: "Tablet 10 Pulgadas",
  },
];


export const ProductCard = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Productos Recomendados</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-lg p-4 shadow-md transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex justify-center">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="w-40 h-40 object-cover rounded-md"
              />
            </div>
            <div className="mt-4">
              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:underline block text-gray-900"
              >
                {product.name}
              </a>
              <div className="mt-2">
                <s className="text-sm text-gray-400">${product.oldPrice}</s>
                <div className="text-lg font-bold text-gray-900">
                  ${product.price} <span className="text-sm text-green-600">{product.discount}</span>
                </div>
                <span className="text-sm text-gray-600">{product.installments}</span>
              </div>
              <div className="mt-2 text-sm text-gray-700">{product.shipping}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default ProductCard;