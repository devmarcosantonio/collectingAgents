# -collectingAgents
Este projeto está sendo feito para disciplina de Inteligência Artificial de minha graduação.
FIZ utilizando HTML, CSS e JAVASCRIPT.

Visite a implementação hospedada com github Pages: https://devmarcosantonio.github.io/collectingAgents/

Atividade:
  Implemente 4 agentes racionais, cada um seguindo uma das arquiteturas vistas em aula:
    • Agente reativo simples (implementado);
    • Agente com estados/modelos (sendo implementado);
    • Agente com objetivos; 
    • Agente de utilidade.
    
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
