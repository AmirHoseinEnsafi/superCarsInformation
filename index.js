const express =  require('express');
const app = express();
app.use(express.json())
const Joi = require('joi')
const allSchema = require('./validation.js')
const supercar = require('./class.js');

const PUTschema = allSchema.put()
const schema = allSchema.post()

const SuperSportCar = supercar;

app.get("/api/informations" , (req , res) => {
    const cars = JSON.stringify(SuperSportCar , null , 2);
    res.send(cars)
});

app.get("/api/informations/:id" , (req , res) =>{ 
    const id = req.params.id;
    const contain = ["CompanyName" , "CarName" , "Engine" , "PerformanceCar" , "TopSpeed" , "Price" , "Acceleration"]
    if(isFinite(id) && Number(id) <= SuperSportCar.length){  //check if its number
        const sportCar = SuperSportCar.find(c => c.id == Number(id));
        res.send(sportCar);
        res.end();
    } 
    else if(isNaN(id) && !(contain.includes(id))){ //ccheck value of id is string and if its car name or company name 
        console.log(id)
        const superCar =  SuperSportCar.find(c => c.CompanyName == id);
        const sportCar =  SuperSportCar.find(c => c.CarName == id);
        if(superCar == undefined && sportCar == undefined) {
            res.status(404).send("Company name not found");
        }
        else if(!superCar){
            res.send(sportCar)
        }
        else{
            res.send(superCar)
        }
    }
    else if(contain.includes(id)){
        const aa = SuperSportCar.map(c=> c[id]);
        res.send(aa)
    }
    else res.status(404).send("Page Not Found");
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

app.put("/api/informations/:id" , (req, res) =>{
    const carId = req.params.id;
    const car = SuperSportCar.find(c => c.id == Number(carId))
    if(!car) res.status(404).send("Given Id Not Found")
    const {error} = PUTschema.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    if(req.body.CarName) {
        car.CarName = req.body.CarName;
    }
    if(req.body.CompanyName){
        car.CompanyName = req.body.CompanyName;
    }
    res.send(car)
})

app.delete("/api/informations/:id" , (req , res) => {
    const idCar = Number(req.params.id);
    if(isFinite(idCar) && SuperSportCar.length >= idCar){
        const superCar = SuperSportCar.splice(idCar - 1 , 1)
        res.send(JSON.stringify(superCar , null , 2) + SuperSportCar.length);
    }
    else {
        res.status(404).send("given id in not the find or it's not a number id")
    }
})


app.listen(3000 , () => console.log("listening on port 3000"))
