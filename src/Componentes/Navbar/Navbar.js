import React from "react";
import logo from '../../assets/logo.png'
import {style} from './Navbar.style'
import { CartWidget } from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";


export const Navbar = () =>{

const rutas = [
    {nombre:"electronics", id:0, ruta:"/rutas/electronics"},
    {nombre:"jewelery", id:1, ruta:"/rutas/jewelery"},
    {nombre:"men's clothing", id:2, ruta:"/rutas/men's clothing"},
    {nombre:"women's clothing", id:3, ruta:"/rutas/women's clothing"},
]

    return (
        <header style={style.container}>
            <div style={style.containerDiv}>
            <Link to="/">
            <img src= {logo} alt="logo" style={style.containerLogo}/>
            </Link>
            <h1 style={style.containerTitulo}>ISOSHOP</h1>
            </div>
            <nav style={style.containerNav}>
                <ul style={style.containerLink}>
                   {
                   rutas.map((ruta)=>{
                    return <NavLink key={ruta.id} style={style.containerA} to={ruta.ruta}>{ruta.nombre}</NavLink>
                   })
                   }
                </ul>
            </nav>
            <div style={style.containerIcon}>
                <Link to="/cart">
                    <CartWidget />
                </Link>
            </div>
        </header>
    )
}

export default Navbar