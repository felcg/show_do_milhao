const listaPerguntas = []
let listaAlternativas = []
let listaRespostas = []

const perguntas = `
Em que estado brasileiro nasceu a apresentadora Xuxa?

Qual é o nome dado ao estado da água em forma de gelo?

Qual era o apelido da cantora Elis Regina?

Quem é a namorada do Mickey?

Qual é o personagem do folclore brasileiro que tem uma perna só?

Fidel Castro nasceu em que país?

Quem proclamou a república no Brasil em 1889?

Quem é o patrono do exército brasileiro?

Quem era o apresentador que reprovava os calouros tocando uma buzina?

O que era Frankenstein, de Mary Shelley?

Qual é o signo do zodíaco de quem nasce no dia do ano-novo?

Quem fundou a fábrica de automóveis Ford?

Qual é a cor que se associa com os grupos ecológicos?

A água ferve a quantos graus centígrados?

Quando é comemorado o dia da independência do Brasil?

Qual lugar é também chamado de Santa Sé?

Quem tem por lema a frase: “Sempre alerta”?

Quem foi o grande amor de Julieta?

Quantos signos formam o zodíaco?

Vatapá é uma comida típica de qual estado?

Como se chama o lugar onde são armazenadas as balas de um revólver?

Qual personagem da turma da Mônica tem apenas cinco fios de cabelo?

Qual cantora tinha o apelido de “Ternurinha” na época da jovem guarda?

O churrasco é considerado uma comida típica de qual estado?

Qual cantor é o pai da dupla Sandy e Júnior?

Quem foi o criador dos personagens Pedrinho, Narizinho e Emília?

Quem fundou a Microsoft?

Qual é o nome dado ao pneu reserva do carro?

Qual é o nome do cachorro medroso do Salsicha, dos desenhos animados?

Quantas dentições naturais tem o ser humano durante a vida?

Edinho, filho de Pelé, jogou no Santos em que posição?

Qual é a pedra preciosa mais dura encontrada na natureza?

Como se chama o lugar onde se guardam vinhos?

Qual cantor ficou conhecido como “o rei do rock”?

Quem é o inimigo do Piu-Piu nos desenhos animados?

Joana Prado é o nome verdadeiro de qual artista?

Quantos dias tem um ano bissexto?

Qual é o réptil que muda de cor conforme o lugar em que está?

Qual é a duração de cada tempo de uma partida de futebol?

Onde fica o centro da indústria cinematográfica nos EUA?

Qual era o código da identidade secreta de James Bond?

Qual é a fruta associada com a cidade de Laranjal?

Quantos centavos equivalem a um real?

De acordo com a Bíblia, qual era o “fruto proibido”?

Como é conhecida a ponte que liga Rio de Janeiro a Niterói?

Em que ano os portugueses descobriram o Brasil?

O que é medido por um termômetro?

O rio Amazonas pertence a qual continente?

Quem esculpiu o boneco Pinóquio, no conto de Carlo Lorenzini?

Qual é a moeda oficial dos Estados Unidos?`

const alternativas = `1 RIO DE JANEIRO
2 RIO GRANDE DO SUL
3 SANTA CATARINA
4 GOIÁS

1 LÍQUIDO
2 SÓLIDO
3 GASOSO
4 VAPOROSO

1 GAUCHINHA
2 PAULISTINHA
3 PIMENTINHA
4 ANDORINHA

1 MARGARIDA
2 MINNIE
3 A PEQUENA SEREIA
4 OLÍVIA PALITO

1 CUCA
2 NEGRINHO DO PASTOREIO
3 BOITATÁ
4 SACI-PERERÊ

1 JAMAICA
2 CUBA
3 EL SALVADOR
4 MÉXICO

1 DUQUE DE CAXIAS
2 MARECHAL RONDON
3 DOM PEDRO II
4 MARECHAL DEODORO

1 MARECHAL DEODORO
2 BARÃO DE MAUÁ
3 DUQUE DE CAXIAS
4 MARQUÊS DE POMBAL

1 RAUL GIL
2 BOLINHA
3 FLÁVIO CAVALCANTI
4 CHACRINHA

1 MONSTRO
2 GORILA
3 PRÍNCIPE
4 SAPO

1 VIRGEM
2 AQUÁRIO
3 CAPRICÓRNIO
4 ÁRIES

1 HARRISON FORD
2 GERALD FORD
3 HENRY FORD
4 ANNA FORD

1 PRETA
2 VERMELHA
3 AZUL
4 VERDE

1 200
2 100
3 170
4 220

1 21 DE ABRIL
2 12 DE OUTUBRO
3 7 DE SETEMBRO
4 25 DE DEZEMBRO

1 VENEZA
2 VITÓRIA
3 VANCOUVER
4 VATICANO

1 MÉDICOS
2 ESCOTEIROS
3 BOMBEIROS
4 POLICIAIS

1 ROMEU
2 ORFEU
3 HAMLET
4 IAGO

1 NOVE
2 DEZ
3 ONZE
4 DOZE

1 PARANÁ
2 SANTA CATARINA
3 SÃO PAULO
4 BAHIA

1 CANO
2 TAMBOR
3 AGULHA
4 GATILHO

1 MÔNICA
2 CEBOLINHA
3 CASCÃO
4 MAGALI

1 SILVINHA
2 WANDERLÉIA
3 GRETCHEN
4 MARTINHA

1 CEARÁ
2 RIO GRANDE DO SUL
3 PARÁ
4 MARANHÃO

1 LEONARDO
2 XORORÓ
3 ZEZÉ DI CAMARGO
4 CHITÃOZINHO

1 MAURÍCIO DE SOUSA
2 ZIRALDO
3 MONTEIRO LOBATO
4 MACHADO DE ASSIS

1 SULTÃO DE BRUNEI
2 AKIO MORITA
3 BILL GATES
4 PRÍNCIPE CHARLES

1 CALOTA
2 ESTEPE
3 MACACO
4 CHAVE DE RODA

1 FLOQUINHO
2 RIN-TIN-TIN
3 LASSIE
4 SCOOBY-DOO

1 UMA
2 DUAS
3 TRÊS
4 QUATRO

1 ZAGUEIRO
2 GOLEIRO
3 ATACANTE
4 ARMADOR

1 ESMERALDA
2 RUBI
3 PÉROLA
4 DIAMANTE

1 ADEGA
2 BIBLIOTECA
3 SÓTÃO
4 SALA

1 FRANK SINATRA
2 LITTLE RICHARD
3 ELVIS PRESLEY
4 RICHIE VALENS

1 FÉLIX
2 TOM
3 FRAJOLA
4 MINGAU

1 TIAZINHA
2 FEITICEIRA
3 LADY LU
4 SHEILA MELLO

1 364
2 365
3 366
4 367

1 SAPO
2 CAMALEÃO
3 LAGARTO
4 JACARÉ

1 45 MINUTOS
2 90 MINUTOS
3 120 MINUTOS
4 150 MINUTOS

1 NOVA YORK
2 LAS VEGAS
3 NEW ORLEANS
4 HOLLYWOOD

1 7O7
2 9O7
3 OO8
4 OO7

1 MELANCIA
2 LARANJA
3 MAÇÃ
4 UVA

1 DEZ
2 MIL
3 CEM
4 CINQÜENTA

1 MAMÃO
2 MAÇÃ
3 UVA
4 ABACAXI

1 GOLDEN GATE
2 RIO-NITERÓI
3 RIO SÃO FRANCISCO
4 BROOKLIN

1 1450
2 1500
3 1550
4 1400

1 LONGITUDE
2 UMIDADE
3 TEMPERATURA
4 LATITUDE

1 AMERICANO
2 AFRICANO
3 EUROPEU
4 ASIÁTICO

1 GEPETO
2 FADA
3 BRUXA
4 GIGANTE

1 ESCUDO
2 COROA
3 DÓLAR
4 LIBRA`

const respostas = `2
2
3
2
4
2
4
3
4
1
3
3
4
2
3
4
2
1
4
4
2
2
2
2
2
3
3
2
4
2
2
4
1
3
3
2
3
2
1
4
4
2
3
2
2
2
3
1
1
3`

perguntas.split('?').map((pergunta) => listaPerguntas.push(`${pergunta}?`))
listaPerguntas.pop()

listaAlternativas = alternativas.split(/\n\s*\n/)

listaRespostas = respostas.split(/\n/)

const listaFinal = listaPerguntas
  .map((titulo, index) => ({
    id: index, titulo, alternativas: listaAlternativas[index].split('\n'), resposta: listaRespostas[index],
  }), this)

export default listaFinal
