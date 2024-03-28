const express =  require('express');
const app = express();

const supercar = require('./class.js');

const SuperSportCar = supercar;

app.get("/api/informations" , (req , res) => {
    const cars = JSON.stringify(SuperSportCar);
    res.send(cars)
});

app.get("/api/informations/:id" , (req , res) =>{
    const id = req.params.id;
    if(Number(id) != NaN && Number(id) < 11){
        const sportCar = SuperSportCar.find(c => c.id == Number(id));
        res.send(sportCar);
        res.end;
    };

    if(isNaN(Number(id))){
        const superCar =  SuperSportCar.find(c => c.CompanyName == id)
        console.log(superCar)
        res.send(superCar)
        res.end;
    }
    res.status(404).send("page not found");
})

app.listen(3000 , () => console.log("listening on port 3000"))