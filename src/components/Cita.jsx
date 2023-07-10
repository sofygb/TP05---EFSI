import React from "react";
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import { CitasShape } from "../shapes";
import PropTypes from 'prop-types'

const Cita = ({dueño, fecha, nombre, sintomas, hora, posicion, setCitas, citas}) => { //Element tiene los atributos de cada cita + su key
    


    const eliminarCita = () => { //La función debería pasar el setcitas con la lista de citas, sin la cita cuya key es pasada por parámetro
        /*
        element.citas.removeChild(lastElement);
        element.setCitas([])*/
        var lista1 = citas.slice(0, posicion)
        var lista2 = citas.slice(posicion+1, citas.length)

        setCitas(lista1.concat(lista2))
    }

    return (<div className="cita">
    <p>Mascota: <span>{nombre}</span></p>
    <p>Dueño: <span>{dueño}</span></p>
    <p>Fecha: <span>{fecha}</span></p>
    <p>Hora: <span>{hora}</span></p>
    <p>Sintomas: <span>{sintomas}</span></p><button className="button.elimnar u-full-width" onClick={eliminarCita}>Eliminar
        ×</button>
</div>)
}

Cita.propTypes = {
    nombre: PropTypes.string.isRequired,
    dueño: PropTypes.string.isRequired,
    fecha: PropTypes.string.isRequired,
    hora: PropTypes.string.isRequired,
    sintomas: PropTypes.string.isRequired,
    posicion: PropTypes.number.isRequired,
    setCitas: PropTypes.func.isRequired,
    citas: PropTypes.array.isRequired
}

export default Cita