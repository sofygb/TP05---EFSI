import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import React from "react";

function MyForm(props) {
    
    const updateCitas = () => {
        const nuevaCita = {
            nombre: document.getElementById("nombre").value, 
            dueño: document.getElementById("dueño").value,
            fecha: document.getElementById("fecha").value,
            hora: document.getElementById("hora").value,
            sintomas: document.getElementById("sintomas").value
        } 
        
        props.setCitas([...props.citas, nuevaCita]); //el push del array causó errores. Preferentemente usar esta sintaxis.
    }

    return (
        <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <div>
                <label>Nombre Mascota</label>
                <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota"  id="nombre" />
                
                <label>Nombre Dueño</label>
                <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" id="dueño" />

                <label>Fecha</label>
                <input type="date" name="fecha" className="u-full-width"  id="fecha" />

                <label>hora</label>
                <input type="time" name="hora" className="u-full-width"  id="hora" />

                <label>Sintomas</label>
                <textarea name="sintomas" className="u-full-width" id="sintomas" />
                <button type="button" className="u-full-width button-primary" onClick={updateCitas}>Agregar Cita</button>
            </div>
        </div>
    )
}

export default MyForm;