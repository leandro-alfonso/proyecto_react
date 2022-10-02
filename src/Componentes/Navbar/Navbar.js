import React from "react";
import logo from '../../assets/logo.png'
import {style} from './Navbar.style'
import { CartWidget } from "../CartWidget/CartWidget";


export const Navbar = () =>{

const rutas = [
    {nombre:"Procesadores", id:0, ruta:""},
    {nombre:"Mother", id:1, ruta:""},
    {nombre:"Placas de video", id:2, ruta:""},
    {nombre:"Gabinetes", id:3, ruta:""},
]

    return (
        <header style={style.container}>
            <div style={style.containerDiv}>
            <img src= {logo} alt="logo cpu" style={style.containerLogo}/>
            <h1 style={style.containerTitulo}>Compu Oeste</h1>
            </div>
            <nav style={style.containerNav}>
                <ul style={style.containerLink}>
                   {
                   rutas.map((ruta)=>{
                    return <a key={ruta.id} style={style.containerA} href={ruta.ruta}>{ruta.nombre}</a>
                   })
                   }
                </ul>
            </nav>
            <div style={style.containerIcon}>
                <CartWidget />
            </div>
        </header>
    )
}

export default Navbar