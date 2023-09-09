import AgenteReativoSimples from "./Agentes/AgenteReativoSimples.js";
import AgenteComEstadosModelos from "./Agentes/AgenteComEstadosModelos.js";
import AgenteComObjetivo from "./Agentes/AgenteComObjetivos.js";

import { MAX_ROW, MAX_COLUMN, environment, setLixoTotal, getLixoTotal} from './config.js';
import AgenteDeUltilidade from "./Agentes/AgenteDeUltilidade.js";

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
    const lixo_total_visual = document.getElementById('lixo-total')
    lixo_total_visual.innerText = `LIXO TOTAL: ${getLixoTotal()}`
}

function create_internal_environment (agente) {
    let id_internal_environment = null;
    let separador = null;
    if (agente.id_score_html === 'score-agente-modelo') {
        id_internal_environment = 'internal-environment-agente-modelo';
    }
    else if (agente.id_score_html === 'score-agente-objetivo') {
        id_internal_environment = 'internal-environment-agente-objetivo';
        separador = '*'
    }
    else if (agente.id_score_html === 'score-agente-ultilidade') {
        id_internal_environment = 'internal-environment-agente-ultilidade';
        separador = '/'
    }

    if (id_internal_environment !== null) {
        
        const internal_environment_html = document.getElementById(id_internal_environment);
        document.getElementById('div-'+id_internal_environment).classList.remove('off')
        internal_environment_html.innerHTML = '';

        for (let i = 0; i < MAX_ROW; i++) {
            for (let j = 0; j < MAX_COLUMN; j++) {

                const square_ambiente_interno_html = document.createElement('div');
                if (agente.ambiente_interno[i][j] == 1 || agente.ambiente_interno[i][j] == 3) {
                    if (id_internal_environment === 'internal-environment-agente-ultilidade' &&
                    agente.ambiente_interno[i][j] === 3) {
                        square_ambiente_interno_html.innerText = 'x'
                    }
                    square_ambiente_interno_html.style.backgroundColor = agente.agentColor;
                }
                else {
                    square_ambiente_interno_html.style.backgroundColor = 'white';
                }
                square_ambiente_interno_html.className = 'square-ambiente-interno';
                internal_environment_html.appendChild(square_ambiente_interno_html);
            }
        }
    }
}

function main () {
    create_environment(environment);

    const agenteSimples = new AgenteReativoSimples(0, 0, 'red');

    const agenteModelo = new AgenteComEstadosModelos(0, 19, 'blue');
    create_internal_environment(agenteModelo)

    const agenteObjetivo = new AgenteComObjetivo(19, 0, 'green');
    create_internal_environment(agenteObjetivo)

    const agenteUltilidade = new AgenteDeUltilidade(19, 19, 'orange')
    create_internal_environment(agenteUltilidade)
    
    function executarAgentes() {
        agenteSimples.agir();


        agenteModelo.agir();
        create_internal_environment(agenteModelo)
        


        agenteObjetivo.agir()
        create_internal_environment(agenteObjetivo)


        agenteUltilidade.agir()
        create_internal_environment(agenteUltilidade)
    

        if (getLixoTotal() <= 0) {
            clearInterval(intervalId);
        }
    }

    const intervalId = setInterval(executarAgentes, 1000);

    
}

main()


