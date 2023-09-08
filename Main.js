import AgenteReativoSimples from "./Agentes/AgenteReativoSimples.js";
import AgenteComEstadosModelos from "./Agentes/AgenteComEstadosModelos.js";
import { MAX_ROW, MAX_COLUMN, environment, setLixoTotal, getLixoTotal} from './config.js';

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
            setLixoTotal(getLixoTotal() + square_state);
            row.push(square_state);

            const square_html = document.createElement('div');

            if (square_state == 1) {
                square_html.innerText = '1';
            } else if (square_state == 3){
                square_html.innerText = '3';
            }

            square_html.id = i.toString() +'-'+ j.toString(); //ij
            square_html.className = 'square';
            environment_html.appendChild(square_html);
        }
        environment.push(row)
    }
}

function main () {
    create_environment(environment);

    const agenteSimples = new AgenteReativoSimples(0, 0, 'red');
    const agenteModelo = new AgenteComEstadosModelos(0, 9, 'blue');

    function executarAgentes() {
        agenteSimples.agir();
        agenteModelo.agir();

        if (getLixoTotal() <= 0) {
            clearInterval(intervalId);
        }
    }

    const intervalId = setInterval(executarAgentes, 10);
}

main()
