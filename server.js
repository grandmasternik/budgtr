    //Dependencies//
    const express = require('express');
    const app = express();
    const PORT = 3000;
    const budget = require("./models/budget.js");
    const bodyParser = require(`body-parser`);

    // static config//
    app.use(express.urlencoded({
        extended: false
    }));
    app.use(express.static(__dirname + `/public`));

    //index//

    app.get("/", (req, res)=>{
        res.send("Budgtr App Welcomes You!");
    });        

    // Index
    app.get('/budget', (req, res) => {    
        res.render('index.ejs', { // tempalte, data object
          budget: budget,
      }) 
      });

    //New//
    app.get('/budget/new', (req, res) => {
        res.render('new.ejs');
    });

    //Create//
    app.post('/budget', (req, res) => {
        res.send(req.body);
    });

    //Show//
    app.get('/budget/:index', (req, res) => {
        res.send('index.ejs');
    });

    //Web Server//
    app.listen(PORT, () => {
        console.log(`Express is listening on port ${PORT}`);
    });