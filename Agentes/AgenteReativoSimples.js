import Agente from 'Agente.js';

class AgenteReativoSimples extends Agente {
    constructor(posX, posY, color) {
        super(posX, posY, color);
    }

    agir() {
        const {estado_posicao_atual, vizinhos} = this.percepcao()

        if (estado_posicao_atual === 1 || estado_posicao_atual === 3) {
            if (estado_posicao_atual === 1) {
                lixo_total --;
                this.score ++;
            } else {
                lixo_total -= 3;
                this.score += 3;
            }
            document.getElementById('score').innerText = `SCORE: ${this.score}`;
            environment[this.posX][this.posY] = 0;
            const posicao_visual = document.getElementById(`${this.posX}${this.posY}`)
            posicao_visual.innerText = '';
            console.log('limpa!')
        } 

        else if (vizinhos.top === 1 || vizinhos.top === 3) {
            this.move('t')
        }
        else if (vizinhos.bottom == 1 || vizinhos.bottom == 3) {
            this.move('b')
        }
        else if (vizinhos.left == 1 || vizinhos.left == 3) {
            this.move('l')
        }
        else if (vizinhos.right == 1 || vizinhos.right == 3) {
            this.move('r')
        } 
        else {
            const acoesPossiveis = [];
            
            if (vizinhos.top !== undefined) {
                acoesPossiveis.push(() => this.move('t'));
            }
            if (vizinhos.bottom !== undefined) {
                acoesPossiveis.push(() => this.move('b'));
            }
            if (vizinhos.left !== undefined) {
                acoesPossiveis.push(() => this.move('l'));
            }
            if (vizinhos.right !== undefined) {
                acoesPossiveis.push(() => this.move('r'));
            }
            // Escolha aleatoriamente uma ação
            if (acoesPossiveis.length > 0) {
                const acaoAleatoria = acoesPossiveis[Math.floor(Math.random() * acoesPossiveis.length)];
                acaoAleatoria();
            }
        }
    }
}

export default AgenteReativoSimples;