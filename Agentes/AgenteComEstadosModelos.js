import Agente from "./Agente";
import { environment, setLixoTotal, getLixoTotal} from '../config.js';

class AgenteComEstadosModelos extends Agente {
    constructor (posX, posY, color) {
        super(posX, posY, color);
    

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
}

export default AgenteComEstadosModelos;