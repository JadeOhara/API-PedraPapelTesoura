
//A CADA RODADA
//mostrar na tela a escolha do computador
//mostrar resultado de cada rodada

//NA TERCEIRA RODADA
//mostrar vencedor da partida

//REGRAS
// Pedra ganha da tesoura (amassando-a ou quebrando-a).
// Tesoura ganha do papel (cortando-o).
// Papel ganha da pedra (embrulhando-a).

function play(personChoice) {
    //$('.results').html('')
    const rounds = 3;

    alert(personChoice)

    // $.ajax({
    //     type: "GET",
    //     url: "/play", 
    //     contentType: "application/json; charset=utf-8",
    //     success: function (res) {
    //         console.log(res)
    //         for (const result of res) { //cria o item no html lista de anotações
    //             $('.results').append(`
    //             <div class="result">
    //                 <h2>${note.title}</h2>
    //                 <p>${note.description}</p>
    //             </div>
    //             `)     
    //         }
    //      },
    //      error: function (err) {
    //          console.log(err) //vê a resposta que vem do backend
    //         alert(err.responseJSON.message) //define a mensagem com o erro  que vem do backend
    //      }
    //   });
}

//play()