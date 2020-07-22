export const obtenerDiferenciaYear = (year) => {
  return new Date().getFullYear() - year;
};

export const valorPorModelo = (modelo) => {
  let incremento;
  switch (modelo) {
    case 'Audi':
      incremento = 1.6;
      break;
    case 'BMW':
      incremento = 1.5;
      break;
    case 'VolksWagen':
      incremento = 1.4;
      break;

    case 'Renaut':
      incremento = 1.3;
      break;

    case 'Fiat':
      incremento = 1.2;
      break;

    default:
      break;
  }
  return incremento;
};

export const valorPorPlan = (plan) => {
  return plan === 'Basico' ? 1.2 : 1.5;
};
