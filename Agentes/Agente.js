import { MAX_ROW, MAX_COLUMN, environment, setLixoTotal, getLixoTotal } from '../config.js';

class Agente {
    constructor(posX, posY, color, id_score_html) {
        this.posX = posX;
        this.posY = posY;
        this.score = 0;
        this.id_score_html = id_score_html;
        this.agentColor = color;
        document.getElementById(`${posX}-${posY}`).style.backgroundColor = this.agentColor;
    }

    percepcao() {
        const estado_posicao_atual = environment[this.posX][this.posY];
        const vizinhos = {
            top: this.posY > 0 
                ?  environment[this.posX][this.posY-1]
                :  undefined,
            bottom: this.posY < MAX_ROW - 1
                ? environment[this.posX][this.posY+1] 
                : undefined,
            left: this.posX > 0 
                ? environment[this.posX-1][this.posY] 
                : undefined,
            right: this.posX < MAX_COLUMN - 1 
                ? environment[this.posX+1][this.posY] 
                : undefined,
        };
    
        return {
            estado_posicao_atual,
            vizinhos,
        };
    }

    move (direcao) {
        if (direcao === 't') {
            document.getElementById(`${this.posX}-${this.posY}`).style.backgroundColor = 'white'
            this.posY --   
            document.getElementById(`${this.posX}-${this.posY}`).style.backgroundColor = this.agentColor;

        }
        else if (direcao === 'b') {
            document.getElementById(`${this.posX}-${this.posY}`).style.backgroundColor = 'white'
            this.posY ++;
            document.getElementById(`${this.posX}-${this.posY}`).style.backgroundColor = this.agentColor;
        }
        else if (direcao === 'l') {
            document.getElementById(`${this.posX}-${this.posY}`).style.backgroundColor = 'white'
            this.posX --;
            document.getElementById(`${this.posX}-${this.posY}`).style.backgroundColor = this.agentColor;
        }
        else if (direcao === 'r') {
            document.getElementById(`${this.posX}-${this.posY}`).style.backgroundColor = 'white'
            this.posX ++;
            document.getElementById(`${this.posX}-${this.posY}`).style.backgroundColor = this.agentColor;
        }
    }

    limpar (point) {
    
        if (point === 1) {
            setLixoTotal(getLixoTotal() - 1)
            this.score ++;
            
            
        } else {
            setLixoTotal(getLixoTotal() - 3)
            this.score += 3;
        }

        
        environment[this.posX][this.posY] = 0;
        const posicao_visual = document.getElementById(`${this.posX}-${this.posY}`)
        posicao_visual.innerText = '';
        const lixo_total_visual = document.getElementById('lixo-total')
        lixo_total_visual.innerText = `LIXO TOTAL: ${getLixoTotal()}`
        
    }

}

export default Agente;