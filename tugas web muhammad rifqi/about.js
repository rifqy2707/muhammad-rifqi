conts express = require ('express')
conts app = express ()
conts port = 3000

app.get ( '/login', (req, res) => {
    res.sendFile("login.html",