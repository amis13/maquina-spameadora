function convertirNumerosAArray(numerosTexto) {
  const prefijo = '+34 '
  const phoneNumbers = numerosTexto.split(' ').map(numero => prefijo + +numero.trim());
  return phoneNumbers;
}

const numerosTexto = "123456789 987654321 555555555 5465121561";
const phoneNumbers = convertirNumerosAArray(numerosTexto);
console.log(phoneNumbers);

module.exports = {phoneNumbers};