import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import ClipLoader from "react-spinners/ClipLoader";
import {useParams} from "react-router-dom"

export const ItemDetailContainer = ({ envio }) => {

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const {id} = useParams ();


  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
        setLoading(false)
    },2000)
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((json) => setProduct(json))
    .catch((error) => {
      console.log(error);
    })
    // .finally(setLoading(false));
}, []);

  return (
    <>
    <h1 style={style.tituloPrincipal}> {envio} </h1>
      {<>{loading ? <div style={style.containerSpinner}><ClipLoader
        color={"#36d7b7"}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /></div>  : <ItemDetail product={product} />}</>}
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