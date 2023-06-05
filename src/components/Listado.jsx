import { useState } from 'react';
import React from "react";
import Cita from './Cita';

const Listado = (props) => {
    return props.citas.map((cita, i) => <Cita {...cita} key={i} posicion={i} setCitas={props.setCitas} citas={props.citas}/>)
}

export default Listado;


