    //Dependencies//
const express = require('express');

const budget = require("./models/budget.js");
const app = express();
const port = 3000;
const models = require('./models/budget.js')

        //index//
app.get("/buget", (req, res)=>{
    res.send(budgets)
});

        //Show//
app.get("/budget/:index", (req, res)=>{
    res.send(indexOfBudgets)
});

        //New//
app.get("/budget/:new", (req, res)=>{
    res.send(newBudgets)
});

        //Create//
app.post("/budget", (req, res)=>{
    res.send()
});

        //Web Server//
app.listen(port, ()=>{
    console.log("Express is listening on port ", port);
});