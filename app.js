// require('dotenv').config();
const express = require('express');
const https = require('https');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.render('index')
});

app.get('/signup', (req, res) => {
  res.render('signup')
});

app.get('/contact', (req, res) => {
  res.render('contact')
});

app.post('/contact', (req, res) => {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  
})

app.listen(port, () => {
  console.log(`We're listening on port ${port}, baby cooda!`);
})