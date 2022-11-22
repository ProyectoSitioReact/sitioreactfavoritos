import { addDoc, collection } from 'firebase/firestore';
import React, {useState} from 'react'
import {db} from "../firebase";

const AppForm = (props) => {
    ///////////////////////////////////////////////////////////////////////
    ////////// CREAR - fnCrear - Guardar //////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    const camposRegistro = {Url:"", Nombre:"", Descripcion:""};
    const [objeto, setObjeto] = useState(camposRegistro);

    const handleStatusChange = (e) => {      //Manejar cambios en form
        const {name, value} = e.target;
        setObjeto({...objeto, [name]:value });
        console.log(objeto);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            if(props.idActual === ""){
                if(validarForm()){
                    addDoc(collection(db, 'favoritos'), objeto);
                    console.log("Se guardo registro en BD...");
                }else{
                    console.log("NO se guardo...");
                }
            }else{
                console.log("ACTUALIZAR REGISTRO...");
            }
            
        } catch (error) {
            console.error();
        } 
    };
    
    const validarForm = () => {
         if(objeto.Url === ""){
            alert("Escriba Url...");
            return false;
         }
         return true;
    };

    ///////////////////////////////////////////////////////////////////////
    ////////// UPDATE - fnUpdate - Actualizar /////////////////////////////
    ///////////////////////////////////////////////////////////////////////

    return (
        <div style={{background:"black", padding:"10px", margin:"10px"}}>
            <center><h3>Ingresa:</h3></center>
            <form onSubmit={handleSubmit}>
                <center><input type="text" name='Url' placeholder='Url...' 
                    onChange={handleStatusChange} value={objeto.Url}
                /></center>

                <center><input type="text" name='Nombre' placeholder='Nombre...' 
                    onChange={handleStatusChange} value={objeto.Nombre}
                /></center>

                <center><input type="text" name='Descripcion' placeholder='Descripción...' 
                    onChange={handleStatusChange} value={objeto.Descripción}
                /></center>
                <br></br>
                <center><button>
                    {props.idActual === "" ? "Guardar" : "Actualizar" }
                </button></center>
            </form>
            
        </div>
    )
}

export default AppForm
