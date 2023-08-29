function convertirCorreosAArray(correosTexto) {
    const target = correosTexto.split(' ').map(correo => correo.trim());
    return target;
  }
  
  const correosTexto = "correo1@example.com correo2@example.com correo3@example.com";
  const target = convertirCorreosAArray(correosTexto);
  console.log(target);

  module.exports = {target};