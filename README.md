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

## Requisitos do Projeto

### Arquiteturas de Agentes

1. **Agente Reativo Simples:** Implementado.

2. **Agente com Estados/Modelos:** Implementado.

3. **Agente com Objetivos:** Implementado (em revisão).

4. **Agente de Utilidade:** Implementado (em revisão).

### Ações dos Agentes

Os agentes têm as seguintes ações disponíveis:

- Andar para Esquerda: Implementado.
- Andar para Direita: Implementado.
- Andar para Cima: Implementado.
- Andar para Baixo: Implementado.
- Pegar o Item: Implementado.
- NoOp ("Desligar"): Implementado.

  ### Percepções dos Agentes

Os agentes possuem as seguintes percepções:

- Localização (x, y): Implementado.
- Conteúdo do Local: Implementado.
- Conteúdo da Vizinhança-4 (cima, baixo, esquerda e direita): Implementado.

### Itens no Ambiente

O ambiente contém dois tipos distintos de itens:

- Item do Tipo 1: O agente recebe 1 ponto ao coletá-lo; Implementado.
- Item do Tipo 2: O agente recebe 3 pontos ao coletá-lo; Implementado.

### Medida de Desempenho

A medida de desempenho dos agentes é baseada na pontuação total obtida ao coletar itens. Confrontos envolvem a inserção de dois agentes no ambiente, e o vencedor é determinado com base na pontuação acumulada.

### Simulações

Deve-se realizar simulações até que todos os agentes tenham se enfrentado.
