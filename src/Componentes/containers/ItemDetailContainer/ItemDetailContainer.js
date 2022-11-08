import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import ClipLoader from "react-spinners/ClipLoader";
import {useParams} from "react-router-dom"
import { getDoc, collection, doc } from 'firebase/firestore';
import { db } from '../../../firebase/firebase';

export const ItemDetailContainer = ({ envio }) => {

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const {id} = useParams ();


  useEffect(() => {
    const productCollection = collection (db,"productos");
    const redDoc = doc(productCollection,id);

    const obtenerItem = async () => {
    try{
     const retornar = await getDoc(redDoc)
     const dataDoc = {
      id: retornar.id,
      ...retornar.data()
  };
  setProduct(dataDoc)
  }
  catch(error){
    console.error(error);
}
  finally{
    setLoading(false);
}
  }
  obtenerItem()

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