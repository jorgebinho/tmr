<h1 align="center">
    <p>Trabalho TMR</p>
</h1>
<p align="center">💻Feito por Franco Veronese & Jorge Almeida💻</p>


# Acesso
[Trabalho pode ser acessado clicando aqui](https://tmr-three.vercel.app/)

# Estratégias usadas neste trabalho
Este trabalho seguiu as seguintes abordagens para sua realização
<h2> Números a serem utilizados 🤔</h2>
<p>Para se definir o número a ser utilizado para realizar os cálculos necessários, o sistema realiza o sorteio de um número entre 1 e 10 em todas as execuções, após essa definição o sistema passará pelo módulo em um total de 3 vezes, dentro do módulo ele realizará a operação de dobrar o valor do número que foi sorteado, porém dentro de cada execução realizada pelo módulo, haverá 25% de chance do número sofrer a indução de erro, neste projeto o módulo acrescentará um total de mais um ao dobro do número sorteado. Exemplificando: Caso o número sorteado seja 2, ao passar pelo módulo deverá ficar com valor 4, porém se ele sofrer a indução ao erro, ficará com valor 5, fazendo com que os cálculos que serao elucidados em seguida não consigam bater com o valor correto </p>

<h2> Cálculos realizados</h2>

* Média
<p>Para este método, foi realizado um simples cálculo de média, em que todos os valores são somados e divididos pela quantidade de números somados, nesta função, será retornado **true**  caso o valor final da função seja positivo, levando em consideraçao que caso seja acrescido em um algum valor, não seria possível que esta operação resultasse em um valor inteiro </p>

* Variação
<p>Para este método, foi realizada uma operação de subtração entre o maior e o menor valor possuído pela cadeia de números, caso o valor seja 0, isto significa que não foi encontrada variação, levando em conta que os valores são iguais, assim retornando true</p>


* Desvio Padrão
<p>Para este método se foi utilizado a operação de desvio padrão que serve para encontrarmos o grau de dispersão de um conjunto de dados, esta operação é realizada através do seguinte cálculo, primeiro se encontra a média, após isto, se calcula o quadrado da distância entre cada ponto e a média, após isto se soma todos os valores encontrados, se divide pela quantidade de números somados, feito isto se calcula a raiz quadrada e assim se encontra o desvi padrão, feito isto, a função retornará true caso o desvio padrão seja 0, levando em conta que caso este valor seja 0, significará que todos os valores são iguais  </p>


