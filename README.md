# Cronômetro Online

Este é um simples cronômetro online criado com HTML, CSS e JavaScript, que exibe o tempo no formato `MM:SS:MS` (minutos, segundos e milissegundos). Ele conta com funções de iniciar, pausar e resetar o tempo.

## Funcionalidades

- **Iniciar**: Começa o cronômetro.
- **Pausar**: Interrompe o cronômetro mantendo o tempo atual.
- **Resetar**: Reseta o cronômetro para `00:00:00`.

## Estrutura do Projeto

O projeto é composto por três arquivos:

1. **index.html** - Estrutura HTML do cronômetro.
2. **styles.css** - Estilização do cronômetro e layout da página.
3. **scripts.js** - Lógica do cronômetro (funções para contar o tempo e manipular os botões).

## Como Funciona

### HTML (index.html)

A estrutura HTML inclui:
- Um título (`<h1>`) indicando que é um cronômetro.
- Um contêiner principal que exibe o tempo atual no formato `MM:SS:MS`.
- Três botões para controlar o cronômetro: Start, Pause e Reset.

### CSS (styles.css)

O arquivo CSS aplica:
- Estilos ao contêiner principal, posicionando-o no centro da página.
- Definição de cores, espaçamento e fontes para os botões e o display do cronômetro.

### JavaScript (scripts.js)

O JavaScript fornece a lógica para o cronômetro:

1. **Variáveis**:
   - `number`: Armazena o tempo total em décimos de segundo.
   - `clock`: Armazena a referência do intervalo do cronômetro.
   - `paragraph`: Aponta para o elemento `<p id="stopwatch">` onde o tempo é exibido.

2. **Funções**:
   - `start()`: Inicia o cronômetro. Evita múltiplos intervalos verificando se `clock` já está em execução.
   - `pause()`: Pausa o cronômetro e redefine `clock` para `null`, permitindo reiniciar.
   - `reset()`: Interrompe o cronômetro e zera o tempo.
   - `formatTime(time)`: Formata os valores menores que 10 com um zero à esquerda para exibir no formato `MM:SS:MS`.

## Exemplo de Código

Aqui está um trecho do código de contagem de tempo:

```javascript
let number = 0;
let clock;
const paragraph = document.getElementById('stopwatch');

function start() {
    if(clock) return;  // Se o cronômetro já estiver rodando, não faz nada

    clock = setInterval(() => {
        number++;
        const minute = Math.floor(number / 6000);
        const seconds = Math.floor((number % 6000) / 100);
        const mili = number % 100;
        paragraph.textContent = formatTime(minute) + ':' + formatTime(seconds) + ':' + formatTime(mili);
    }, 10);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;  // Adiciona um zero à esquerda para valores menores que 10
}

function pause() {
    clearInterval(clock);
    clock = null;  // Permite que o cronômetro seja reiniciado
}

function reset() {
    clearInterval(clock);
    clock = null;
    number = 0;
    paragraph.textContent = '00:00:00';  // Reseta a exibição para o formato inicial
}

```
##Tecnologias Utilizadas
  -HTML5
  -CSS3
  -JavaScript
