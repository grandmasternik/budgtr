    //Dependencies//
const express = require('express');
const app = express();
const PORT = 3000;
const budget = require("./models/budget.js");


        //index//
app.get("/budgets", (req, res)=>{
    res.send("/budget.ejs");
});

        //Show//
app.get("/budgets/:index", (req, res)=>{
    res.send("index.ejs");
});

        //New//
app.get('/budgets/new', (req, res) => {
    res.render('new.ejs');
});
        
        
        //Create//
app.post("/budgets", (req, res)=>{
    res.send(req.body);
});

        //Web Server//
app.listen(PORT, ()=>{
    console.log(`Express is listening on port ${PORT}`);
});