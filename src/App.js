import React, { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import { Form } from './components/Formulario/style';
import Resultado from './components/Resultado';
import Spiner from './components/Spiner';

const App = () => {
  const [resumen, setResumen] = useState({
    cotizacion: 0,
    datos: {
      modelo: '',
      year: '',
      plan: '',
    },
  });

  const { cotizacion, datos } = resumen;

  const [cargando, setCargando] = useState(false);

  return (
    <>
      <Header title='Cotizar Seguro' />
      <Form>
        <Formulario setResumen={setResumen} setCargando={setCargando} />
        <Resumen datos={datos} />
        {cargando ? <Spiner /> : null}
        {!cargando ? <Resultado cotizacion={cotizacion} /> : null}
      </Form>
    </>
  );
};

export default App;
