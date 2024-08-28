let campoIdade;
let campoFantasia;

function setup() {
    createCanvas(400, 400);
    campoIdade = createInput("15");
    campoFantasia = createCheckbox("Gosta de Fantasia ?");
}


function draw() {
    background(220);
    let idade = campoIdade.value();
    let gostaDeFantasia = campoFantasia.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeFantasia);
    text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia) {
    if(idade >= 10) {
        if(idade >= 14) {
            return "Pequena sereia";
        } else {
            if(gostaDeFantasia){
                return "Diverditamente";
            } else {
                return "Meu malvado favorito";
            }
        }
    } else {
        if(gostaDeFantasia) {
            return "pica-pau";
        } else {
            return "Barbie";
        }
    }
}

