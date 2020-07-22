import React from 'react';
import { ContenedorResumen, Lista, Item, Text } from './style';
import PropTypes from 'prop-types';
const Resumen = ({ datos }) => {
  // Extraemos datos
  const { modelo, year, plan } = datos;

  if (modelo === '' || year === '' || plan === '') return null;

  return (
    <ContenedorResumen>
      <h3>Resumen de la Cotizacion</h3>
      <hr />
      <Lista>
        <Item>
          <b>Marca:</b>
          <Text> {modelo}</Text>
        </Item>
        <Item>
          <b>Año del Auto:</b>
          <Text>{year}</Text>
        </Item>
        <Item>
          <b>Plan Elegido:</b>
          <Text> {plan}</Text>
        </Item>
      </Lista>
    </ContenedorResumen>
  );
};

Resumen.propTypes = {
  datos: PropTypes.object.isRequired,
};
export default Resumen;
