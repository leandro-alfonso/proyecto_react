import React from "react";
import './App.css'
import Navbar from "./Componentes/Navbar/Navbar";
import { ItemListContainer } from "./Componentes/containers/ItemListContainer";

const app = () => {
  const mensaje= "ARMÁ TU PC CON NOSOTROS"
  return (
    <>
    <Navbar />
    <ItemListContainer greeting={mensaje} />
    </>
  )
}

export default app