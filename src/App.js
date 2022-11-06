import React from "react";
import './App.css'
import Navbar from "./Componentes/Navbar/Navbar";
import { ItemListContainer } from "./Componentes/containers/ItemListContainer";
import { ItemDetailContainer } from "./Componentes/containers/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter,Routes,Route,} from "react-router-dom";
import {Cart} from "./Componentes/containers/CartView/Cart";
import { CustomProvider } from "./Context/CartContext";

const app = () => {
  const mensaje= "¡Encontrá precios increíbles!"
  const venta="ENVÍO GRATIS EN 24HS"
  return (
    <BrowserRouter>
    <CustomProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={mensaje} />}/>
        <Route path="/rutas/:idCategoria" element={<ItemListContainer greeting={mensaje} />} />
        <Route path="/producto/:id" element={<ItemDetailContainer envio={venta}/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="*" element={<ItemListContainer />}/>
      </Routes>
    </CustomProvider>
    </BrowserRouter>
  )
}

export default app