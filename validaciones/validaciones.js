let celular = document.getElementById('celular')

celular.addEventListener('keypress', (event) => {
  event.preventDefault()
  console.log(event.keyCode)
  let valorTecla = String.fromCharCode(event.keyCode)
  console.log(valorTecla)
  let valorParsed = parseInt(valorTecla)
  console.log(valorParsed)
  if(valorParsed) {
    console.log('valor parsed')
    celular.value = celular.value + valorParsed
  }
})