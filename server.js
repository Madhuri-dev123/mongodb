var Product = require("./Product.model");
var Student = require("./Student.model")
var express = require("express");
var  bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({extended:false}));
 app.set("view engine","ejs");

app.get("/students",function(req,res){
    Student.find().then(function(data){
       res.send(data)
    }).catch(function(err){
        console.log(err)
    })
    
})

app.get("/addProduct",function(req,res){
    res.sendFile(__dirname+"/addProd.html")
})



app.post("/addProduct",function(req,res){
    var newProduct = new Product(req.body)
newProduct.save();
    console.log(newProduct)
     console.log(req.body)
     res.redirect("please wait")
})
app.get("/products",function(req,res){
    Product.find().then(function(data){
        res.render("productList",{products:data})
    })
})

app.delete("/products/:id",function(req,res){
    Product.deleteOne({_id:req.params.id})
    .then(function(p){
        res.send("delete succcess")
    })
    .catch(function(err){
        console.log(err)
        res.send("something is wrong")
    })
})
app.listen(3700,function(){console.log("running on 3700")});