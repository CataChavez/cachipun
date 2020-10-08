var gamesNumber  = parseInt(prompt('Ingrese mediante un número entero, la cantidad de veces que desa jugar: ', 3));
var counter = 0;
  
  while (counter< gamesNumber){
    var humanPlay = prompt('Ingrese su jugada. Debe ser piedra, papel o tijera.', 'piedra');
    var winner = winnerIs(humanPlay, pcPlay());
    switch(winner){
      case 'Humano':
        alert ('Felicidades Humano, haz ganado!')
        break;
      case 'máquina':
        alert ('Humano, haz perdido contra la máquina')
        break;
      default:
        alert('El resultado es un empate')
    }
    counter++;
  }

  function pcPlay(){
    switch (Math.floor(Math.random() * 3)){
        case 0:
          return 'piedra';
          break;
        case 1:
          return 'papel';
          break;
        case 2:
          return 'tijera';
          break;              
      }
  }

function winnerIs(human, machine){
  var result = '';
  if (human == machine){
    result = 'empate';
  }
  else if ((human == 'tijera' && machine == 'papel') ||
    (human == 'papel' && machine == 'piedra') ||
    (human == 'piedra' && machine == 'tijera')){
    result = 'humano';
  }
  else {
    result = 'máquina';
  }
  return result;
}
