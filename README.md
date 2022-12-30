## Cronômetro JavaScript

Nesse projeto criamos um cronômetro simples ultilizando as funções setInterval() e cleanInterval() .Com ele podemos iniciar,parar, continuar e reiniciar o tempo.
O setInterval() é uma função temporizadora. Ela executa uma função de retorno após determinado tempo. A função setInterval() executará infinitamente, até que você     execute a função clearInterval().

## [setInterval e clearInterval()](https://www.mundojs.com.br/2019/06/19/como-usar-o-setinterval/)

- Como funciona?

    Sendo uma função assíncrona, a instrução a ser executada é lançada no Event Loop. Mas o que é Event Loop? É uma instrução síncrona, ou seja, quando ela estiver         executando, a thread ficará bloqueada e, assim que terminar, a próxima instrução é executada. Como o setInterval() executará infinitamente, sabemos que ele             adicionará uma instrução ao Event Loop a cada quantia de tempo que for definida.

- Definição:

    O setInterval() chama uma função em intervalos de tempo definidos. Ele continuará chamando a função até que o clearInterval() seja chamado, ou que a página seja       fechada.

- Sintaxe:
    setInterval(function, miliseconds, parameter1, parameter2, …);

- ONDE:

    function: é a função que será executada;

    miliseconds: é o intervalo em milisegundos(ms) em que o código será executado. Se o valor especificado for menor que 10, o valor 10 será utilizado.

    parameter: parâmetros para passar para a função.

- O clearInterval()
    limpa o timer configurado pela função setInterval(). Ele desativa a função e não executa a função definida pelo temporizador.

- Sintaxe:

    clearInterval(id_do_setInterval)

## Ferramentas utilizadas

- [x] HTML5
- [x] CSS3
- [x] JavaScript
