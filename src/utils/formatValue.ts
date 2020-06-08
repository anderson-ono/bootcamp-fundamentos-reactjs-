const formatValue = (value: number): string => {
  const options = { style: 'currency', currency: 'BRL'};

  const formattedValue = Intl.NumberFormat('pt-BR', options).format(value);

  return formattedValue;
}


export default formatValue;
