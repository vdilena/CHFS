let express = require("express")
let bodyParser = require("body-parser")
let fs = require("fs")

let app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
  });

app.use("/css",express.static('estilos'))

//app.use("views", "./views")

app.listen("4000")

app.get("/",  (req, res) => {
    res.send("Hola clase 3335!")
})

app.get("/cards", (req, res) => {

    fs.readFile("db.json", (error, data) => {

        let dataRetrieved = JSON.parse(data)
        res.send(dataRetrieved.cards)
    })
})

app.get("/cards/:cardId", (req, res) => {

    fs.readFile("db.json", (error, data) => {

        let datosRecuperados = JSON.parse(data)
        let cards = datosRecuperados.cards.filter(card => card.id == req.params.cardId)

        res.send(cards)
    })
})

app.get("/cardsQS", (req, res) => {

    
    fs.readFile("db.json", (error, data) => {

        let title = req.query.title
        let description = req.query.description

        let cards = JSON.parse(data).cards.filter(card => (title ? card.title == title : true) && (description ? card.description == description : true))

        res.send(cards)
    })

})

app.post("/cards", (req, res) => {

    fs.readFile("db.json", (error, data) => {

        let id = req.body.id
        let title = req.body.title
        let description = req.body.description

        let cards = JSON.parse(data).cards

        let objeto = { cards: [...cards,{id: id, title: title, description: description} ] }

        fs.writeFile("db.json", JSON.stringify(objeto))

        res.send(id.toString())
    })
})

app.put("/cards/:carId", (req, res) => {

    res.send(`recibi: ${req.body.title} de Id: ${req.params.carId}`)
})

app.delete("/cards/:carId", (req, res) => {

    res.send(`recibi Id: ${req.params.carId}`)
})