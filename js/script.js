// Adicionar números ou operadores ao display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
  }
  
  // Limpar o display
  function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
  }
  
  // Calcular o valor no display
  function calculate() {
    const display = document.getElementById('display');
    try {
      display.value = eval(display.value); // Calcula a expressão no display
    } catch (e) {
      display.value = 'Erro'; // Exibe erro em caso de expressão inválida
    }
  }
  
  // Apagar o último caractere do display
  function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }
  
  // Calcular a raiz quadrada
  function calcularRaiz() {
    const display = document.getElementById('display');
    const numero = parseFloat(display.value);
    if (numero >= 0) {
      display.value = Math.sqrt(numero); // Calcula a raiz quadrada
    } else {
      display.value = 'Erro'; // Exibe erro para números negativos
    }
  }
  
  // Calcular porcentagem
  function calcularPorcentagem() {
    const display = document.getElementById('display');
    const numero = parseFloat(display.value);
  
    if (!isNaN(numero)) {
      display.value = numero / 100; // Converte para porcentagem
    } else {
      display.value = 'Erro'; // Exibe erro caso o valor no display não seja válido
    }
  }
  function calculate() {
    const display = document.getElementById('display');
    try {
      display.value = eval(display.value.replace(/,/g, '.')).toString().replace('.', ',');
    } catch (e) {
      display.value = 'Erro';
    }
  }
    