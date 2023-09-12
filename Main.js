import AgenteReativoSimples from "./Agentes/AgenteReativoSimples.js";
import AgenteComEstadosModelos from "./Agentes/AgenteComEstadosModelos.js";
import AgenteComObjetivo from "./Agentes/AgenteComObjetivos.js";
import AgenteDeUltilidade from "./Agentes/AgenteDeUltilidade.js";
import { 
            MAX_ROW, MAX_COLUMN,
            environment,
            setLixoTotal,
            getLixoTotal
        } from './config.js';


function define_square () {
    const points = [0, 0, 0, 1, 3]; 
    const indiceAleatorio = Math.floor(Math.random() * points.length);
    return points[indiceAleatorio];
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function create_environment(environment, qt_1point, qt_3point) {
    let lixo_1_ponto = 0;
    let lixo_3_pontos = 0;
    const environment_html = document.querySelector('#environment');
    const posicoes_sujas = [{posX: 0, posY: 0}, {posX: 0, posY: 19}];
    
    for (let i = 0; i < MAX_ROW; i++) {
        const row = []
        for (let j = 0; j < MAX_COLUMN; j++) {
            row.push(0);
            const square_html = document.createElement('div');
            square_html.id = i.toString() +'-'+ j.toString(); //i-j
            square_html.className = 'square';
            environment_html.appendChild(square_html);
        }
        environment.push(row);
    }

    let cont = 0;
    while (cont < (qt_1point + qt_3point)) {
        const posXsujo = getRandomInt(0, MAX_ROW-1);
        const posYsujo = getRandomInt(0, MAX_COLUMN-1);

        let posicao_ja_suja = false;
        
        for(let i = 0; i < posicoes_sujas.length; i++) {
    
            if (posicoes_sujas[i].posX === posXsujo &&
                posicoes_sujas[i].posY === posYsujo) {
                    posicao_ja_suja = true;
                    break;
                }
        }

        if (posicao_ja_suja === false) {
            const square_html = document.getElementById(`${posXsujo}-${posYsujo}`);
            cont++;
            if (lixo_1_ponto < qt_1point && lixo_3_pontos < qt_3point) {
                const ponto_1_ou_3 = (Math.random() < 0.5) ? 1 : 3 
                if (ponto_1_ou_3 === 1) {
                    lixo_1_ponto ++;
                    
                } else {
                    lixo_3_pontos ++;
                }

                environment[posXsujo][posYsujo] = ponto_1_ou_3;
                setLixoTotal(getLixoTotal() + ponto_1_ou_3);
                square_html.innerText = `${ponto_1_ou_3}`

            }
            else if (lixo_1_ponto < qt_1point) {
                environment[posXsujo][posYsujo] = 1;
                lixo_1_ponto ++;
                square_html.innerText = '1'
                setLixoTotal(getLixoTotal() + 1);
            }
            else if (lixo_3_pontos < qt_3point) {
                environment[posXsujo][posYsujo] = 3;
                lixo_3_pontos++;
                square_html.innerText = '3'
                setLixoTotal(getLixoTotal() + 3);
            }
            posicoes_sujas.push(
                {
                    posX: posXsujo,
                    posY: posYsujo
                }
            )
        }

    }
    const lixo_total_visual = document.getElementById('lixo-total')
    lixo_total_visual.innerText = `LIXO TOTAL: ${getLixoTotal()}`
}

function create_random_environment (environment) {
    const environment_html = document.querySelector('#environment');
    for (let i = 0; i < MAX_ROW; i++) {
        let row = [];
        for (let j = 0; j < MAX_COLUMN; j++) {
            let square_state = define_square();
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
    // cria ambiente com lixo aleatório
    // create_random_environment(environment);

    // cria ambiente com quantidade definida de cada tipo de lixo
    create_environment(environment, 20, 10); //cria ambiente com 20 itens de 1 ponto e 10 de 3 pontos;

    // cria agente reativo simples
    const agenteSimples = new AgenteReativoSimples(0, 0, 'red');

    // cria agente baseado em modelos e seu ambiente interno
    const agenteModelo = new AgenteComEstadosModelos(0, 19, 'blue');
    create_internal_environment(agenteModelo)

    // cria agente baseado em objetivos e seu ambiente interno
    const agenteObjetivo = new AgenteComObjetivo(19, 0, 'green');
    create_internal_environment(agenteObjetivo)

    // cria agente baseado em ultilidades e seu ambiente interno
    const agenteUltilidade = new AgenteDeUltilidade(19, 19, 'orange')
    create_internal_environment(agenteUltilidade)
    
    // função que executa os agente a cada t milesegundos;
    const t = 1000;
    function executarAgentes() {
        agenteSimples.agir();


        agenteModelo.agir();
        create_internal_environment(agenteModelo)
        


        agenteObjetivo.agir()
        create_internal_environment(agenteObjetivo)


        agenteUltilidade.agir()
        create_internal_environment(agenteUltilidade)
    
        // quando todos o lixo for coletado ele encerra a função!
        if (getLixoTotal() <= 0) {
            clearInterval(intervalId);
        }
    }

    const intervalId = setInterval(executarAgentes, t);

    
}

main()


