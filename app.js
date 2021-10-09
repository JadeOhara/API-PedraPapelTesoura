const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

app.use(express.static('www')) 

const port = 3000

const jogoPPT =  {
        1: "pedra",
        2: "papel",
        3: "tesoura"
}

let computerChoice = ''

app.get('/play', (req, res) => {
    const random = Math.floor(Math.random() * 3 + 1);
    computerChoice = jogoPPT[random]
    res.send(computerChoice)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})