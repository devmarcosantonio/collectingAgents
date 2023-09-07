import Agente from "./Agente";
import { MAX_ROW, MAX_COLUMN, environment, setLixoTotal, getLixoTotal} from './Escopo.js'

class AgenteComObjetivos extends Agente {
    constructor (posX, posY) {
        super(posX, posY);
    }
}

export default AgenteComObjetivos;