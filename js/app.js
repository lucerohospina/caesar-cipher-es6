// Declarando variables
let cipherWord = document.getElementById('cipher-input');
let cipherBtn = document.getElementById('cipher-btn');
let decipherWord = document.getElementById('decipher-input');
let decipherBtn = document.getElementById('decipher-btn');
let validateWord = false;
let validateWord2 = false;

// Añadiendo eventos
cipherBtn.addEventListener('click', cipher);
decipherBtn.addEventListener('click', decipher);

// Funciones de los input
cipherWord.addEventListener('keyup', () => {
  console.log(cipherWord.value);
  // validamos que lo ingresado en el input no sea un numero y que no este vacio
  if (cipherWord.value === '' || parseInt(cipherWord.value) % 1 === 0) {
    cipherBtn.setAttribute('disabled', true);
  } else {
    cipherBtn.removeAttribute('disabled');
  }
}); 

decipherWord.addEventListener('keyup', () => {
  console.log(decipherWord.value);
  // validamos que lo ingresado en el input no sea un numero y que no este vacio
  if (decipherWord.value === '' || parseInt(decipherWord.value) % 1 === 0) {
    decipherBtn.setAttribute('disabled', true);
  } else {
    decipherBtn.removeAttribute('disabled');
  }
});

// Funciones de los eventos de los botones
function cipher() {
  let phrase = cipherWord.value.toUpperCase();
  let str = '';
  for (let i = 0; i < phrase.length; i++) {
    // nos aseguramos de que los espacios vacios no se cifren
    if (phrase[i] === ' ') {
      str += ' ';
    } else {
      // aplicamos la formula del codigo cesar y sumamos los elementos ya convertidos a las letras cifradas al string vacio y con espacios
      str += String.fromCharCode((phrase.charCodeAt(i) - 65 + 33) % 26 + 65);
    }
  }
  // creamos una card (bootstrap 4) en el DOM para colocar la frase descifrada
  var cardCipher = document.createElement('div');
  cardCipher.setAttribute('class', 'card mt-2');
  var cardCipherBody = document.createElement('div');
  cardCipherBody.setAttribute('class', 'card-body');
  cardCipherBody.textContent = str;
  
  cardCipher.appendChild(cardCipherBody);
  document.getElementById('cipher-section').appendChild(cardCipher);

  cipherWord.value = '';
  cipherWord.focus();  
}

function decipher() {
  let phrase2 = decipherWord.value.toUpperCase();
  let str2 = '';
  for (let i = 0; i < phrase2.length; i++) {
    // nos aseguramos de que los espacios vacios no se descifren
    if (phrase2[i] === ' ') {
      str2 += ' ';
    } else {
      // aplicamos la formula
      str2 += String.fromCharCode((phrase2.charCodeAt(i) + 65 - 33) % 26 + 65);
    }
  }
  // creamos una card (bootstrap 4) en el DOM para colocar la frase descifrada
  var cardDecipher = document.createElement('div');
  cardDecipher.setAttribute('class', 'card mt-2');
  var cardDecipherBody = document.createElement('div');
  cardDecipherBody.setAttribute('class', 'card-body');
  cardDecipherBody.textContent = str2;
  
  cardDecipher.appendChild(cardDecipherBody);
  document.getElementById('decipher-section').appendChild(cardDecipher);

  decipherWord.value = '';
  decipherWord.focus(); 
}