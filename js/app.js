let cipherWord = document.getElementById('cipher-input');
let cipherBtn = document.getElementById('cipher-btn');
let decipherWord = document.getElementById('decipher-input');
let decipherBtn = document.getElementById('decipher-btn');

cipherBtn.addEventListener('click', cipher);
decipherBtn.addEventListener('click', decipher);

function cipher() {
  console.log('click');
  //  usuario introduce una palabra en el input
  console.log(cipherWord.value);
  // empieza un ciclo para recorrer indice por indice la frase introducida
  for (var i = 0; i < cipherWord.value.length; i++) {
    // condicionamos el recorrido del ciclo a que si encuentra número este se detenga y vuelva a preguntar por la frase a ser usada
    if (parseInt(cipherWord.value[i]) % 1 === 0) {
      alert('Introduza las palabras con solo letras por favor');
    }
  }
  // pasamos a mayúsculas la frase que nos brindó el usuario 
  var phrase = cipherWord.value.toUpperCase();
  var str = '';

  for (var j = 0; j < phrase.length; j++) {
    //  hacemos una condición para los espacios entre las palabras de la frase
    if (phrase[j] === ' ') {
      str += ' ';
    } else
      // aplicamos la formula del codigo cesar y sumamos lo elementos ya convertidos a las letras cifradas al string vacio y con espacios
      str += String.fromCharCode((phrase.charCodeAt(j) - 65 + 33) % 26 + 65);
  }
  //  retornamos el string que contiene las letras cifradas
  // cipherBtn.removeAttribute(disabled);
  var cardCipher = document.createElement('div');
  cardCipher.setAttribute('class', 'card');
  var cardCipherBody = document.createElement('div');
  cardCipherBody.setAttribute('class', 'card-body');
  cardCipherBody.textContent = str;
  
  cardCipher.appendChild(cardCipherBody);
  document.getElementById('cipher-section').appendChild(cardCipher);
}

//  creamos ahora una funcion para descifrar lo ya cifrado. Vamos a enlazarlas a pedido del cliente
function decipher() {
  console.log('click 2');
  console.log(decipherWord.value);
  // declaramos un string vacio
  var str2 = '';
  // recorremos el string de la palabra introducida en el input del descifrado
  for (var k = 0; k < decipherWord.value.length; k++) {
    // si nos encontramos con un espacio en blanco en la frase
    if (decipherWord.value[k] === ' ') {
      // igual quedara en blanco en el string donde colocaremos el descrifrado
      str2 += ' ';
    } else
    // colocamos el descifrado del string ya cifrado de la funcion cipher. Aplicamos la formula
      str2 += String.fromCharCode((str2.charCodeAt(k) + 65 - 33) % 26 + 65);
  } 
  // devolvemos el resultado del cifrado mediante un alert y el descifrado escrito en la pagina web
  var cardDecipher = document.createElement('div');
  cardDecipher.setAttribute('class', 'card');
  var cardDecipherBody = document.createElement('div');
  cardDecipherBody.setAttribute('class', 'card-body');
  cardDecipherBody.textContent = str2;
  
  cardDecipher.appendChild(cardDecipherBody);
  document.getElementById('decipher-section').appendChild(cardDecipher);
}

