const express = require('express');
const app = express();
const port = 8000;
app.listen(port, ()=> {
    console.log('Server is listening on port 8000');
})

app.get('/hello_world', (req, res)=>{
    res.send('Hello world');
})