# -collectingAgents
Este projeto está sendo desenvolvido como parte da disciplina de Inteligência Artificial durante minha graduação. Estou animado com a oportunidade de explorar diferentes arquiteturas de agentes racionais e aplicá-las em um ambiente de coleta de itens.

## Objetivo
O principal objetivo deste projeto é criar e avaliar quatro agentes racionais, cada um com uma abordagem diferente para coletar itens no ambiente. Estou empolgado com a perspectiva de implementar essas estratégias e testá-las em confrontos para determinar qual delas é a mais eficaz.

Minha motivação para este projeto vai além da necessidade acadêmica. Estou genuinamente fascinado pela inteligência artificial e sua capacidade de resolver problemas do mundo real. Acredito que esta disciplina é uma oportunidade valiosa para aprimorar minhas habilidades e aplicar os conceitos aprendidos.

## Escolha do JavaScript
Optei por usar JavaScript para implementar este projeto, principalmente devido à minha familiaridade com a linguagem. Minha experiência prévia com JavaScript facilita a implementação da parte visual e interativa do ambiente de simulação. Além disso, a natureza versátil da linguagem me permite prototipar rapidamente e experimentar diferentes abordagens de implementação.

A escolha do JavaScript também me permite criar uma experiência mais envolvente para quem interage com a simulação, tornando-a mais acessível e amigável.

Visite a [implementação hospedada no GitHub Pages](https://devmarcosantonio.github.io/collectingAgents/) para experimentar os agentes em ação!

## Sobre o Projeto
Neste projeto, os agentes têm como objetivo coletar itens no ambiente e acumular pontos. Existem dois tipos diferentes de itens, cada um concedendo uma quantidade específica de pontos. A medida de desempenho dos agentes é a pontuação total obtida.

A simulação envolve confrontos entre os agentes, e meu objetivo é entender como diferentes estratégias se saem nesses confrontos e qual delas é a mais eficaz em termos de pontuação.

Estou ansioso para compartilhar os resultados e aprendizados deste projeto com a comunidade e continuar explorando o campo fascinante da Inteligência Artificial.


## Atividade:
  Implemente 4 agentes racionais, cada um seguindo uma das arquiteturas vistas em aula:
    • Agente reativo simples (implementado);
    • Agente com estados/modelos (implementado);
    • Agente com objetivos; (implementado) [em revisão]
    • Agente de utilidade. (implementado) [em revisão]
    
  Os agentes têm como objetivo coletar itens espalhados pelo ambiente.
  Os agentes podem executar as seguintes ações: 
    • Andar para esquerda; (implementado)
    • Andar para direita; (implementado)
    • Andar para cima; (implementado)
    • Andar para baixo; (implementado)
    • Pegar o item; (implementado)
    • NoOp. "desligar". (implementado)
    
  Os agentes têm as seguintes percepções: 
    • Local onde estão (x, y); (implementado)
    • Conteúdo do local; (implementado)
    • Conteúdo da Vizinhança-4. (cima, baixo, esquerda e direita). (implementado)
    
  O ambiente deve possuir dois tipos distintos de itens:
    • Item do tipo 1: o agente recebe 1 pontos; (implementado)
    • Item do tipo 2: o agente recebe 3 pontos. (implementado)
    
  A medida de desempenho dos agentes será a pontuação total de acordo com os itens coletados. 
  Deve-se inserir dois agentes por vez no ambiente para um confronto, onde quem somar mais 
  pontos vence.
  Deve-se repetir as simulações até que todos os agentes tenham se enfrentado.
