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

