let computerPoints = 0;
let personPoints = 0;
let click = 0;
let linkChoice
let round = 0
let choice = ''
let finished = false

function play(personChoice) {

    choice = personChoice
    click++

    if (!personChoice) { //ao clicar em jogar novamente, reiniciar o jogo

        computerPoints = 0;
        personPoints = 0;
        click = 0;
        linkChoice
        round = 0
        choice = ''
        finished = false
        document.getElementById('person-points').innerHTML = `Pontuação: ${personPoints}`;
        document.getElementById('computer-points').innerHTML = `Pontuação: ${computerPoints}`;
        document.getElementById('who-won').innerHTML = ``;
        $(".buttonPlay").hide();

    } else { //ao receber escolha do jogador, jogar o jogo

        if (finished == true) {
            click++
            preventChoice()
        } else if (finished == false) {

            //impedir click duplo na escolha
            preventChoice()

            //mostrar opção selecionada
            document.getElementById("person-" + personChoice).classList.add("selected")

            //pegar escolha do computador na api
            $.ajax({
                type: 'GET',
                url: '/play',
                contentType: "application/json; charset=utf-8",
                success: function (result) {
                    const computerChoice = result

                    //mostrar opção selecionada
                    document.getElementById("computer-" + computerChoice).classList.add("selected")

                    //esconder opção selecionada depois de x tempo
                    setTimeout(() => {
                        document.getElementById("person-" + personChoice).classList.remove("selected")
                        document.getElementById("computer-" + computerChoice).classList.remove("selected")
                    }, 800);

                    //regras do jogo
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

                    round++
                    document.getElementById('who-won').innerHTML = `Partida ${round}`;

                    //mostrar pontuação depois de x tempo da escolha
                    setTimeout(() => {
                        document.getElementById('person-points').innerHTML = `Pontuação: ${personPoints}`;
                        document.getElementById('computer-points').innerHTML = `Pontuação: ${computerPoints}`;
                    }, 900);

                    //mostrar o vencedor (quem fizer 3 pontos primeiro)
                    setTimeout(() => {
                        if (personPoints === 3 || computerPoints === 3) {
                            finished = true

                            if (personPoints === 3 && computerPoints < 3) {
                                winnerShow()
                                document.getElementById('who-won').innerHTML = `Você Venceu!`;
                            } else if (computerPoints === 3 && personPoints < 3) {
                                winnerShow()
                                document.getElementById('who-won').innerHTML = `Computador Venceu!`;
                            } else if (computerPoints === 3 && personPoints === 3) {
                                winnerShow()
                                document.getElementById('who-won').innerHTML = `Empate! Jogue Novamente`;
                            }
                        }

                    }, 1000);

                    //resetar contator do click duplo
                    setTimeout(() => {
                        click = 0
                    }, 1050);



                }
            });


        }
    }

}

//prevenir duplo click
function preventChoice() {
    if (choice == 'pedra') {
        linkChoice = document.getElementById('#person-pedra');
    } else if (choice == 'papel') {
        linkChoice = document.getElementById('#person-papel');
    } else if (choice == 'tesoura') {
        linkChoice = document.getElementById('#person-tesoura');
    }

    if (click > 1) {
        !finished ? alert("Aguarde a rodada terminar para escolher novamente.") : alert("Este jogo terminou. Clique em jogar novamente para recomeçar o jogo.")
        linkChoice.addEventListener('click', function (event) {
            event.preventDefault();
        });
    }
}

//mostrar resultado
function winnerShow() {
    $(".winner").show();
    $(".buttonPlay").show();
}

//MELHORIAS FUTURAS
//Remover o hover do #person-choice && #computer-choice depois do finalizar o jogo
//Restaurar o hover do #person-choice && #computer-choice ao reiniciar