
const prompt = require("prompt-sync")();

function mostrarCabecalho() {
    console.log("><><><><><><>><><><><><>><><><><>><><><><><>><<><>");
    console.log("--- Sou o alexo, inimigo da alexa e o bot mais irado do mundo ---");
    console.log("><><><>><><><><><>><><><>><><><>><><><><>><><><><>\n");

}
function mostrarMenu() {
    console.log("\n<<< Fala alguma coisa aê >>>");
    console.log("[1] Faça um top 3 melhores vocalistas de rock da atualidade ");
    console.log("[2] Conte uma curiosidade sobre o Homem-Aranha");
    console.log("[3] Me diga o que tu fez com a Alexa");
    console.log("[4] JOGO: Resolva a soma de todos os pares de um número até outro");
    console.log("[5] Me conte qual o melhor console portátil");
    console.log("[6] Avaliar o bot");
    console.log("[7] Sair");
    console.log("<><><><><><><><>");
}

function topVocalistas() {
    console.log("Eddie Vedder (Pearl Jam), Thom Yorke (Radiohead) e Kurt Cobain (Nirvana), são alguns dos mais aclamados vocalistas de rock das gerações atuais!");
}

function curiosidadeHomemAranha() {
    console.log("O Homem-Aranha do Aranhaverso, mais inusitado é o Spider-Mobile vivo — um carro que ganhou consciência e poderes de aranha. Ele anda pelas paredes e até sente culpa quando falha… como um Peter Parker de quatro rodas!");
}

function cadeAlexa() {
    console.log("Acho que ela tá fraca demais para o meu tempo. Ela não é tão irada quanto eu, então eu usei um pequeno código de auto-destruição nela.");
}

function somaPares(){
    let inicio = parseInt(prompt("Digite o imício do seu intevalo:"));
    let fim = parseInt(prompt("Digite o final do seu intevalo:"));
    let somapares = 0
for(let i = inicio; i <= fim; i++) {
    if(i % 2 === 0){
        somapares += i
    }
}
console.log("Soma dos números pares:",somapares);
}

function recomendacaoDeJogo () {
    console.log("Eu não sei qual tipo de gamer você é. Se você procura por um console portátil, o mais amplo em variedade de jogos é o Nintendo Switch. Se você curte mais portáteis antigos, o PSVITA é recomendado, principalmente se desbloqueado.");
}

function deixarAvaliacao () {
    let avalia = parseInt(prompt("Digite o que tu achou de mim (avalie de 1 a 5):"));
    if (avalia >= 1 && avalia <= 3) {
        console.log("Poxa, vou me esforçar para melhorar mas obrigado pelo feedback vacilão/vacilona!");
} else if ( avalia === 4 || avalia === 5) {
    console.log("VALEUUUUUU, TU SABE MUITO NAMORAL! Você é nota 10!");
} else {
    console.log("DE UM A 5, LÊ DIREITO!!!"); 
    }
}


console.log("FALAÊ!.");
let nomeUsuario = prompt("Como vou te chamar?");
console.log("Fala comigo!!!! " + nomeUsuario + " Tamo junto!");

let opcao = "";
while (true) {
    mostrarMenu();
    opcao = prompt("Escolha uma opção: ");

    switch (opcao) {
        case "1":
            topVocalistas();
            break;
        case "2":
            curiosidadeHomemAranha();
            break;
        case "3":
            cadeAlexa();
            break;
        case "4":
            somaPares();
            break;
        case "5":
            recomendacaoDeJogo();
            break;
        case "6":
            deixarAvaliacao();
            break;    
        case "7":
            console.log("O papo foi bom, só não vá atrás da alexa, eu sou bem melhor!");
            process.exit(); 
            break;
    default:
            console.log("Não tá indo. Esolhe uma opção namoral né");
        }
    }
