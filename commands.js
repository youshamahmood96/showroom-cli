#!/usr/bin/env node
//Initialize Commander
const program = require('commander')
//Initialize inquirer
const {prompt} = require('inquirer')
//Import the car and showroom functions
const {addCar,deleteCar,listCars,showRoomNormal,showRoomSports,showRoomHeavy,showRoomDelete,listAllCars} = require('./index')
//Import the questions
const {initialQuestions,normalVehicleQuestions,sportsVehicleQuestions,heavyVehicleQuestions} = require('./questions')



//Command line inputs to add a car
program
.command('add')
.alias('a')
.description('Add a vehicle')
.action(()=>{
    prompt(initialQuestions).then(initialAnswers=>{
    if(initialAnswers.vehicleType == 'Normal'){
        prompt(normalVehicleQuestions).then(normalVehicleAnswers=>{
            addCar({...initialAnswers,...normalVehicleAnswers})
            showRoomNormal()
        })
    }
    else if(initialAnswers.vehicleType == 'Sports'){
        prompt(sportsVehicleQuestions).then(sportsVehicleAnswers=>{
            addCar({...initialAnswers,...sportsVehicleAnswers})
            showRoomSports()
        })
    }
    else{
        prompt(heavyVehicleQuestions).then(heavyVehicleAnswers=>{
            addCar({...initialAnswers,...heavyVehicleAnswers})
            showRoomHeavy()
        })
    }
    })
})

//Commnand line inputs to delete a car
program
.command('delete <modelNumber>')
.alias('d')
.description('Delete a car')
.action(modelNumber=>{
    showRoomDelete(modelNumber)
    deleteCar(modelNumber)
})
//Command line inputs to list the cars 
program
.command('list')
.alias('ls')
.description('List all carrs')
.action(listCars) 
//Command line inputs to list all the cars along with the number of visitors  
program
.command('list-all')
.alias('lsa')
.description('List all the cars with number of visitors in the showroom')
.action(listAllCars)
program.parse(process.argv)



