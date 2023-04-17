const express = require("express")
const mvps = require("./mocks/mvps.json")
const PORT = 8080

const server = express()

server.get("/api/mvps", (req, res) => {
    res.json(mvps)
})

server.get("/mvp/:year", (req, res) => {
    const { year } = req.params;
    const targetYear = mvps.filter(mvp => mvp.year === year)
    res.json(targetYear)
})

server.listen(PORT, ()=> {
    console.log(`The server is running at PORT ${PORT}`)
})