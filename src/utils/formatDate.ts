const formatDate = (date: Date): string => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };

  return Intl.DateTimeFormat('pt-BR', options).format(new Date(date));
}


export default formatDate;
