const express = require("express");
const https=require("https");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){


    res.sendFile(__dirname+"/try3.html");
  })



app.post("/",function(req,res){
  // const query=req.body.cityName;
  const url="http://127.0.0.1:3000/search_course?title=full stack wev developer";
    https.get(url,function(response){
      // console.log(response.statusCode);
      response.on("data",function(data){
        const datas=JSON.parse(data);
        const temp=datas.main.temp;
        const desc=datas.weather[0].description;
        const icon=datas.weather[0].icon;
        const iconUrl="http://openweathermap.org/img/wn/"+icon+"@2x.png"
        res.write("<h1>the temperature in"+query+" is "+temp+" degree celsius</h1>");
        res.write("<p>The weather is currently "+desc+"</p>");
        res.write("<img src="+iconUrl+">")
        res.send();

        })
      })

})


app.listen(3000,function(){
  console.log("server is running on 3000");
})
