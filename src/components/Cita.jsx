import React from "react";
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

const Cita = (element) => { //Element tiene los atributos de cada cita + su key
    const eliminarCita = () => { //La función debería pasar el setcitas con la lista de citas, sin la cita cuya key es pasada por parámetro
        /*
        element.citas.removeChild(lastElement);
        element.setCitas([])*/
        var lista1 = element.citas.slice(0, element.posicion)
        var lista2 = element.citas.slice(element.posicion+1, element.citas.length)

        element.setCitas(lista1.concat(lista2))
    }

    return (<div className="cita">
    <p>Mascota: <span>{element.nombre}</span></p>
    <p>Dueño: <span>{element.dueño}</span></p>
    <p>Fecha: <span>{element.fecha}</span></p>
    <p>Hora: <span>{element.hora}</span></p>
    <p>Sintomas: <span>{element.sintomas}</span></p><button className="button.elimnar u-full-width" onClick={eliminarCita}>Eliminar
        ×</button>
</div>)
}

export default Cita