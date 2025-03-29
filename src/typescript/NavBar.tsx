import { Search, ShoppingCart, MapPin } from "lucide-react";


const Navbar = () => {
  return (
    <nav className="bg-[#ffe600] p-3 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://puntoapunto.com.ar/wp-content/uploads/2022/05/Mercado-final.jpg"
            alt="Mercado Libre Logo"
            className="h-8"
          />
        </div>

        {/* Barra de búsqueda */}
        <div className="flex-1 mx-6 relative">
          <input
            type="text"
            placeholder="Buscar productos"
            className="bg-white w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute right-3 top-2 text-gray-500" size={20} />
        </div>

        {/* Envío gratis */}
        <div className="bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-bold">
          ENVÍO GRATIS <span className="font-normal">EN TU PRIMERA COMPRA</span>
        </div>

        {/* Iconos de usuario */}
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-1">
            <MapPin size={16} />
            <span>Ingresa tu <span className="font-bold">ubicación</span></span>
          </div>
          <span>Categorías</span>
          <span>Ofertas</span>
          <span>Ayuda</span>
          <span className="font-bold">Crea tu cuenta</span>
          <span>Ingresa</span>
          <span>Mis compras</span>
          <ShoppingCart size={20} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;