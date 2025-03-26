type stringOuNumero = string | number

export function verificaFizzBuzz(valorInserido: stringOuNumero): stringOuNumero {

  if (valorInserido == "")
    return "Nenhum valor inserido" 

  const valorNumerico = Number(valorInserido)

  if (isNaN(valorNumerico)) return "Numero invalido"

  const eMultiploDe3 = valorNumerico % 3 == 0
  const eMultiploDe5 = valorNumerico % 5 == 0


  if (eMultiploDe3 && eMultiploDe5) return "FizzBuzz"

  if(eMultiploDe3) return "Fizz"

  if (eMultiploDe5) return "Buzz"

  return valorNumerico;

}