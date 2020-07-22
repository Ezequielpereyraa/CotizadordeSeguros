import React, { useState } from 'react';
import { Error, Boton, Subtitulo, Label, Select, Box } from './style';
import PropTypes from 'prop-types';
import {
  obtenerDiferenciaYear,
  valorPorModelo,
  valorPorPlan,
} from '../../helpers';

const Formulario = ({ setResumen, setCargando }) => {
  const [datos, setDatos] = useState({
    modelo: '',
    year: '',
    plan: '',
  });
  const { modelo, plan, year } = datos;
  const [error, setError] = useState(false);
  const getDatos = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  // Evento Submit
  const validarFormulario = (e) => {
    e.preventDefault();
    if (modelo === '' || plan === '' || year === '') {
      setError(true);
      return;
    }
    setError(false);
    setCargando(true);

    // Sacar diferencia
    const diferencia = obtenerDiferenciaYear(year); // Obtenemos la diferencia de year
    let precioCotizacion = 2000; // Precio base
    precioCotizacion -= (diferencia * 3 * precioCotizacion) / 100; // Dependiendo el year se le agrega un 30%
    precioCotizacion = valorPorModelo(modelo) * precioCotizacion; // Dependiendo el modelo se le agrega un porcentaje

    precioCotizacion = parseInt(valorPorPlan(plan) * precioCotizacion).toFixed(
      2
    ); // Esta el resultado de la suma de los porcentaje depiendo modelo, year, y plan

    setTimeout(() => {
      // Elimina el spiiner
      setCargando(false);
      // Pasa la informacion luego que termine
      setResumen({
        cotizacion: Number(precioCotizacion),
        datos,
      });
    }, 4000);
  };

  return (
    <form onSubmit={validarFormulario}>
      <Subtitulo>Completa tus datos</Subtitulo>
      {error ? <Error>Todos los campos obligatorios</Error> : null}
      <Box>
        <Label> Modelo </Label>
        <Select name='modelo' value={modelo} onChange={getDatos}>
          <option value=''>--Selecciona Modelo --</option>
          <option value='Audi'>Audi</option>
          <option value='BMW'>Bmw</option>
          <option value='VolksWagen'>Volkswagen</option>
          <option value='Renaut'>Renaut</option>
          <option value='Fiat'>Fiat</option>
        </Select>
      </Box>
      <Box>
        <Label>Año</Label>
        <Select name='year' value={year} onChange={getDatos}>
          <option value=''>-- Seleccione --</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
          <option value='2018'>2018</option>
          <option value='2017'>2017</option>
          <option value='2016'>2016</option>
          <option value='2015'>2015</option>
          <option value='2014'>2014</option>
          <option value='2013'>2013</option>
          <option value='2012'>2012</option>
          <option value='2011'>2011</option>
          <option value='2010'>2010</option>
        </Select>
      </Box>
      <Box>
        <Label>Plan</Label>
        <input
          type='radio'
          name='plan'
          value='Basico'
          checked={plan === 'Basico'}
          onChange={getDatos}
        />
        Basico
        <input
          type='radio'
          name='plan'
          value='Completo'
          checked={plan === 'Completo'}
          onChange={getDatos}
        />
        Completo
      </Box>
      <Boton type='submit'>Cotizar</Boton>
    </form>
  );
};
Formulario.propTypes = {
  setResumen: PropTypes.func.isRequired,
  setCargando: PropTypes.func.isRequired,
};
export default Formulario;
