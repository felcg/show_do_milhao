# Show do Milhão

> Jogo inspirado pelo programa de televisão Show do Milhão, exibido pelo SBT em 1999.

Um vídeo do jogo sendo explicado pode ser visto neste [link](https://youtu.be/H_seVVZq8ZQ).

##   Índice

- [Instalação](#instalação)
- [Funcionalidades](#funcionalidades)
- [Fluxo do jogo](#fluxo-do-jogo)
- [Tecnologias ](#tecnologias)
- [Licença](#licença)

## Instalação

> Você também pode ver o projeto neste [link](https://felcg.github.io/show_do_milhao/#/), caso não queira instalar o projeto.

### Clone

- Clone esse repositório usando `git clone https://github.com/felcg/show_do_milhao.git`

### Setup

> Instale usando `yarn` ou `npm` 

```shell
npm install
```
```shell
yarn
```

> Inicie o projeto com

```shell
npm start
```
```shell
yarn start
```
Então visite `http://localhost:3000/` em seu navegador para visualizar o projeto. 

## Funcionalidades
O jogo tem as principais funcionalidades do programa de TV além de algumas novas.

#### Escolher seu nome no início da partida
> O usuário pode escolher o nome ao inicar o jogo, podendo conter até 15 caracteres.
####  Responder perguntas sobre conhecimentos gerais.
 > Cada pergunta tem 4 alternativas que deverão ser escolhidas pelo usuário.
####  Pular perguntas.
 > O usuário pode pular perguntas 3 vezes por partida.
####  Ajuda das Placas 
> A ajuda das placas consiste em 8 placas, cada uma com um número de uma das alternativas. Cabe ao usuário decidir qual alternativa baseado no número de vezes que a alternativa apareceu nas placas. O usuário pode usar essa ajuda uma vez por partida.
####  Ajuda dos Gênios
> A ajuda dos gênios consiste em 4 placas, cada um com um número de uma das alternativas. Cabe ao usuário decidir qual alternativa baseado no número de vezes que a alternativa apareceu nas placas. O usuário pode usar essa ajuda uma vez por partida.
####  Ajuda das Cartas
> A ajuda das cartas consiste em 4 cartas escondidas, ao escolher uma carta, ela será mostrada para o usuário e dependendo do seu valor, alternativas erradas vão ser desabilitadas durante a rodada. As cartas são 'Rei', 'Ás', '2' e '3'. Ás, 2 e 3, eliminam 1, 2 e 3 respostas erradas respectivamente. Já o Rei não elimina nenhuma. O usuário pode usar essa ajuda uma vez por partida.
####  Ranking 
> Ao final de cada partida, o usuário entrará no ranking local. Esse pode ser acessado ao clicar em ranking na tela inicial. Lá estarão os  10 melhores resultados baseados na quantidade de dinheiro que ganharam no jogo. O ranking utiliza o nome escolhido no início do jogo. O usuário pode reiniciar o ranking apertando no botão 'Reiniciar ranking" na página Ranking.
####  Timer
> O jogo possui um timer de 60 segundos por pergunta. Esse timer reinicia a cada pergunta e para apenas ao escolher uma alternativa. O timer pode ser desabilitado nas opções.
####  Dificuldade
> O jogo possui três dificuldades: Fácil, Médio e Difícil. Cada uma corresponde apenas a dificuldade das perguntas. Não influenciando quantidade de ajudas e pulos ou o timer.
####  Opções
>O usuário pode modificar o jogo habilitando ou desabilitando o timer e escolhendo a dificuldade através do botão "Opções".

## Fluxo do jogo

O jogo consiste em uma série de perguntas que devem ser respondidas pelo usuário. Cada resposta correta adiciona dinheiro ao valor atual do jogador. O valor inicial é 0 reais. 
Existem 3 fases no jogo, na primeira o usuário ganha mil reais por resposta certa, na segunda 10 mil, e na terceira 100 mil. O jogador precisa responder 16 perguntas corretamente para vencer o jogo.

Na ultima pergunta de cada fase o usuário pode dobrar seu dinheiro. Por exemplo:
 >- Ao ter 5 mil de dinheiro e acertar a próxima pergunta, ganhará mais 5 mil.
 >- Ao ter 50 mil de dinheiro e acertar a próxima pergunta, ganhará mais 50 mil.
 >-  Ao ter 500 mil de dinheiro e acertar a próxima pergunta, ganhará mais 500 mil.
 
O jogador pode utilizar recursos para ajudá-lo na partida. Ajudas das Cartas, Placas e Gênios uma vez, além de pular para a próxima pergunta 3 vezes.

Existe a opção de tempo para responder, caso esteja habilitada o jogador terá 60 segundos por pergunta. Que serão indicados visualmente na tela por uma barra de progresso com o valor dos segundos.

Caso o jogador responda incorretamente, o jogo termina e ele sai com metade do dinheiro que está atualmente. Por exemplo, ao errar a pergunta tendo 20 mil reais, a pontuação final é de 10 mil reais. Com exceção da última pergunta, caso erre essa o jogador perde tudo!

Também é possível que o jogador decida parar, caso o faça o jogo termina e a sua pontuação final é o dinheiro que estiver quando parar.

O fluxo principal do jogo é: Receber a pergunta na tela, escolher uma alternativa entre as 4 apresentadas, ir para a próxima pergunta ou perder a partida.

## Tecnologias 
Nesse projeto utilizei as seguintes tecnologias:
>React
 Redux
 Sass
 Bootsrap

## Licença

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

The MIT License (MIT)

Copyright (c) 2020 Felipe Campos Guimarães

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.