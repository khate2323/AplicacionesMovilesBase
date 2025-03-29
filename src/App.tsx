
import './App.css'
import Mapping from './typescript/Mapping'
import Navbar from './typescript/NavBar'
import Productos from './typescript/Productos'
import ProductCarousel from './typescript/ ProductCarousel'

function App() {

  return (
    <>
      <div className="justify-items-center w-dvw" />
      <Navbar/>
      <Mapping/>
      <ProductCarousel/>
      <Productos/>
    </>
  )
}

export default App
