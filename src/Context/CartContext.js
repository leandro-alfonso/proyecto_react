import React, {createContext,useState} from "react";

export const Context = createContext();

export const CustomProvider = ({children})=>{
    const [cart,setCart] = useState([])
    const [qty,setQty] = useState(0)
    const [total, setTotal] = useState(0)

    const agregarItem = (item,cantidad) => {
        if (IsInCart(item.id)){
            const agregar = cart.map((producto) => {
                if (producto.id === item.id) {
                  producto.cantidad += cantidad;
                }
                return producto;
              });
              setCart(agregar);
        }
        else{
            setCart([...cart,{...item,cantidad}])
        }
        setQty(qty + cantidad);
        setTotal(total + (item.price * cantidad));
    }

    const borrarItem = (id) =>{
        const found = cart.find(producto => producto.id === id);
        setCart(cart.filter((item) => item.id !== id));
        setQty( qty - found.cantidad)
        setTotal(total - (found.price * found.cantidad))
    }

    const IsInCart = (id) => cart.some (item => item.id === id)

    const vaciarCarrito = ()=>{
        setCart ([]);
        setQty (0);
        setTotal(0);
    }
    return (
        <Context.Provider value={{cart,qty,total,agregarItem,borrarItem,vaciarCarrito,IsInCart}}>{children}</Context.Provider>
    )
}