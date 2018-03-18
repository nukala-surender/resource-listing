const express = require('express')
const reservice = require('./ResourceService')
const app = express()
var route = express.Router();   //define our app using express https://devcenter.heroku.com/articles/mean-apps-restful-api
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))

app.listen(3000, function () {
  console.log('Grocery Web app service listening on port 3000!')
})

app.get('/test', function (req, res) {
  res.send('Welcome to Grocery Service APIs.')
});

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));


app.post('/api/addResource', function(req, res){

  let resourceOjb = new reservice(req, res)
  resourceOjb.getGrocery()

})
app.get('/api/getResource', function(req, res){
  let resourceOjb = new reservice(req, res)
  resourceOjb.addGrocery()

})
