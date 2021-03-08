//Initialize Mongoose
const mongoose = require('mongoose')
//Initialize Dotenv
require('dotenv').config()
//To avoid a warning.Took a day to solve this.
mongoose.Promise = global.Promise
//Connect to database.I know this is not the best practise to include the uri string directly to the code, but this is a localhost connection so it wont matter that much.
mongoose.connect('mongodb://localhost:27017/cli',{
    useUnifiedTopology:true,
    useNewUrlParser: true,
    useFindAndModify: false
})

//The below functions perform the biggest chunk of work of the program.These could be modularized into separate files. But that would leave the index file empty, as there are no other functionalities of this program yet.So all the functions are included here.

//Showroom Functions
const ShowRoom = require('./model/showroom')
//Add a normal vehicle to the showroom
const showRoomNormal = ()=>{
    ShowRoom.find()
    .then(res=>{
        if(res.length===0){
            ShowRoom.create({name:'Cars',total:1,normal:1})
        }
        ShowRoom.findOneAndUpdate({name:'Cars'}, { $inc: { total: 1,normal:1 } }, {new: true },function(err,res){
            if(err){
                console.log(err)
                
            }
            else{
                console.log(res)
                
            }
        })
    })
}
//Add a sports vehicle to the showroom
const showRoomSports = ()=>{
    ShowRoom.find()
    .then(res=>{
        if(res.length===0){
            ShowRoom.create({name:'Cars',total: 1,sports:1,visitors:50})
        }
        ShowRoom.findOneAndUpdate({name:'Cars'}, { $inc: { total: 1,sports:1,visitors:20 } }, {new: true },function(err,res){
            if(err){
                console.log(err)
               
            }
            else{
                console.log(res)
               
            }
        })
    })
  
}
//Add a heavy vehicle to the showroom
const showRoomHeavy = ()=>{
    ShowRoom.find()
    .then(res=>{
        if(res.length===0){
            ShowRoom.create({name:'Cars',total: 1,heavy:1})
        }
        ShowRoom.findOneAndUpdate({name:'Cars'}, { $inc: { total: 1,heavy:1 } }, {new: true },function(err,res){
            if(err){
                console.log(err)
           
            }
            else{
                console.log(res)
                
            }
        })
    })
    
}
//Delete a vehicle from the showroom
const showRoomDelete = (modelNumber)=>{
    Car.find({modelNumber})
    .then(car=>{
        console.log(car[0].vehicleType);
        if(car[0].vehicleType ==='Sports'){
            ShowRoom.findOneAndUpdate({name:'Cars'}, { $inc: { total: -1,sports:-1,visitors:-20 } }, {new: true },function(err,res){
                if(err){
                    console.log(err)
               
                }
                else{
                    console.log(res)
                    
                }
            })
        }
        else if(car[0].vehicleType ==='Normal'){
            ShowRoom.findOneAndUpdate({name:'Cars'}, { $inc: { total: -1,normal:-1 } }, {new: true },function(err,res){
                if(err){
                    console.log(err)
               
                }
                else{
                    console.log(res)
                    
                }
            })
        }
        else{
            ShowRoom.findOneAndUpdate({name:'Cars'}, { $inc: { total: -1,heavy:-1 } }, {new: true },function(err,res){
                if(err){
                    console.log(err)
               
                }
                else{
                    console.log(res)
                    
                }
            })
        }
    })
}

//Car Functions
const Car = require('./model/car')
//add car
const addCar = async(car)=>{
    const res = await Car.create(car)
    console.log(res);
    process.exit(0)

} 
//delete a car
const deleteCar = async(modelNumber)=>{
    const car = await Car.deleteOne({modelNumber})
    console.log(car);
    console.log('Car removed');
    process.exit(0)
 
}
//list all cars
const listCars = async()=>{
    const cars = await Car.find()
    console.log(cars);
    console.info(`${cars.length} Car(s) In the showroom`)
    process.exit(0)
 
}
//List all cars with the number of visitors
const listAllCars = async()=>{
   const cars = await Car.find()
   const showRoom = await ShowRoom.find()
   cars.push({visitors:showRoom[0].visitors})
   console.log(cars);
   process.exit(0) 
}

module.exports = {addCar,deleteCar,listCars,showRoomNormal,showRoomSports,showRoomHeavy,showRoomDelete,listAllCars}
