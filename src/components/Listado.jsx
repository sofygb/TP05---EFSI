import { useState } from 'react';
import React from "react";
import Cita from './Cita';
import PropTypes from 'prop-types';

const Listado = ({citas, setCitas}) => {

    return citas.map((cita, i) => <Cita key={i} {...cita} posicion={i} setCitas={setCitas} citas={citas}/>)
}

Listado.propTypes = {
    citas: PropTypes.array.isRequired,
    setCitas: PropTypes.func.isRequired
}

export default Listado;


