const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const userRoute = require('./routes/userRoute');
const itemRoute = require('./routes/itemRoute');

app.use(bodyParser.urlencoded({ extended : false}));
app.use(bodyParser.json());

app.use('/user', userRoute);
app.use('/item', itemRoute);


// app.get('/hello/second', function (req,res){
//   res.send('hello post')
// })

// app.put('/hello', function (req,res){
//   res.send('hello put');
// })

// app.delete('/hello', function (req,res){
//   res.send('hello delete');
// })

app.listen(5555, function(){
  console.log('Server is running')
});



