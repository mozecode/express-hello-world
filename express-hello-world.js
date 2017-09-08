const express = require('express')
const app = express();
let date = new Date();
let newDate = date.toISOString();
var port = process.env.PORT || 8080;//set environment variable for port specified on command line

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/time', (req, res)=>{
    res.send(`The date and time are: ${newDate}`);
});

console.log("port specified?", port);
app.listen(port, ()=>{
    console.log(`listening on port ${port}.`)
});