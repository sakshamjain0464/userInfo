const express = require('express');
const app = express();
const findUser = require('./data');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/user', (req, res) => {
    const data = findUser(parseInt(req.query.id));
    if(data === undefined){
        res.send('User not found');
    }
    else{
        res.render('user', {data: data});
    }
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})