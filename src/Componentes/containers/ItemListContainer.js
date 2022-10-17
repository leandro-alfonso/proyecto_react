import React, { useEffect, useState } from "react";
import ItemList from "./ItemList/ItemList";
import ClipLoader from "react-spinners/ClipLoader";
import {useParams} from "react-router-dom"


export const ItemListContainer = ({greeting})=> {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const {idCategoria} = useParams ();

    const URL_BASE = 'https://fakestoreapi.com/products'
    const URL_CAT = `${URL_BASE}/category/${idCategoria}`
  
    useEffect(() => {
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },2000)
      fetch(idCategoria === undefined ? URL_BASE : URL_CAT)
        .then((res) => res.json())
        .then((json) => setProducts(json))
        .catch((error) => {
          console.log(error);
        })
        // .finally(setLoading(false));
    }, [idCategoria]);

    return (
        <>
            <h1 style={style.tituloPrincipal}> {greeting} </h1>

            {
                <>{loading ? <div style={style.containerSpinner}><ClipLoader 
                color={"#36d7b7"}
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              /></div>: <ItemList products={products} />}
            </>
            }
        </>
    );
};

const style = {
    tituloPrincipal:{
        textAlign: 'center',
    },
    containerSpinner:{
        display: "flex",
        justifyContent: "center",
    }
}