import React from 'react';
import { Mensaje, MensajeTotal } from './style';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

const Resultado = ({ cotizacion }) => {
  return cotizacion === 0 ? (
    <Mensaje>Elige marca, año y tipo de seguro</Mensaje>
  ) : (
    <TransitionGroup component='span' className='resultado'>
      <CSSTransition
        ClassNames='resultado'
        key={cotizacion}
        timeout={{ enter: 500, exit: 500 }}>
        <MensajeTotal>
          {' '}
          El Total es : $ <span>{cotizacion}</span>
        </MensajeTotal>
      </CSSTransition>
    </TransitionGroup>
  );
};
Resultado.propTypes = {
  cotizacion: PropTypes.number.isRequired,
};
export default Resultado;
