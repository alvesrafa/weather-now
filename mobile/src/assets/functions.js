export function FtoC(value){
  let celsius = (5/9)*(value-32);
  return parseInt(celsius);
}
export function dataPadrao(date){
  date = new Date(date);
  var dia  = date.getDate().toString().padStart(2, '0'),
  mes  = (date.getMonth()+1).toString().padStart(2, '0'), 
  ano  = date.getFullYear();
  

  return dia+"/"+mes+"/"+ano;
}


export function diaSemana(date) {
  date = new Date(date);
  var diaSemana = date.getDay();
  let diaSemanaString = '';
  if (diaSemana === 0) diaSemanaString = "Domingo";
  if (diaSemana === 1) diaSemanaString = "Segunda-feira";
  if (diaSemana === 2) diaSemanaString = "Terça-feira";
  if (diaSemana === 3) diaSemanaString = "Quarta-feira";
  if (diaSemana === 4) diaSemanaString = "Quinta-feira";
  if (diaSemana === 5) diaSemanaString = "Sexta-feira";
  if (diaSemana === 6) diaSemanaString = "Sábado";

  return diaSemanaString;
}
export function diaSemanaMenor(date) {
  date = new Date(date);
  var diaSemana = date.getDay();
  let diaSemanaString = '';
  if (diaSemana === 0) diaSemanaString = "Domingo";
  if (diaSemana === 1) diaSemanaString = "Segunda";
  if (diaSemana === 2) diaSemanaString = "Terça";
  if (diaSemana === 3) diaSemanaString = "Quarta";
  if (diaSemana === 4) diaSemanaString = "Quinta";
  if (diaSemana === 5) diaSemanaString = "Sexta";
  if (diaSemana === 6) diaSemanaString = "Sábado";

  return diaSemanaString;
}