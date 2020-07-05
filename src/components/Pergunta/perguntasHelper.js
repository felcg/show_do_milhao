const listaPerguntas = []
let listaAlternativas = []
let listaRespostas = []

const perguntasFacil = `
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

Qual é a moeda oficial dos Estados Unidos?

Qual foi o placar no final da Copa de 98, quando o Brasil perdeu para a França?

Quantas folhas tem um trevo da sorte?

Qual é a cidade conhecida como “terra da garoa”?

Qual ator do cinema brasileiro é conhecido por ter unhas enormes?

O violoncelo é um tipo de instrumento de?

Com que fruta a Branca de Neve foi envenenada?

Quem foi técnico da Seleção brasileira de futebol na Copa de 98?

Em que cidade é realizada a corrida de São Silvestre?

Qual é a área da medicina que trata de crianças?

O saquê é uma bebida típica de qual país?

O dromedário tem quantas corcovas?

Um adulto sadio tem quantos dentes na boca?

Qual dos sete anões usa óculos?

Quem é o Homem de Aço das histórias em quadrinhos?

Cavalo, rainha e torre são peças de qual jogo?

Turmalina é uma espécie de quê?

Qual é o santo casamenteiro?

Quem ocupou o cargo de Ministro da Saúde do Brasil no ano de 2000?

Segundo a Bíblia, quem foi morto por Caim?

Qual é o livro dividido em Velho Testamento e Novo Testamento?

Qual objeto é usado como arma pelo Pingüim do Batman?

Qual ser mitológico possui o corpo metade mulher e metade peixe?

Qual foi o nome dado ao movimento liderado por Tiradentes?

Qual é o país de origem do vinho champanha?

Qual destes elementos se forma dentro das ostras?

Quando é comemorado o dia da mentira no Brasil?

Em que estado nasceu a cantora Elba Ramalho?

Quando é comemorado o dia da criança?

De qual lugar o personagem Tarzan era considerado rei?

Quem é a mulher do Tarzan?

Qual é o animal que puxa o trenó do Papai Noel?

Capixaba é quem nasce em qual estado brasileiro?

Quantos titulares possui uma equipe de vôlei?

Qual é o profissional que conduz o elevador?

Segundo a Bíblia, quantos apóstolos tinha Jesus Cristo?

Em qual país surgiu a máfia?

Qual é o profissional que usa o estetoscópio?

Fernando Henrique Cardoso é formado em que área?

Qual destes é considerado o mês das noivas?

Quem inventou o telefone?

Qual é o esporte praticado com pequenos aviões de controle remoto?

Qual é o significado da frase inglesa “I love you”?

Qual personagem lidera o bando da floresta de Sherwood?

Qual é a cor da pedra rubi?

Qual é a planta que fortalece o marinheiro Popeye?

Quando é comemorado o dia de Santo Antônio?

Qual era a profissão exercida por Lula, antes de ele ser presidente do PT?

Quem foi o amor do imperador Marco Antônio?

Qual estação do ano fica entre o verão e o inverno?

Como Joana d‘Arc foi morta?`

const alternativasFacil = `1 RIO DE JANEIRO
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
4 LIBRA

1 DOIS A ZERO
2 TRÊS A ZERO
3 QUATRO A ZERO
4 CINCO A ZERO

1 TRÊS
2 QUATRO
3 CINCO
4 SEIS

1 RIO DE JANEIRO
2 PORTO ALEGRE
3 PIRACICABA
4 SÃO PAULO

1 PENADINHO
2 ZÉ DO CAIXÃO
3 ZÉ DO CASARÃO
4 TONINHO DO DIABO

1 SOPRO
2 CORDAS
3 PERCUSSÃO
4 REPERCUSSÃO

1 MAÇÃ
2 PÊRA
3 MELÃO
4 LARANJA

1 ZAGALLO
2 SCOLARI
3 LUXEMBURGO
4 CARPEGIANNI

1 BELO HORIZONTE
2 RIO DE JANEIRO
3 SÃO PAULO
4 SALVADOR

1 GERIATRIA
2 PEDIATRIA
3 INFANTOLOGIA
4 BIOLOGIA

1 ESTADOS UNIDOS
2 JAPÃO
3 CORÉIA DO SUL
4 CHINA

1 UMA
2 DUAS
3 TRÊS
4 QUATRO

1 18
2 24
3 32
4 36

1 DUNGA
2 ZANGADO
3 DENGOSO
4 MESTRE

1 BATMAN
2 HUCK
3 HE-MAN
4 SUPER-HOMEM

1 DAMAS
2 XADREZ
3 LUDO
4 DOMINÓ

1 FLOR
2 FRUTO
3 PEDRA
4 VERDURA

1 SÃO PEDRO
2 SÃO PAULO
3 SÃO JOÃO
4 SANTO ANTÔNIO

1 ADIB JATENE
2 JOSÉ SERRA
3 CIRO GOMES
4 PEDRO MALAN

1 ADÃO
2 ISAAC
3 ABEL
4 ABRAÃO

1 BÍBLIA
2 ENCICLOPÉDIA
3 DICIONÁRIO
4 ATLAS

1 GUARDA-CHUVA
2 CHAPÉU
3 GALOCHA
4 CAPA

1 SEREIA
2 MEDUSA
3 CLEÓPATRA
4 SERENA

1 REVOLUÇÃO FRANCESA
2 GUERRA DOS EMBOABAS
3 INCONFIDÊNCIA MINEIRA
4 SEGUNDA GUERRA MUNDIAL

1 AMÉRICA
2 HOLANDA
3 FRANÇA
4 SUÉCIA

1 DIAMANTE
2 PÉROLA
3 RUBI
4 ESMERALDA

1 26 DE DEZEMBRO
2 7 DE SETEMBRO
3 1 DE ABRIL
4 15 DE NOVEMBRO

1 PARAÍBA
2 CEARÁ
3 BAHIA
4 ALAGOAS

1 12 DE OUTUBRO
2 1 DE ABRIL
3 13 DE MAIO
4 9 DE JULHO

1 DA SELVA
2 DA NOITE
3 DA TASMÂNIA
4 DAS MULHERES

1 DIANA
2 LOUIS LAINE
3 JANE
4 CHITA

1 CAVALO
2 RENA
3 TOURO
4 JUMENTO

1 ESPÍRITO SANTO
2 RIO GRANDE DO NORTE
3 SANTA CATARINA
4 PARANÁ

1 CINCO
2 SEIS
3 SETE
4 OITO

1 CONDUTOR
2 OPERADOR
3 ASCENSORISTA
4 RECEPCIONISTA

1 DEZ
2 ONZE
3 DOZE
4 TREZE

1 ESTADOS UNIDOS
2 INGLATERRA
3 ITÁLIA
4 ESPANHA

1 ENGENHEIRO
2 MECÂNICO
3 MÉDICO
4 AVIADOR

1 ADMINISTRAÇÃO
2 ECONOMIA
3 DIREITO
4 SOCIOLOGIA

1 SETEMBRO
2 JUNHO
3 MAIO
4 OUTUBRO

1 GRAHAM BELL
2 GEORGE WASHINGTON
3 THOMAS EDISON
4 MARCONI

1 AUTOMOBILISMO
2 IATISMO
3 AEROMODELISMO
4 ATLETISMO

1 BOM-DIA
2 ATÉ LOGO
3 EU AMO VOCÊ
4 ESTOU COM FOME

1 ROBIN COOK
2 ROBIN BANKS
3 ROBIN HOOD
4 ROBIN DAYS

1 AZUL
2 VERDE
3 AMARELA
4 VERMELHA

1 ALFACE
2 ESPINAFRE
3 CENOURA
4 REPOLHO

1 12 DE AGOSTO
2 11 DE JANEIRO
3 7 DE SETEMBRO
4 13 DE JUNHO

1 ENGRAXATE
2 PEDREIRO
3 FEIRANTE
4 METALÚRGICO

1 SHERAZADE
2 LADY GODIVA
3 CLEÓPATRA
4 JULIETA

1 VERÃO
2 OUTONO
3 INVERNO
4 PRIMAVERA

1 ENFORCADA
2 AFOGADA
3 QUEIMADA
4 ASFIXIADA`

const respostasFacil = `2
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
3
2
2
4
2
2
1
1
3
2
2
1
3
4
4
2
3
4
2
3
1
1
1
3
3
2
3
1
1
1
3
2
1
2
3
3
3
3
4
3
1
3
3
3
4
2
4
4
3
2
3`

const perguntasMedio = `
Quantos jogadores um jogo de vôlei reúne na quadra?

Qual é o país do tango?

Que imperador pôs fogo em Roma?

A cidade de Pompéia, que foi soterrada por um vulcão fica em qual desses países?

Como é chamado quem nasce em Milão, na Itália?

Que profissional usa uma ferramenta chamada formão?

Em qual estádio Pelé marcou seu milésimo gol?

O que é um oboé?

Como eram chamados os pilotos suicidas da Segunda Guerra?

O que é gôndola?

Sashimi é um prato originário de qual país?

Como é chamada a cantora que representa o papel principal em uma ópera?

Peroba é uma espécie de?

O alpinismo é praticado em que lugar?

O Coliseu é um monumento histórico de que cidade européia?

Qual é o ponto mais alto da Terra?

Que rio corta a cidade de Londres, na Inglaterra?

Qual é a raça do personagem principal do filme “Beethoven”?

Quem foi eleito presidente da África do Sul em 1994?

Qual cantor ficou conhecido como “O rei da voz”?

Quantos quilates tem o ouro puro?

Qual é a sigla da Organização das Nações Unidas?

De quantos em quantos anos aparece o cometa Halley?

Segundo a crença popular, a mula-sem-cabeça é mulher de quem?

Que atriz protagonizou o filme “Titanic”?

Como é chamada a doença que causa perda desigual da melanina?

Quem realizou a primeira cirurgia de ponte de safena no Brasil?

No filme, quem era parceiro de crimes da Bonnie?

Qual é a moeda oficial da Alemanha?

Quem foi o assassino de Lee Harvey Oswald?

Quem é o parceiro de aventuras de Dom Quixote?

Nas histórias do Snoopy, qual é o nome do passarinho?

Que metal avermelhado cria uma camada esverdeada em contato com a umidade?

Que planta era usada para fabricação de papel no antigo Egito?

Que país europeu tem como atração a tourada?

Que humorista, falecido em 1999, foi baterista de Raul Seixas?

O que os filatelistas colecionam?

Quem pintou o quadro “La Gioconda”, conhecido como “Mona Lisa”?

Em que cidade está situada a famosa Praça Vermelha?

Qual é o nome do vulcão que sepultou cidades na Itália no ano de 79?

Quando começou e terminou a Primeira Guerra Mundial?

Qual é a letra do alfabeto que simboliza o número dez em algarismo romano?

Qual é a história que Francis Ford Coppola dirigiu em três partes?

Que animais são criados nas pocilgas?

Quem foi o diretor do filme “A lista de Schindler?

Qual é o alimento produzido pela moagem dos grãos de cacau?

Quem introduziu o futebol no Brasil?

Em que continente se situa o rio Nilo?

Que colônia britânica foi devolvida à China em 1997?

Nova Delhi é a capital de que país?

O que leva o sangue do coração para o corpo?

Como é chamado o objeto falsificado vendido como original?

Em que matéria estuda-se álgebra na escola?

Qual é o nome original do filme “O médico e o monstro”?

Que atriz casou com Joe Dimaggio e Arthur Miller?

Quem disse a fra“Vim, vi e venci”?

Que nome se dá à volta dos cardumes de peixes para a nascente do rio?

Qual é o país que participou de todas as copas do mundo de futebol, até 1998?

Quais são os naipes vermelhos do baralho?

Qual é o nome verdadeiro do Batman?

Beirute é a capital de que país?

O que é um contratorpedeiro?

Às margens de que riacho foi proclamada a Independência do Brasil?

O “super bowl” faz parte de qual esporte?

Qual é o nome da embarcação típica do litoral nordestino brasileiro?

Em que estado norte-americano fica a cidade de Miami?

Qual é a capital do Iraque?

Como se chama a máquina usada para compactar o asfalto?

Em 1991, que esportista americano se afastou do basquete por ser HIV positivo?

Qual é o nome do cachorro de Charlie Brown?

Qual presidente dos Estados Unidos foi ator de cinema?

Como é chamado o templo sagrado dos judeus?

A que categoria pertence o cavalo-marinho?

O FBI é a polícia federal de qual país?

Em que cidade brasileira fica o Instituto Tecnológico de Aeronáutica?

Em que cidade foram realizados os jogos olímpicos de 2000?

Em que país fica a grande muralha com cerca de 6.400 quilômetros?

Qual é o nome do Patriarca da Independência do Brasil?

O nome América foi associado a qual desses nomes?

Qual é o médico que mais utiliza o eletrocardiograma?

Qual o significado da sigla “AI”, no AI-5?

Qual personagem bíblico dividiu as águas do Mar Vermelho?

Qual dessas cobras não é venenosa?

Que animal é usado no jogo de pólo?

Em que ano ocorreu o incêndio do edifício Joelma, na cidade de São Paulo?

Teresina é a capital de qual estado brasileiro?

Sobre qual cidade do Japão foi lançada a primeira bomba atômica?

O daltônico é deficiente em?

Qual é o dia da Padroeira do Brasil?

Qual é a capital do Estado de Mato Grosso do Sul?

Quantos são os continentes?

Por que nome são conhecidas as pessoas do Pólo Ártico?

Qual é a fórmula química da água?

Qual era a profissão de Cecília Meirelles?

Em que cidade fica a sede da rede de TV BBC?

Camillo é o sobrenome de qual cantor nascido em Brotas?

Por quantos integrantes era formado o grupo Beatles?

Qual foi o último imperador do Brasil?

Quem dirigiu o filme “Central do Brasil”?

O que significa a expressão e-mail?`

const alternativasMedio = `1 SEIS
2 OITO
3 DEZ
4 DOZE

1 URUGUAI
2 ARGENTINA
3 PARAGUAI
4 ESPANHA

1 TRAJANO
2 NERO
3 BRUTUS
4 CALÍGULA

1 JAPÃO
2 MÉXICO
3 ITÁLIA
4 ESTADOS UNIDOS

1 MILANENSE
2 MILANOSO
3 MILISTA
4 MILANÊS

1 CARPINTEIRO
2 RELOJOEIRO
3 CONFEITEIRO
4 BOMBEIRO

1 MORUMBI
2 PACAEMBU
3 MARACANÃ
4 MINEIRÃO

1 VULCÃO
2 COMIDA
3 INSTRUMENTO MUSICAL
4 TRIBO INDÍGENA

1 CAMICASES
2 SASHIMIS
3 HARAQUIRIS
4 SUMÔS

1 EMBARCAÇÃO
2 BRINQUEDO
3 MÚSICA
4 SÍMBOLO

1 JAPÃO
2 CHINA
3 ÍNDIA
4 INDONÉSIA

1 PRIMEIRA DAMA
2 DONA-PRIMA
3 PRIMA-DONA
4 OBRA-PRIMA

1 INSETO
2 ÁRVORE
3 VERME
4 VERDURA

1 MAR
2 MONTANHA
3 RIO
4 PRAIA

1 PARIS
2 COPENHAGUE
3 ROMA
4 LONDRES

1 EVEREST
2 MONTE SINAI
3 MONTE CASTELO
4 MONT BLANC

1 TÂMISA
2 SENA
3 RENO
4 AUBE

1 FILA
2 PASTOR ALEMÃO
3 POODLE
4 SÃO-BERNARDO

1 NELSON PIQUET
2 NELSON MANDELA
3 NELSON NED
4 JOHN NELSON

1 ORLANDO SILVA
2 VICENTE CELESTINO
3 FRANCISCO ALVES
4 CARLOS GALHARDO

1 18
2 20
3 24
4 30

1 ONU
2 FMI
3 CIA
4 OTAN

1 57 ANOS
2 67 ANOS
3 76 ANOS
4 79 ANOS

1 DO COROINHA
2 DO PADRE
3 DO SACRISTÃO
4 DO BISPO

1 CAMERON DIAZ
2 KATE WINSLET
3 BRIDGET FONDA
4 CATHERINE ZETTA JONES

1 ASTIGMATISMO
2 TENDINITE
3 VITILIGO
4 VITINGA

1 DR. ZERBINI
2 DR. FRITZ
3 DR. JATENE
4 DR. CALLIGARI

1 BILL
2 CLYDE
3 JAMES
4 BUTCH

1 LIRA
2 MARCO
3 FRANCO
4 LIBRA

1 JACK RUBY
2 JOHN WILKES BOOTH
3 PAT GARRET
4 CHARLOTTE CORDAY

1 SANCHO PANÇA
2 GUILHERME TELL
3 SIGMUND FREUD
4 LANCELOT

1 PIU-PIU
2 WOODSTOCK
3 CANARINHO
4 ROUXINOL

1 FERRO
2 COBRE
3 MERCÚRIO
4 AÇO

1 PAPIRO
2 EUCALIPTO
3 OLIVEIRA
4 MILHO

1 ESPANHA
2 ITÁLIA
3 FRANÇA
4 ALEMANHA

1 LILICO
2 RONI CÓCEGAS
3 GRANDE OTELO
4 MAZZAROPI

1 QUADROS
2 MOEDAS
3 SELOS
4 FIGURINHAS

1 LEONARDO DA VINCI
2 TICIANO
3 RAFAEL
4 MICHELÂNGELO

1 MOSCOU
2 BERLIM
3 PARIS
4 ROMA

1 VÊNUS
2 VESÚVIO
3 VARSÓVIA
4 VENEZA

1 1914-1919
2 1939-1945
3 1921-1932
4 1912-1915

1 V
2 D
3 L
4 X

1 TITANIC
2 SEXTA-FEIRA TREZE
3 O PODEROSO CHEFÃO
4 GUERRA NAS ESTRELAS

1 CAMELOS
2 BÚFALOS
3 CARNEIROS
4 PORCOS

1 CLINT EASTWOOD
2 STEVEN SPIELBERG
3 STANLEY KUBRICK
4 PEDRO ALMODÓVAR

1 PARAFINA
2 AÇÚCAR
3 CHOCOLATE
4 CAFÉ

1 PELÉ
2 JOÃO HAVELANGE
3 CHARLES MILLER
4 PAULO MACHADO

1 AFRICANO
2 EUROPEU
3 AMERICANO
4 ASIÁTICO

1 PEQUIM
2 HANÓI
3 HIROSHIMA
4 HONG KONG

1 ÍNDIA
2 ISLÂNDIA
3 PAQUISTÃO
4 MÉXICO

1 VEIAS
2 MÚSCULOS
3 ARTÉRIAS
4 OSSOS

1 PIRARUCU
2 PERNETA
3 PIRATA
4 PAPAGAIO

1 MATEMÁTICA
2 BIOLOGIA
3 QUÍMICA
4 FÍSICA

1 MASTERS E JOHNSON
2 DR. JEKYLL E MR. HYDE
3 BONNIE E CLYDE
4 D. QUIXOTE E SANCHO PANÇA

1 GLENDA JACKSON
2 MARGARET BECKET
3 MARILYN MONROE
4 ELIZABETH TAYLOR

1 JÚLIO CÉSAR
2 CALÍGULA
3 NERO
4 MARCO ANTÔNIO

1 POROROCA
2 PERERECA
3 PIRAPORA
4 PIRACEMA

1 ITÁLIA
2 URUGUAI
3 ARGENTINA
4 BRASIL

1 OUROS E COPAS
2 COPAS E PAUS
3 PAUS E OUROS
4 ESPADAS E PAUS

1 BRUCE WAYNE
2 DEXTER
3 CLARK KENT
4 LEX LUTOR

1 SÍRIA
2 NEPAL
3 MONGÓLIA
4 LÍBANO

1 TANQUE
2 NAVIO DE GUERRA
3 DIRIGÍVEL
4 AVIÃO DE CAÇA

1 CAMBUCI
2 SACOMÃ
3 IPIRANGA
4 SÃO FRANCISCO

1 BASEBALL
2 BASQUETE
3 FUTEBOL AMERICANO
4 GOLF

1 SUBMARINO
2 JET SKI
3 JANGADA
4 LANCHA

1 ALASCA
2 NOVA YORK
3 FLÓRIDA
4 CALIFÓRNIA

1 BELÉM
2 BAGDÁ
3 BEIRUTE
4 BUDAPESTE

1 ROLO COMPRESSOR
2 ESCAVADEIRA
3 TRATOR
4 LIXADEIRA

1 MICHAEL JORDAN
2 MAGIC JOHNSON
3 DENNIS RODMAN
4 MIKE TYSON

1 PLUTO
2 FLOQUINHO
3 BALEIA
4 SNOOPY

1 RONALD REAGAN
2 GEORGE BUSH
3 RICHARD NIXON
4 BILL CLINTON

1 IGREJA
2 CAPELA
3 SINAGOGA
4 CATEDRAL

1 MOLUSCO
2 CRUSTÁCEO
3 PEIXE
4 MAMÍFERO

1 INGLATERRA
2 ESTADOS UNIDOS
3 CANADÁ
4 FRANÇA

1 SÃO JOSÉ DO RIO PRETO
2 SÃO JOSÉ DOS PINHAIS
3 SÃO JOSÉ DOS CAMPOS
4 SÃO JOSÉ DOS SANTOS

1 MUNIQUE
2 SIDNEY
3 TÓQUIO
4 ATLANTA

1 JAPÃO
2 CHINA
3 AFEGANISTÃO
4 ÍNDIA

1 TIRADENTES
2 JOSÉ BONIFÁCIO
3 DOM PEDRO II
4 VASCO DA GAMA

1 AMÉRICO DOS REIS
2 AMÉRICO BRASILIENSE
3 AMÉRICO VESPÚCIO
4 JOSÉ AMÉRICO DA SILVA

1 ORTOPEDISTA
2 CARDIOLOGISTA
3 DERMATOLOGISTA
4 ACUPUNTURISTA

1 ATO INTENCIONAL
2 ATO INSTITUCIONAL
3 ATO INSPIRADOR
4 ATO IDEALIZADOR

1 ABRAÃO
2 MOISÉS
3 JOSUÉ
4 ELIAS

1 URUTU
2 CASCAVEL
3 JARARACA
4 PÍTON

1 CAMELO
2 CAVALO
3 MACACO
4 CACHORRO

1 1971
2 1972
3 1973
4 1974

1 TOCANTINS
2 PIAUÍ
3 ACRE
4 PARANÁ

1 TÓQUIO
2 NAGASAKI
3 OSAKA
4 HIROXIMA

1 SENTIR DOR
2 SENTIR PALADAR
3 DIFERENCIAR CORES
4 SENTIR CHEIRO

1 12 DE OUTUBRO
2 12 DE NOVEMBRO
3 11 DE DEZEMBRO
4 1 DE JANEIRO

1 CUIABÁ
2 VÁRZEA GRANDE
3 RONDONÓPOLIS
4 CAMPO GRANDE

1 CINCO
2 SETE
3 TRÊS
4 QUATRO

1 SULISTAS
2 ESQUIMÓS
3 NORTISTAS
4 POLARES

1 NACL
2 H2
3 H2O
4 CO2

1 CANTORA
2 ESCRITORA
3 ARQUITETA
4 PIANISTA

1 LONDRES
2 NOVA YORK
3 MONTREAL
4 CALIFÓRNIA

1 LEONARDO
2 CHITÃOZINHO
3 DANIEL
4 VINNY

1 TRÊS
2 QUATRO
3 CINCO
4 SEIS

1 D.PEDRO II
2 D.PEDRO I
3 D.JOÃO VI
4 DEODORO DA FONSECA

1 BRUNO BARRETO
2 HÉCTOR BABENCO
3 ARNALDO JABOR
4 WALTER SALLES JÚNIOR

1 CORREIO RÁPIDO
2 CORREIO ELETRÔNICO
3 CORREIO ELEGANTE
4 CORREIO DE MÁQUINA`

const respostasMedio = `4
2
2
3
4
1
3
3
1
1
1
3
2
2
3
1
1
4
2
3
3
1
3
2
2
3
3
2
2
1
1
2
2
1
1
2
3
1
1
2
1
4
3
4
2
3
3
1
4
1
3
3
1
2
3
1
4
4
1
1
4
2
3
3
3
3
2
1
2
4
1
3
3
2
3
2
2
2
3
2
2
2
4
2
4
2
4
3
1
4
1
2
3
2
1
3
2
1
4
2`

const perguntasDificil = `
Em qual espécie o macho choca os ovos e a fêmea procura alimento?

Em qual país está localizado o “Muro das lamentações”?

Qual desses países não fica na Ásia?

Qual desses astros de filmes de ação é belga?

Onde foi conduzida a vitória das forças aliadas na Segunda Guerra Mundial?

Onde nasceu Van Gogh, o grande pintor impressionista?

Qual é a primeira letra do alfabeto grego?

Qual presidente brasileiro instituiu o AI-5?

O que significa literalmente Perestroika?

Qual desses quatro pesos é o mais leve?

Brahma é o deus de que religião?

Os nazistas foram julgados em?

Que ramo da pecuária ocupa- se de bodes e cabras?

Qual oceano tem o maior volume de água?

Qual foi o último presidente militar do Brasil?

Que conflito ideológico envolveu os EUA e a União Soviética?

O trapézio é um músculo que está situado?

Quem escreveu o livro “A sangue frio” em 1966?

Quem escreveu “Ulisses” em 1922?

Qual o símbolo químico do radônio?

O que são meninges?

Qual produto gerou guerras e conflitos no século XX?

Como é chamada a bola de gelo e poeira que orbita em torno do sol?

O confucionismo é uma filosofia de qual nacionalidade?

Qual a ciência que estuda a distribuição dos animais?

A eletrônica é parte de qual ciência?

A Bélgica é?

Que parte do corpo humano é infectada pela cólera?

Que figura mitológica é conhecida por sua força extraordinária?

A união do espermatozóide com o óvulo origina uma célula chamada?

A que país pertence a ilha de Terra Nova?

Em que país você pode gastar rublos?

Na criação do Estado do Tocantins, que estado teve o território reduzido?

De quem é este verso: “A praça é do povo, como o céu é do condor”?

Que nome recebe a foz de um rio que se abre para o mar?

“Arábica” e “robusta” são tipos de quê?

Em que ano Ayrton Senna venceu o primeiro campeonato de Fórmula 1?

Qual é a menor República do mundo?

Que símbolo está desenhado no centro da bandeira Argentina?

De quem é a frase ”Penso, logo existo”?

Quem construiu o primeiro telescópio astronômico completo?

Em que parte do nosso corpo está o úmero?

A quem se atribui a frase “Eu sou o Estado”?

Qual o nome verdadeiro do jogador de futebol conhecido com Zico?

O que significa deprecar?

Que cidade foi capital do Império Inca?

Com que outro nome é conhecido o Cabo Canaveral?

Que significa o prefixo exo?

Bill Clinton nasceu em que cidade?

Qual foi o material utilizado na construção do Partenon de Atenas?

Que trópico atravessa o Saara?

Quem foi aluno de Platão e tutor de Alexandre, o Grande?

“Guernica” é uma tela de qual pintor?

Em que ano foi inaugurada a estátua do Cristo Redentor no Rio de Janeiro?

Qual é a religião majoritária da Turquia?

Onde estão os sepulcros de Michelangelo, Maquiavel e Galileu?

A que país deve-se viajar para subir o Monte Parnaso?

A que letra do nosso alfabeto corresponde a letra grega tau?

Em qual guerra lutou Paul Newman pela marinha americana?

O que é talude?

Qual destas palavras é sinônimo de cabal?

Qual desses poetas foi indicado para o prêmio Nobel de literatura?

Qual foi a locomotiva a vapor que trafegou na Estrada de Ferro Mauá em 1854?

O que é palato?

O que construía Stradivarius?

Qual atleta foi desclassificado por uso de doping nas Olimpíadas de 1988?

Qual é o exame que emite ondas sonoras para visualizar os órgãos?

Qual é a especialidade dos profissionais que analisam os sulcos e marcas de uma bala?

Qual metal possui o símbolo Hg?

Qual é o nome dado a um conjunto de sinos?

Qual é a altura oficial do aro na cesta no basquete?

Qual é o apelido do time da Ponte Preta?

Quem foi chamado de Águia de Haia?

Quem escreveu “Dom Quixote”?

Qual a origem da palavra folclore?

Quem ganhou a 1a medalha de ouro olímpico para o Brasil?

Qual é o quarto planeta do sistema solar?

Que pintor francês consagrou a mulher taitiana em suas telas?

O que é glicose?

Qual destas seleções nunca jogou uma final de copa?

Qual foi a primeira mulher a entrar no “hall da fama” do rock and roll?

Nova Caledônia faz parte da?

Qual é o país que tem uma árvore estampada na bandeira?

O que procurava Juan Ponce de Leon quando descobriu a Flórida?

As Ilhas Malvinas também são chamadas de?

Qual destes países não se situa no Equador?

Em que país Leonardo da Vinci viveu seus últimos dias?

A que país pertence a Groenlândia?

Pablo Picasso foi um dos criadores do?

Como se chama o explorador de grutas e cavernas?

Qual o sistema de transporte mais utilizado no Brasil?

A baleia está classificada em qual grupo de mamíferos?

Qual é a maior ilha da Europa?

O filme “A noviça rebelde”, premiado com 5 Oscars, foi estrelado por?

Qual foi o primeiro presidente do Brasil eleito pelo povo?

O que o pintor Claude Monet representou em suas telas?

Miró, Picasso e Salvador Dalí eram pintores?

Qual foi o piloto de Fórmula 1 que conquistou o título de campeão mundial cinco vezes?

Como o rei francês Luis XVI e sua esposa Maria Antonieta morreram?

Como é chamada a gravura impressa sobre pranchas de madeira?`

const alternativasDificil = `1 ANDORINHA
2 PATO SELVAGEM
3 PINGÜIM
4 MARRECO

1 ALEMANHA
2 BRASIL
3 VENEZUELA
4 ISRAEL

1 PAQUISTÃO
2 JAPÃO
3 TAILÂNDIA
4 EGITO

1 ARNOLD SCHWARZENEGGER
2 SYLVESTER STALLONE
3 STEVEN SEAGAL
4 JEAN CLAUDE VAN DAMME

1 CANNES
2 NORMANDIA
3 CAPRI
4 MARSELHA

1 POLÔNIA
2 FRANÇA
3 ITÁLIA
4 HOLANDA

1 DELTA
2 BETA
3 ALFA
4 GAMA

1 COSTA E SILVA
2 ERNESTO GEISEL
3 JOÃO FIGUEIREDO
4 ITAMAR FRANCO

1 CONVERSÃO
2 INVOLUÇÃO
3 REESTRUTURAÇÃO
4 REGRESSÃO

1 10 ONÇAS
2 10 GRAMAS
3 10 QUILOS
4 10 LIBRAS

1 HINDUÍSMO
2 XINTOÍSMO
3 BUDISMO
4 ISLAMISMO

1 BERLIM
2 NUREMBERGUE
3 MUNIQUE
4 PARIS

1 ASININO
2 CAPRINO
3 BUFALINO
4 MUAR

1 ATLÂNTICO
2 PACÍFICO
3 ÍNDICO
4 ÁRTICO

1 FERNANDO COLLOR
2 JOÃO FIGUEIREDO
3 TANCREDO NEVES
4 JOÃO GOULART

1 GUERRA FRIA
2 GUERRA DO VIETNÃ
3 GUERRA NAS ESTRELAS
4 GUERRA DA CORÉIA

1 NO PESCOÇO
2 NO OMBRO
3 NA CABEÇA
4 NO BRAÇO

1 TRUMAN CAPOTE
2 HENRY JAMES
3 JOHN STEINBECK
4 TONI MORRISON

1 ERNEST HEMINGWAY
2 MARCEL PROUST
3 T.S. ELLIOT
4 JAMES JOYCE

1 Rr
2 Rd
3 Rn
4 Ro

1 CÉLULAS
2 NERVOS
3 MEMBRANAS
4 MÚSCULOS

1 ÁLCOOL
2 PETRÓLEO
3 OURO
4 ALUMÍNIO

1 COMETA
2 METEORITO
3 CAMADA DE OZÔNIO
4 ESTRELA D’ALVA

1 INDIANA
2 JAPONESA
3 CHINESA
4 COREANA

1 ZOOTERAPIA
2 ZOOGEOGRAFIA
3 ZODÍACO
4 ZOOMETRIA

1 FÍSICA
2 BIOLOGIA
3 QUÍMICA
4 BOTÂNICA

1 UMA REPÚBLICA
2 UMA MONARQUIA CONSTITUCIONAL
3 UM EMIRADO
4 UM PRINCIPADO

1 GARGANTA
2 INTESTINO
3 PULMÕES
4 RINS

1 ÁTILA
2 MINOTAURO
3 PERSEU
4 HÉRCULES

1 ZIGOTO
2 BIGOTO
3 FETO
4 GAROTO

1 ESTADOS UNIDOS
2 DINAMARCA
3 CANADÁ
4 FRANÇA

1 HOLANDA
2 RÚSSIA
3 ESPANHA
4 ÁFRICA DO SUL

1 GOIÁS
2 MATO GROSSO
3 PARÁ
4 MARANHÃO

1 TOBIAS BARRETO
2 DORIVAL CAIMI
3 MACHADO DE ASSIS
4 CASTRO ALVES

1 ALAGADO
2 MANGUEZAL
3 PÂNTANO
4 ESTUÁRIO

1 UVA
2 CAFÉ
3 MELÃO
4 LARANJA

1 1987
2 1990
3 1985
4 1988

1 MÔNACO
2 SAN MARINO
3 NOVA ZELÂNDIA
4 CHINA

1 SOL
2 LUA
3 ESTRELA
4 FOICE E MARTELO

1 PLATÃO
2 JÚLIO VERNE
3 ARISTÓTELES
4 RENÉ DESCARTES

1 CYRUS MCCORMICK
2 THOMAS EDISON
3 MICHELANGELO
4 GALILEU GALILEI

1 BRAÇO
2 PERNA
3 QUADRIL
4 COLUNA

1 LUIZ XIV
2 LUIZ XV
3 LUIZ XVI
4 NAPOLEÃO BONAPARTE

1 ARTHUR ANTUNES COIMBRA
2 ARTHUR ALVES PINTO
3 ARTHUR DA TÁVOLA
4 ARTHUR DOS SANTOS

1 RENEGAR
2 SUJEITAR
3 DESMAIAR
4 PEDIR

1 LA PAZ
2 BUENOS AIRES
3 BOGOTÁ
4 CUZCO

1 CABO JEFFERSON
2 CABO LINCOLN
3 CABO KENNEDY
4 CABO REAGAN

1 DENTRO DE
2 DEBAIXO DE
3 FORA DE
4 ATRÁS DE

1 LOS ANGELES
2 CHICAGO
3 HOPE
4 DALLAS

1 MÁRMORE
2 GRANITO
3 GESSO
4 QUARTZO

1 CAPRICÓRNIO
2 VIRGEM
3 CÂNCER
4 LEÃO

1 PITÁGORAS
2 DIDEROT
3 ARISTÓTELES
4 GALILEU GALILEI

1 MONET
2 RENOIR
3 PICASSO
4 LEONARDO DA VINCI

1 1921
2 1931
3 1941
4 1951

1 BUDISTA
2 ISLÂMICA
3 CATÓLICA
4 PROTESTANTE

1 MILÃO
2 FLORENÇA
3 VENEZA
4 GÊNOVA

1 ITÁLIA
2 FRANÇA
3 GRÉCIA
4 TURQUIA

1 F
2 H
3 J
4 T

1 PRIMEIRA GUERRA MUNDIAL
2 GUERRA DO VIETNÃ
3 GUERRA DA CORÉIA
4 SEGUNDA GUERRA MUNDIAL

1 AVALANCHE DE NEVE
2 FUNGO
3 INCLINAÇÃO DE TERRENO
4 RITO ISLÂMICO

1 BAIXO
2 PERFEITO
3 ATREVIDO
4 ENFERMO

1 MÁRIO QUINTANA
2 MANUEL BANDEIRA
3 VINÍCIUS DE MORAIS
4 CARLOS DRUMMOND DE ANDRADE

1 SANTA-FÉ
2 LOCO-BREQUE
3 AMERICAN
4 BARONESA

1 BARRIGA DA PERNA
2 MENINA DOS OLHOS
3 LÍNGUA
4 CÉU DA BOCA

1 CASAS
2 VIOLINOS
3 ARMAS
4 ESTRADAS

1 MIKE POWELL
2 BEN JOHNSON
3 CARL LEWIS
4 LINFORD CHRISTIE

1 XEROGRAFIA
2 ULTRA-SONOGRAFIA
3 FOTOGRAFIA
4 RADIOGRAFIA

1 BALEAGEM
2 BALÍSTICA
3 LOGÍSTICA
4 IMPRESSÃO DIGITAL

1 FERRO
2 AÇO
3 MERCÚRIO
4 OURO

1 CORRIMÃO
2 CARRILHÃO
3 BADALADA
4 CORSELETE

1 3,05 METROS
2 2,97 METROS
3 3,10 METROS
4 3,00 METROS

1 FEITICEIRA
2 RAPOSA
3 BRUXA
4 MACACA

1 JORGE AMADO
2 EÇA DE QUEIROZ
3 RUI BARBOSA
4 RAIMUNDO CORRÊA

1 ESPINOZA
2 MIGUEL DE CERVANTES
3 CARLOS CONTE
4 ANGEL MORITA

1 HOLANDESA
2 INGLESA
3 FRANCESA
4 BRASILEIRA

1 AFRANIO ANTONIO COSTA
2 GUILHERME PARAENSE
3 FERNANDO SOLEDADE
4 SEBASTIÃO WOLF

1 JÚPITER
2 VÊNUS
3 TERRA
4 MARTE

1 RENOIR
2 GAUGUIN
3 CÉZANNE
4 MONET

1 AMINOÁCIDO
2 HIDRATO DE CARBONO
3 LIPÍDIO
4 PROTEÍNA

1 ESPANHA
2 SUÉCIA
3 HUNGRIA
4 FRANÇA

1 JANIS JOPLIN
2 CAROLE KING
3 ARETHA FRANKLIN
4 DIANA ROSS

1 MICRONÉSIA
2 MELANÉSIA
3 POLINÉSIA
4 INDONÉSIA

1 EGITO
2 CANADÁ
3 LÍBANO
4 MARROCOS

1 A CIDADE PERDIDA DE OURO
2 A FONTE DA JUVENTUDE
3 UNICÓRNIOS
4 SEU GATO

1 STANLEY
2 WEDELLS
3 MEDANOSA
4 FALKLAND

1 QUÊNIA
2 EQUADOR
3 CHILE
4 INDONÉSIA

1 ESPANHA
2 HOLANDA
3 FRANÇA
4 ITÁLIA

1 DINAMARCA
2 INGLATERRA
3 NORUEGA
4 ESTADOS UNIDOS

1 CUBISMO
2 SURREALISMO
3 IMPRESSIONISMO
4 REALISMO

1 ESPELEÓLOGO
2 AGROSTÓLOGO
3 PSICÓLOGO
4 CAMPANÓLOGO

1 FERROVIÁRIO
2 AÉREO
3 HIDROVIÁRIO
4 RODOVIÁRIO

1 CETÁCEOS
2 FELINOS
3 SIRÊNIOS
4 CARNÍVOROS

1 GRÃ-BRETANHA
2 IRLANDA
3 ISLÂNDIA
4 SICÍLIA

1 JUDY GARLAND
2 SHIRLEY TEMPLE
3 JULIE ANDREWS
4 DORIS DAY

1 GETÚLIO VARGAS
2 PRUDENTE DE MORAES
3 WASHINGTON LUÍS
4 TANCREDO NEVES

1 OS JARDINS DE GIVERNY
2 OS BISTRÔS DE PARIS
3 CENAS DO MOULIN ROUGE
4 PAISAGENS DA PROVENÇA

1 ITALIANOS
2 PORTUGUESES
3 ESPANHÓIS
4 CHILENOS

1 JACQUES STEWART
2 ALAIN PROST
3 AYRTON SENNA
4 J. MANOEL FANGIO

1 ENFORCADOS
2 FUZILADOS
3 GUILHOTINADOS
4 QUEIMADOS

1 MATEROGRAFIA
2 LITOGRAFIA
3 XILOGRAFIA
4 SERIGRAFIA`

const respostasDificil = `3
4
4
4
2
4
3
1
3
2
1
2
2
2
2
1
2
1
4
3
3
2
1
3
2
1
2
2
4
1
3
2
1
4
4
2
4
2
1
4
4
1
1
1
4
4
3
3
3
1
3
3
3
2
2
2
3
4
4
3
2
4
4
4
2
2
2
2
3
2
1
4
3
2
2
2
4
2
2
1
3
2
3
2
4
3
3
1
1
1
4
1
1
3
2
1
3
4
3
3`

perguntasDificil.split('?').map((pergunta) => listaPerguntas.push(`${pergunta}?`))
listaPerguntas.pop()

listaAlternativas = alternativasDificil.split(/\n\s*\n/)

listaRespostas = respostasDificil.split(/\n/)

console.log('lista', listaRespostas)

const listaFinal = listaPerguntas
  .map((titulo, index) => ({
    id: index, titulo, alternativas: listaAlternativas[index].split('\n'), resposta: listaRespostas[index],
  }), this)

export default listaFinal
