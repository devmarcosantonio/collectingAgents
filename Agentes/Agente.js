class Agente {
    constructor(posX, posY, color) {
        this.posX = posX;
        this.posY = posY;
        this.score = 0;
        this.agentColor = color;
        document.getElementById(`${posX}${posY}`).style.backgroundColor = color;
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
            document.getElementById(`${this.posX}${this.posY}`).style.backgroundColor = 'white'
            this.posY --   
            document.getElementById(`${this.posX}${this.posY}`).style.backgroundColor = this.agentColor;
        }
        else if (direcao === 'b') {
            document.getElementById(`${this.posX}${this.posY}`).style.backgroundColor = 'white'
            this.posY ++;
            document.getElementById(`${this.posX}${this.posY}`).style.backgroundColor = this.agentColor;
        }
        else if (direcao === 'l') {
            document.getElementById(`${this.posX}${this.posY}`).style.backgroundColor = 'white'
            this.posX --;
            document.getElementById(`${this.posX}${this.posY}`).style.backgroundColor = this.agentColor;
        }
        else if (direcao === 'r') {
            document.getElementById(`${this.posX}${this.posY}`).style.backgroundColor = 'white'
            this.posX ++;
            document.getElementById(`${this.posX}${this.posY}`).style.backgroundColor = this.agentColor;
        }
    }

}

export default Agente;