var Letras;
var palavra_secreta;
var Banco_de_palavras;
window.onload = function init() {  
    var teclado = document.getElementById("teclado");
    var palavrachave = document.getElementById("palavrachave");
    var letrachave = document.getElementById("letrachave");
    var i;

    palavrachave.style.color = "red";

    Banco_de_palavras = [ 'petroleo', 'pestana', 'pestilento', 'peteleco',
        'reboque', 'cadafalso', 'cadeira', 'cola', 'rebento',
        'defumado', 'discurso', 'eletrodomestico', 'eletronica',
        'engrenagem', 'esfomeado', 'ferralheiro', 'ferrovia',
        'fertil', 'fortaleza', 'fortificante', 'oficina',
        'ornamento', 'palavra', 'preocupacao', 'radiologia',
        'radiografia', 'granja', 'granulado', 'induzido',
        'imbativel', 'industria', 'internacional', 'labirinto',
        'lobisomem', 'locomotiva', 'tesoura', 'massagista',
        'matadouro', 'mochila', 'noroeste', 'nitroglicerina',
        'helicoptero', 'capitalismo', 'software', 'engenharia',
        'noroeste', 'autentico', 'linux', 'processador',
        'quarentena', 'medicina', 'holocausto', 'radiografia',
        'xarope', 'zarolho', 'zoologico', 'hereditario', 'extase',
        'extravio', 'duodeno', 'ecologista', 'turismo',
        'traficante', 'conselho', 'baixista', 'avestruz',
        'quimica', 'botanica', 'respectivo', 'saxofone', 'taberna',
        'oculto', 'trigonometria', 'zodiaco', 'justaposto',
        'hidraulico', 'hexagono', 'mineiro', 'frenetico',
        'explosivel', 'exorcista', 'carteira', 'brasil', 'amorzinho', 
        'fresquinho', 'andrezinho', 'bobeira', 'marcos', 'selio', 'jogo', 'mapa',
        'babado', 'ana', 'critico', 'windows', 'linux', 'macaco', 'panela',
        'frederico', 'fofura', 'grafico', 'mula', 'cavalo', 'escola', 'mouse',
        'marrom', 'porta', 'massa', 'palha', 'pupila', 'laranja', 'celular', 'cueca', 'valorant',
        'uva', 'informacao', 'porta', 'janela', 'desodorante',
        'internet', 'caneca', 'tomada', 'caixa', 'limão', 'jaca', 'objeto', 'ford', 
        'qualidade', 'geladeira', 'ouro', 'bermuda', 'coberta','chinelo', 'gelo', 'reyna', 'cama'];
        
    var rand = Math.floor(Math.random() * Banco_de_palavras.length);
    palavra_secreta = Banco_de_palavras[rand].toUpperCase().split("");

    for(i=0; i<palavra_secreta.length; i++){ 
        var escondido = "style='visibility:hidden;'";
        palavrachave.innerHTML += "<div id='cor' class='group key'><div class= 'group char' " + escondido + " id='ltr" + i + "'>" + palavra_secreta[i] + "</char><cor";
       
    }


    letras = new Array('Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M');

        for(i = 0; i < letras.length; i++){
            var lString = "Chute('" + letras[i] + "')";
            var idtecla = "id='" + letras[i] + "'";
            teclado.innerHTML += "<button class='tecla' " + idtecla + " onclick=" + lString + ">" + letras[i] + "</button>";
        }
};


var fim_de_jogo = false;   
var valid = false;   
var erros = 0;  
var acertos = 0;  


alert("Você tem 7 tentativas para encontrar a palavra certa. Boa sorte!");
var Letras;
var palavra_secreta;
var Banco_de_palavras;
window.onload = function start(){  
    var teclado = document.getElementById("teclado");
    var palavrachave = document.getElementById("palavrachave");
    var i;

    palavrachave.style.color = "red";
    Banco_de_palavras = ['laranja', 'celular', 'cueca', 'valorant',
        'uva', 'informacao', 'porta', 'janela', 'desodorante',
        'internet', 'caneca', 'tomada', 'caixa', 'limão', 'jaca', 'objeto', 'ford', 
        'qualidade', 'geladeira', 'ouro', 'bermuda', 'coberta','chinelo', 'gelo', 'reyna', 'cama'];
        
    var rand = Math.floor(Math.random() * Banco_de_palavras.length);
    palavra_secreta = Banco_de_palavras[rand].toUpperCase().split("");

    for(i=0; i<palavra_secreta.length; i++){ 
        var escondido = "style='visibility:hidden;'";
        palavrachave.innerHTML += "<div id='cor' class='group key'><div class= 'group char' " + escondido + " id='ltr" + i + "'>" + palavra_secreta[i] + "</char><cor";
    
    }

    letras = new Array('Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M');

        for(i = 0; i < letras.length; i++){
            var lString = "Chute('" + letras[i] + "')";
            var idtecla = "id='" + letras[i] + "'";
            teclado.innerHTML += "<button class='tecla' " + idtecla + " onclick=" + lString + ">" + letras[i] + "</button>";
        }
};


var fim_de_jogo = false;    
var valid = false;   
var erros = 0;  
var acertos = 0;   

function Perdeu(){
    document.getElementById("resultado").innerHTML = "<div id='win'>VOCÊ PERDEU!</div>";
    alert("Você foi enforcado! as letras que preenchiam as lacunas e formavam a palavra eram: " + palavra_secreta);
    alert("Deseja jogar novamente? Se sim, clique no botão 'novo jogo' ou feche essa página para sair! ");
    document.getElementById("again").innerHTML = "<button onclick='window.location.reload()'>Novo Jogo</button>";
    fim_de_jogo = true;
}


function Ganhou(){
    document.getElementById("resultado").innerHTML = "<div id='win'>VOCÊ GANHOU!</div>";
    alert("Parabéns, você se salvou!");
    alert("Deseja jogar novamente? Se sim, clique no botão 'novo jogo' ou feche essa página para sair! ");
    document.getElementById("again").innerHTML = "<button onclick='window.location.reload()'>Novo Jogo</button>";
    
    fim_de_jogo = true;
}

function Again(){
    history.go(0);
}

function Chute(ltr){
            
    if(fim_de_jogo == false){   

        for(var j = 0; j < palavra_secreta.length; j++){
            if((ltr == palavra_secreta[j])&&(erros < 7)){
                var idltr = "ltr" + j;
                document.getElementById(idltr).style.visibility = "visible";
                document.getElementById(idltr).style.color = "green";
                document.getElementById(ltr).style.backgroundColor = "green";
                acertos+=1;
                valid = true;
                
            };
        };
        
        if((valid == false)&&(erros <= 7)){
            document.getElementById(ltr).style.backgroundColor = "red";
            erros+=1;
        }; if((valid == false)&&(erros >= 7)){   
            Perdeu()
        }else if(acertos == palavra_secreta.length){    
            Ganhou();
        };
    };
    valid = false;
    document.getElementById("falhas").innerHTML = erros;
    document.getElementById(ltr).setAttribute('onclick','chute("")');
};


