import PropTypes from 'prop-types'

export const CitasShape = PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    dueño: PropTypes.string.isRequired,
    fecha: PropTypes.instanceOf(Date).isRequired,
    hora: PropTypes.instanceOf(Date).isRequired,
    sintomas: PropTypes.string.isRequired,
    key: PropTypes.number.isRequired,
    posicion: PropTypes.number.isRequired,
    setCitas: PropTypes.func.isRequired,
    citas: PropTypes.array.isRequired
})