import Agente from "./Agente.js";
import { MAX_COLUMN, MAX_ROW, environment, setLixoTotal, getLixoTotal} from '../config.js';

class AgenteComEstadosModelos extends Agente {
    constructor (posX, posY, color) {
        const id_score_html = 'score-agente-modelo';
        super(posX, posY, color, id_score_html);

        document.getElementById(this.id_score_html).style.color = color;

        this.ambiente_interno = this.criarModelo()
        const {vizinhos} = this.percepcao();
        if (vizinhos.top !== undefined && vizinhos.top !== 0) {
            this.ambiente_interno[this.posX][this.posY-1] = vizinhos.top;
        }
        if (vizinhos.bottom !== undefined && vizinhos.bottom !== 0) {
            this.ambiente_interno[this.posX][this.posY+1] = vizinhos.bottom;
        }
        if (vizinhos.left !== undefined && vizinhos.left !== 0) {
            this.ambiente_interno[this.posX-1][this.posY] = vizinhos.left;
        }
        if (vizinhos.right !== undefined && vizinhos.right !== 0) {
            this.ambiente_interno[this.posX+1][this.posY] = vizinhos.right;
        }
    }

    criarModelo () {
        const modelo = [];
        for (let i = 0; i < MAX_ROW; i++) {
            const row = [];
            for (let j = 0; j < MAX_COLUMN; j++) {
                row.push(0);
            }
            modelo.push(row);
        }
        return modelo;
    }

    atualizarAmbienteInterno () {
        const {vizinhos, estado_posicao_atual} = this.percepcao();
        if (estado_posicao_atual !== this.ambiente_interno[this.posX][this.posY]) {
            this.ambiente_interno[this.posX][this.posY] = estado_posicao_atual;
        }

        if (vizinhos.top !== undefined){
            if (this.ambiente_interno[this.posX][this.posY-1] !== vizinhos.top) {
                this.ambiente_interno[this.posX][this.posY-1] = vizinhos.top;
            }
        }
        
        if (vizinhos.bottom !== undefined) {
            if (this.ambiente_interno[this.posX][this.posY+1] !== vizinhos.bottom) {
                this.ambiente_interno[this.posX][this.posY+1] = vizinhos.bottom;
            }
        }
        

        if (vizinhos.left !== undefined) {
            if(this.ambiente_interno[this.posX-1][this.posY] !== vizinhos.left) {
                this.ambiente_interno[this.posX-1][this.posY] = vizinhos.left;
            }
        }
        
        if (vizinhos.right !== undefined) {
            if (this.ambiente_interno[this.posX+1][this.posY] !== vizinhos.right) {
                this.ambiente_interno[this.posX+1][this.posY] = vizinhos.right;
            }
        }
    }

    moveTo (x, y) {
        if (this.posX > x) {
            this.move('l');
            this.atualizarAmbienteInterno()
        }
        else if (this.posX < x) {
            this.move('r');
            this.atualizarAmbienteInterno()
        }
        else if (this.posY > y) {
            this.move('t');
            this.atualizarAmbienteInterno()
        }
        else if (this.posY < y) {
            this.move('b');
            this.atualizarAmbienteInterno()
        }
    }

    agir() {
        const {estado_posicao_atual, vizinhos} = this.percepcao()

        if (estado_posicao_atual === 1 || estado_posicao_atual === 3) {
            this.limpar(estado_posicao_atual)
            this.atualizarAmbienteInterno()
        } 

        else if (vizinhos.top === 1 || vizinhos.top === 3) {
            this.move('t')
            this.atualizarAmbienteInterno()
        }
        else if (vizinhos.bottom == 1 || vizinhos.bottom == 3) {
            this.move('b')
            this.atualizarAmbienteInterno()
        }
        else if (vizinhos.left == 1 || vizinhos.left == 3) {
            this.move('l')
            this.atualizarAmbienteInterno()
        }
        else if (vizinhos.right == 1 || vizinhos.right == 3) {
            this.move('r')
            this.atualizarAmbienteInterno()
        } 

        else {
            let hist_posX_sujo;
            let hist_posY_sujo;
            let encontrouLixo = false;

            //busca no ambiente interno (memória) algum quadrado sujo!
            for (let x = 0; x < this.ambiente_interno.length; x++) {
                const row = this.ambiente_interno[x];
                for (let y = 0; y < row.length; y++) {
                    const estado = row[y];
                    if (estado != 0) {
                        hist_posX_sujo = x;
                        hist_posY_sujo = y;
                        encontrouLixo = true;
                        break; 
                    }
                }
                if (encontrouLixo) {
                    break;
                }
            }

            if (encontrouLixo === false) {
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
            } else {
                this.moveTo(hist_posX_sujo, hist_posY_sujo)
            }
           
            
        }
        console.log(this.ambiente_interno)
    }
}

export default AgenteComEstadosModelos;