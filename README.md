# -collectingAgents
Este projeto está sendo feito para disciplina de Inteligência Artificial de minha graduação.

Atividade:
  Implemente 4 agentes racionais, cada um seguindo uma das arquiteturas vistas em aula:
• Agente reativo simples (implementado)
• Agente com estados/modelos (sendo implementado)
• Agente com objetivos
• Agente de utilidade 
    
  Os agentes têm como objetivo coletar itens espalhados pelo ambiente.
  Os agentes podem executar as seguintes ações: 
    • Andar para esquerda, 
    • Andar para direita, 
    • Andar para cima, 
    • Andar para baixo, 
    • Pegar o item, 
    • NoOp. "desligar"
    
  Os agentes têm as seguintes percepções: 
    • Local onde estão (x, y), 
    • Conteúdo do local, 
    • Conteúdo da Vizinhança-4. (cima, baixo, esquerda e direita)
    
  O ambiente deve ter as dimensões 20x20. (o meu código independe disso)
  O ambiente deve possuir dois tipos distintos de itens:
    • Item do tipo 1: o agente recebe 1 pontos;
    • Item do tipo 2: o agente recebe 3 pontos.
    
  Devem ser colocados aleatoriamente 10 itens de cada tipo no ambiente.
  A medida de desempenho dos agentes será a pontuação total de acordo com os itens coletados.
  Deve-se inserir dois agentes por vez no ambiente para um confronto, onde quem somar mais 
  pontos vence.
  O primeiro agente deve estar em (1, 1) e o segundo em (1, 20). 
  Deve-se repetir as simulações até que todos os agentes tenham se enfrentado.
