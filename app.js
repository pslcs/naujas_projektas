const express = require('express');
let fs = require('fs');

//pasiims duomenis is siunciamos datos (POST)
let bodyParser = require('body-parser')
//iskoduos atsiustus duomenis ir paruos juos objektais, kad patogu butu skaityti
let urlencodedParser = bodyParser.urlencoded({extended: false})

let app = express();

let stringas = '<br><div style="width: 100px; height: 100px; background-color: red"></div>';

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));

app.listen(4000, '127.0.0.1', function(){
    console.log("server is running at http://127.0.0.1:4000/")
});

app.get("/", function(req, res){
    res.render('index', {tekstas: stringas});
});
app.get("/contacts", function(req, res){
    res.render('contacts');
});

app.post("/contacts", urlencodedParser, (req, res) => {
    res.render('contact-success', {data: req.body});
    fs.writeFileSync(req.body.vardas + ".txt", JSON.stringify(req.body));
})

app.get("/about", function(req, res){
    res.render('about');
});
app.get("/profile/:name?", (req, res) => {
    let person;
    if (req.params.name == undefined){
        person = 'Povilas';
    }else{
        person = req.params.name;
    }
    res.render('profile', {person: person})
});

