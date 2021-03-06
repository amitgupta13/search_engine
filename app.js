const express = require('express');
const app = express();
const request = require('request');
const ejs = require('ejs');

app.set('view engine', 'ejs')

app.get('/', function(req, res){
    res.render('search');
});

app.get('/results', function(req, res){
    let query = req.query.search;
    let url = `http://www.omdbapi.com/?apikey=a71c6eac&s=${query}`
    request(url , function(error, response, body){
        if(!error && response.statusCode == 200){
            // const data = JSON.parse(body);
            // console.log(response);
                const data = JSON.parse(body);
                res.render('results',{data:data});
        }
    });
});

app.listen(3000, ()=>{
    console.log('server started on port 3000');
});