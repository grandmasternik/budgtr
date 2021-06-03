    // Variables//
const express = require('express');

const budget = require("./models/budget.js");

const app = express();

const port = 3000;
        //ROUTES//

app.get("/bugets", (req, res)=>{
    res.send(budgets)
});

        //Show//

app.get("/budgets/:index", (req, res)=>{
    res.send(indexOfBudgets)
});

        //New//

app.get("/bugets/:new", (req, res)=>{
    res.send(newBudgets)
});

        //Create//

app.post("/budgets", (req, res)=>{
    res.send()
});

        //Web Server//
app.listen(port, ()=>{
    console.log("Express is listening on port ", port);
});
