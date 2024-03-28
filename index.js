const express =  require('express');
const app = express();

const Joi = require('joi')

const supercar = require('./class.js');

const SuperSportCar = supercar;

app.get("/api/informations" , (req , res) => {
    const cars = JSON.stringify(SuperSportCar);
    res.send(cars)
});

app.get("/api/informations/:id" , (req , res) =>{
    const id = req.params.id;
    if(isNaN(Number(id)) == false && Number(id) < SuperSportCar.length + 1){
        const sportCar = SuperSportCar.find(c => c.id == Number(id));
        res.send(sportCar);
        res.end();
    } 
    else if(isNaN(Number(id))){
        const superCar =  SuperSportCar.find(c => c.CompanyName == id)
        if(superCar == undefined) {
            res.status(404).send("Company name not found");
        }
        else {
        res.send(superCar)
        }
    }
    else res.status(404).send("page not found");
})

app.listen(3000 , () => console.log("listening on port 3000"))