import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import ClipLoader from "react-spinners/ClipLoader";
import {useParams} from "react-router-dom"

export const ItemDetailContainer = ({ envio }) => {

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [objet,setObjet] = useState([])

  const {id} = useParams ();


  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
        setLoading(false)
    },2000)
    const getProductos = async () => {
    try{
      const res = await  fetch(`https://fakestoreapi.com/products/${id}`)
      const data = await res.json();
      setObjet(data.rating)
      setProduct(data);
    }catch {
      console.log("error");
    }
    };
    getProductos();
}, [id]);

  return (
    <>
    <h1 style={style.tituloPrincipal}> {envio} </h1>
      {<>{loading ? <div style={style.containerSpinner}><ClipLoader
        color={"#36d7b7"}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /></div>  : <ItemDetail product={product} objet={objet} />}</>}
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