import { MAX_ROW, MAX_COLUMN, environment, setLixoTotal, getLixoTotal} from '../config.js';
import Agente from './Agente.js';

class Player extends Agente {
    
    constructor (posX, posY, color) {
        const id_score_html = 'score-player';
        super(posX, posY, color, id_score_html);
    }

    moveTop () {
        const {vizinhos} = this.percepcao();
        if (vizinhos.top !== undefined) {
            this.move('t')
        }
    }

    moveBottom () {
        const {vizinhos} = this.percepcao();
        if (vizinhos.bottom !== undefined) {
            this.move('b')
        }
    }

    moveLeft () {
        const {vizinhos} = this.percepcao();
        if (vizinhos.left !== undefined) {
            this.move('l')
            
        }
    }

    moveRight () {
        const {vizinhos} = this.percepcao();
        if (vizinhos.right !== undefined) {
            this.move('r')
        }
    }

    player_limpar () {
       const {estado_posicao_atual} = this.percepcao();
       if(estado_posicao_atual !== 0) {
            this.limpar(estado_posicao_atual)
            document.getElementById(this.id_score_html).innerText = `SCORE: ${this.score}`
       }
    }
}

export default Player;