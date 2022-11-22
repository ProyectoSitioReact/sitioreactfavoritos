import { collection, onSnapshot, where, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import AppForm from "./componente/AppForm";
import {db} from "./firebase";

function App() {  
  ///////////////////////////////////////////////////////////////////////
  ////////// READ - fnRead - LECTURA A BD ///////////////////////////////
  ///////////////////////////////////////////////////////////////////////
  const [docsBD, setDocsBD] = useState([]);
  //console.log(docsBD);

  const fnRead = () => {
    const xColeccionConQuery = query(collection(db, "favoritos"));
    //const xColeccionConQuery = query(collection(db, "persona"), where("nombre", "!=", ""));
    const unsubcribe = onSnapshot(xColeccionConQuery, (xDatosBD) => {
      const xDoc = [];
      xDatosBD.forEach( (doc) => {
        xDoc.push({id: doc.id, ...doc.data()});
      });

      setDocsBD(xDoc);
    });
  }

  fnRead();
/*
  useEffect( () => {
    
  }, [] );
  */
  ///////////////////////////////////////////////////////////////////////
  ////////// DELETE - fnDelete - Eliminar registros /////////////////////
  ///////////////////////////////////////////////////////////////////////
  const [idActual, setIdActual] = useState("");

  const fnDelete = () => {
    console.log("Se elimino...");
  };

  return (
    <center><div style={{width:"350px", background:"yellow", padding:"10px"}}>
      <center><h1>Tabla Favoritos</h1></center>
      <AppForm {...{idActual, setIdActual, fnRead}} />
      {
        docsBD.map((p) => <p key={p.id}> {p.Url} </p> )
      }      
    </div>
    </center>
  );
}

export default App;