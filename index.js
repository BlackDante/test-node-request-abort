const express = require('express')
const app = express()

let api = 0;

app.use(express.static('static'))

app.get('/api', (req, res) => {
    let value = api++;

    setTimeout(() => {
        res.send(value + '')        
    }, 10)
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})