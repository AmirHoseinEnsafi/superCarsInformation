const express =  require('express');
const app = express();
app.use(express.json())
const Joi = require('joi')
const schema = require('./validation.js')
const supercar = require('./class.js');

const SuperSportCar = supercar;

app.get("/api/informations" , (req , res) => {
    const cars = JSON.stringify(SuperSportCar);
    res.send(cars)
});

app.get("/api/informations/:id" , (req , res) =>{
    const id = req.params.id;
    console.log(id)
    const contain = ["CompanyName" , "CarName" , "Engine" , "PerformanceCar" , "TopSpeed" , "Price" , "Acceleration"]
    if(isNaN(Number(id)) == false && Number(id) < SuperSportCar.length + 1){
        const sportCar = SuperSportCar.find(c => c.id == Number(id));
        res.send(sportCar);
        res.end();
    } 
    else if(isNaN(Number(id)) && !(contain.includes(id))){
        const superCar =  SuperSportCar.find(c => c.CompanyName == id)
        if(superCar == undefined) {
            res.status(404).send("Company name not found");
        }
        else {
        res.send(superCar)
        }
    }
    else if(contain.includes(id)){
        const parametr = id
        const aa = SuperSportCar.map(c=> c[parametr]);
        res.send(aa)
    }
    else res.status(404).send("page not found");
});

app.post("/api/informations" , (req , res) =>{
    const {error ,value} = schema.validate(req.body);
    if(error)res.status(400).send(error.details[0].message);
    else {
        const car = new Object()
        car.id = SuperSportCar.length +1;
        Object.assign(car , value)
        SuperSportCar.push(car);
        res.send(car)
    }
})





app.listen(3000 , () => console.log("listening on port 3000"))
