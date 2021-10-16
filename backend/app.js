const express = require('express');
const app = express();
const ProductData = require('./src/model/Productdata');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
username='admin';
password='1234';

mongoose.connect('mongodb://localhost:27017/ProductsDb', {
	useNewUrlParser:true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify:false
});

const db = mongoose.connection;
  db.on("error", console.error.bind(console,"connection error:"));
  db.once("open", ()=> {
	console.log("database connected");
})

// ===================middle wares ===============================
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

function verifyToken(req, res, next) {
  if(!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') {
    return res.status(401).send('Unauthorized request')    
  }
  let payload = jwt.verify(token, 'secretKey')
  if(!payload) {
    return res.status(401).send('Unauthorized request')    
  }
  req.userId = payload.subject
  next()
}

app.get('/',(req,res)=>{
    res.send("hi welcome")
});

app.get('/products',(req,res)=>{
    ProductData.find()
                .then(function(products){
                    res.send(products);
                });
});

app.post('/products',verifyToken,function(req,res){
    console.log(req.body);
    var product = {       
        productId : req.body.product.productId,
        productName : req.body.product.productName,
        productCode : req.body.product.productCode,
        releaseDate : req.body.product.releaseDate,
        description : req.body.product.description,
        price : req.body.product.price,
        starRating : req.body.product.starRating,
        imageUrl : req.body.product.imageUrl,
   }       
   var product4save = new ProductData(product);
   product4save.save();
});

app.post('/login', (req,res)=>{
    let userData = req.body;
    console.log(userData);
    if (username !== userData.uname) {
        res.status(401).send('Invalid Username')
      } else 
      if ( password !== userData.password) {
        res.status(401).send('Invalid Password')
      } else {
        let payload = {subject: username+password}
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({token})
      } 
})

app.listen(3000, function(){
    console.log('listening to port 3000 hooooooooooo');
});
