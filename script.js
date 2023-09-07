const MAX_ROW = 10;
const MAX_COLUMN = 10;

/* função por definir se quadrado estará limpo ou não.
    0 = limpo; 
    1 = sujo (+1 ponto);
    3 = muito sujo (+3 pontos);
*/  
function define_quare () {
    const points = [0, 0, 0, 1, 3]; 
    const indiceAleatorio = Math.floor(Math.random() * points.length);
    return points[indiceAleatorio];
}

function create_environment (environment) {
    const environment_html = document.querySelector('#environment');

    for (let i = 0; i < MAX_ROW; i++) {
        let row = [];
        for (let j = 0; j < MAX_COLUMN; j++) {
            let square_state = define_quare();
            lixo_total += square_state;
            row.push(square_state);

            const square_html = document.createElement('div');

            if (square_state == 1) {
                square_html.innerText = '1';
            } else if (square_state == 3){
                square_html.innerText = '3';
            }

            square_html.id = i.toString() + j.toString(); //ij
            square_html.className = 'square';
            environment_html.appendChild(square_html);
        }
        environment.push(row)
    }
}

class Agente {
    constructor(posX, posY, color) {
        this.posX = posX;
        this.posY = posY;
        this.score = 0;
        this.agentColor = color;
        
        document.getElementById(`${this.posX}${this.posY}`).style.backgroundColor = color
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
    
    
    executar() {
        const intervalId = setInterval(() => {
            if (lixo_total > 0) {
                this.agir();
            } else {
                clearInterval(intervalId); // Para o loop quando todo o lixo for coletado
            }
            console.log('x:', this.posX, ', y:', this.posY)
        }, 1000);
    }
    
}

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
                acoesPossiveis.push(() => this.posY--);
            }
            if (vizinhos.bottom !== undefined) {
                acoesPossiveis.push(() => this.posY++);
            }
            if (vizinhos.left !== undefined) {
                acoesPossiveis.push(() => this.posX--);
            }
            if (vizinhos.right !== undefined) {
                acoesPossiveis.push(() => this.posX++);
            }
            // Escolha aleatoriamente uma ação
            document.getElementById(`${this.posX}${this.posY}`).style.backgroundColor = 'white'
            if (acoesPossiveis.length > 0) {
                const acaoAleatoria = acoesPossiveis[Math.floor(Math.random() * acoesPossiveis.length)];
                acaoAleatoria();
            }
            document.getElementById(`${this.posX}${this.posY}`).style.backgroundColor = this.agentColor;
        }
    }
}


/*
class AgenteComEstadosModelos extends Agente {
    constructor (posX, posY, color) {
        super(posX, posY, color);
    }
}

class AgenteComObjetivos extends Agente {
    constructor (posX, posY) {
        super(posX, posY);
    }
}

class AgenteDeUtilidade extends Agente {
    constructor (posX, posY) {
        super(posX, posY);
    }
}

*/


// Global Scope
const environment = []; // matriz que representará o ambiente;
let lixo_total = 0;


function main () {
    // Criando o ambiente
    create_environment(environment);

    // Criando o agente reativo simples
    const agenteSimples = new AgenteReativoSimples(0, 0, 'red'); // Inicializa o agente na posição (0, 0)
    agenteSimples.executar()
}

main();


