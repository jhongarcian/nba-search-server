const express = require("express")
const mvps = require("./mocks/mvps.json")

const server = express()

server.get("/api/mvps", (req, res) => {
    res.json(mvps)
})

server.get("/mvp/:year", (req, res) => {
    const { year } = req.params;
    const targetYear = mvps.filter(mvp => mvp.year === year)
    res.json(targetYear)
})

server.listen(8080, ()=> {
    console.log("The server is running at PORT 8080")
})