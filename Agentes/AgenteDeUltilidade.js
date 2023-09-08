import Agente from "./Agente.js";
import { MAX_COLUMN, MAX_ROW, environment, setLixoTotal, getLixoTotal} from '../config.js';


class AgenteDeUltilidade extends Agente {
    constructor (posX, posY, color) {
        const id_score_html = 'score-agente-ultilidade';
        super(posX, posY, color, id_score_html);

        this.ambiente_interno = this.criarModelo()
        const {vizinhos} = this.percepcao();

        this.objetivos = this.criarObjetivos();
    }

    criarModelo () {
        //cria uma cópia exata do ambiente inicial
        const modelo = [];
        for (let i = 0; i < MAX_ROW; i++) {
            const row = [];
            for (let j = 0; j < MAX_COLUMN; j++) {
                row.push(environment[i][j]);
            }
            modelo.push(row);
        }
        return modelo;
    }


    criarObjetivos () {
        const objetivos = [];

        //adiciona os lugares sujos que valem 3
        for (let x = 0; x < this.ambiente_interno.length; x++) {
            const row = this.ambiente_interno[x]
            for (let y = 0; y < row.length; y++) {
                if (this.ambiente_interno[x][y] === 3) {
                    const objetivo = {
                        feito: false,
                        posX: x,
                        posY: y
                    }
                    objetivos.push(objetivo)
                }
            }
        }

        //adiciona os lugares sujos que valem 1
        for (let x = 0; x < this.ambiente_interno.length; x++) {
            const row = this.ambiente_interno[x]
            for (let y = 0; y < row.length; y++) {
                if (this.ambiente_interno[x][y] === 1) {
                    const objetivo = {
                        feito: false,
                        posX: x,
                        posY: y
                    }
                    objetivos.push(objetivo)
                }
            }
        }
        return objetivos;
    }

    atualizarObjetivos () {
        this.objetivos = this.criarObjetivos();
    }

    // atualizarObjetivos () {
    //     const {vizinhos, estado_posicao_atual} = this.percepcao()

    //     //verificar se posição atual está feito!
    //     for (let i = 0; i < this.objetivos.length; i++) {
    //         if (this.objetivos[i].posX === this.posX && 
    //             this.objetivos[i].posY === this.posY) {
    //                 if (estado_posicao_atual === 0 &&
    //                     this.objetivos[i].feito === false) {
    //                         this.objetivos[i].feito = true;
    //                         break;
    //                     }
    //             }    
    //         }
        
    //     for (let)
    // }

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
            this.atualizarObjetivos()
        }
        else if (this.posX < x) {
            this.move('r');
            this.atualizarAmbienteInterno()
            this.atualizarObjetivos()
        }
        else if (this.posY > y) {
            this.move('t');
            this.atualizarAmbienteInterno()
            this.atualizarObjetivos()
        }
        else if (this.posY < y) {
            this.move('b');
            this.atualizarAmbienteInterno()
            this.atualizarObjetivos()
        }
    }

    agir() {
        const {estado_posicao_atual, vizinhos} = this.percepcao()

        if (estado_posicao_atual !== 0) {
            this.limpar(estado_posicao_atual)
            this.atualizarAmbienteInterno()
            this.atualizarObjetivos()
        } 

        else if (vizinhos.top === 3) {
            this.move('t')
            this.atualizarAmbienteInterno()
            this.atualizarObjetivos()
        }
        else if (vizinhos.bottom == 3) {
            this.move('b')
            this.atualizarAmbienteInterno()
            this.atualizarObjetivos()
        }
        else if (vizinhos.left == 3) {
            this.move('l')
            this.atualizarAmbienteInterno()
            this.atualizarObjetivos()
        }
        else if (vizinhos.right == 3) {
            this.move('r')
            this.atualizarAmbienteInterno()
            this.atualizarObjetivos()
        } 
        else if (estado_posicao_atual === 1) {
            this.limpar(estado_posicao_atual)
            this.atualizarAmbienteInterno()
            this.atualizarObjetivos()
        } 

        else if (vizinhos.top === 1) {
            this.move('t')
            this.atualizarAmbienteInterno()
            this.atualizarObjetivos()
        }
        else if (vizinhos.bottom == 1) {
            this.move('b')
            this.atualizarAmbienteInterno()
            this.atualizarObjetivos()
        }
        else if (vizinhos.left == 1) {
            this.move('l')
            this.atualizarAmbienteInterno()
            this.atualizarObjetivos()
        }
        else if (vizinhos.right == 1) {
            this.move('r')
            this.atualizarAmbienteInterno()
            this.atualizarObjetivos()
        } 

        else {
            for (let i = 0; i < this.objetivos.length; i++) {
                if (this.objetivos[i].feito === false) {
                    this.moveTo(this.objetivos[i].posX, this.objetivos[i].posY);
                    break;
                }
            }  
        }
    }
}

export default AgenteDeUltilidade;