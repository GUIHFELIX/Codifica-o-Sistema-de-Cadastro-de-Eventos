let hoje = new Date();
let idadeParticipante = 0;
let listaParticipante = ["Thiago", "Matheus", "Lucas", "Pamela"];
let qtdpdeParticipantes = 0;


let diaEvento = prompt("Digite o dia do evento (dd)")
let mesEvento = prompt("digite o mês do evento (mm)")
let anoEvento = prompt("Digite o ano do evento (aaaa)");
let dataEvento = new Date(anoEvento, mesEvento - 1, diaEvento);
let palestrante = "George";

 

if (dataEvento <= hoje) {
    console.log("Data Permitida");
    idadeParticipante = prompt("Informe sua idade")

    if (idadeParticipante >= 18) {
         console.log("Idade Permitida")

        console.log(listaParticipante);
        
        let nome = prompt("Digite seu Nome");
        listaParticipante.push(nome);
             
        console.log(listaParticipante);

       
        if (listaParticipante.length < 100) {
             console.log("Lista de participantes menor que 100, cadastro liberado.")
             listaParticipante.push(prompt("Informe o nome do participantes"));
             


        } else {
            console.log("Não permitir cadastro, lista cheia");
        }




    } else {
        console.log("idade nao permitida");
    }

} else {
        console.log("Data do evento é anterior a data Atual");
        console.log("O palestrante é o", palestrante);
        console.log("A lista de participantes possui", listaParticipante.length, "participantes:")
        for (let i = 0; i < listaParticipante.length; i++){
            console.log(listaParticipante[i]);
        }
    }

