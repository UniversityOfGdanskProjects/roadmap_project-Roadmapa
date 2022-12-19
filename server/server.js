const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.json([
        {id: '1', "text": 'Hello world!', "details": 'Powstanie tu kiedyś piękna roadmapa!'}
    ])
})

app.listen(4000, () => {console.log("Server is running on port 4000")})