const express = require("express");
const app = express();
const cors = require("cors");
const fs = require('fs');


app.use(cors());

app.get('/list',async (req, res) => {
        
     fs.readFile('./data.json', (err, data) => {
        if (err) 
        {
            res.send(null);
        }else {
            let {results} = JSON.parse(data);
             res.send(results);
        }
    });
});

app.listen(5000, () => {
    console.log('Server runnig!')
});

