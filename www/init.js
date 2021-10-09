
//A CADA RODADA
//mostrar na tela a escolha do computador

//REGRAS
//quem ganhar 3 rodadas primeiro ganha

// Pedra ganha da tesoura (amassando-a ou quebrando-a).
// Tesoura ganha do papel (cortando-o).
// Papel ganha da pedra (embrulhando-a).

let computerPoints = 0;
let personPoints = 0;


function play(personChoice) {

    //const personChoice = personChose
    console.log("personChoice ", personChoice)

    $.ajax({
        type: 'GET',
        url: '/play',
        contentType: "application/json; charset=utf-8",
        success: function (result) {
            const computerChoice = result
            console.log("computerChoice ", computerChoice)

            if (personChoice == 'pedra') {

                if (computerChoice == 'pedra') {
                    computerPoints++
                    personPoints++
                } else if (computerChoice == 'papel') {
                    computerPoints++
                } else if (computerChoice == 'tesoura') {
                    personPoints++
                }

            } else if (personChoice == 'papel') {

                if (computerChoice == 'pedra') {
                    personPoints++
                } else if (computerChoice == 'papel') {
                    computerPoints++
                    personPoints++
                } else if (computerChoice == 'tesoura') {
                    computerPoints++
                }

            } else if (personChoice == 'tesoura') {

                if (computerChoice == 'pedra') {
                    computerPoints++
                } else if (computerChoice == 'papel') {
                    personPoints++
                } else if (computerChoice == 'tesoura') {
                    computerPoints++
                    personPoints++
                }
            }

            document.getElementById("person-" + personChoice).classList.add("selected")
            document.getElementById("computer-" + computerChoice).classList.add("selected")
            //até aqui ok

            //corrigir isso - mostrar pontuação
            $('#person-points').val(`Pontuação ${personPoints}`)
            $('#computer-points').val(`Pontuação ${computerPoints}`)

            //verificar quem consegue 3 pontos primeiro
            //mostrar o Vencedor
            //mostrar botão jogar Novamente
            //limpar as variáveis ao reiniciar o jogo

            console.log("computerPoints ", computerPoints)
            console.log("personPoints ", personPoints)
        }
    });
}


//play()


    //alert("personChoice" + personChoice)
