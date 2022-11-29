const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.json({"hello": ["hello world", "hello2"]})
})

app.listen(4000, () => {console.log("Server is running on port 4000")})