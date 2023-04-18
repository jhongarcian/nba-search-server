const express = require("express")
const cors = require("cors");
const mvps = require("./mocks/mvps.json")
const PORT = 8080

const corsOptions = {
    origin: 'http://127.0.0.1:5500',
    credentials: true
}

const server = express()

server.use(cors(corsOptions))

server.get("/api/mvps", (req, res) => {
    res.json(mvps)
})

server.get("/mvp/:year", (req, res) => {
    const { year } = req.params;
    const targetYear = mvps.filter(mvp => mvp.year === year)
    res.json(targetYear)
})

server.get("/mvp/player/:player", (req, res) => {
    const { player } = req.params;
    const targetplayer = mvps.filter(mvp => mvp.player.toLowerCase().includes(player))
    res.json(targetplayer)
})

server.listen(PORT, ()=> {
    console.log(`The server is running at PORT ${PORT}`)
})