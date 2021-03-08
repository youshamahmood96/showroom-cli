const initialQuestions = [
    {
        type:'number',
        name:'modelNumber',
        message:'Vehicle Model Number',
        validate:function(msg){
           try{
            if(!msg){
                throw new Error('Invalid Entry, Vehicle Model can only be a number')
            }
            return true
           }
           catch(err){
               console.log(`\n ${err}`);
               process.exit(1)
           }
        }
        
    },
    {
        type:'list',
        name:'vehicleType',
        choices:['Normal','Sports','Heavy'],
        message:'Select Vehicle Type'
    },
    {
        type:'number',
        name:'enginePower',
        message:'Engine Power',
        validate:function(msg){
            try{
             if(!msg){
                 throw new Error('Invalid Entry, Engine Power can only be a number')
             }
             return true
            }
            catch(err){
                console.log(`\n ${err}`);
                process.exit(1)
            }
         }
    },
    {
        type:'number',
        name:'tireSize',
        message:'Input Tier Size',
        validate:function(msg){
            try{
             if(!msg){
                 throw new Error('Invalid Entry, Tire Size can only be a number')
             }
             return true
            }
            catch(err){
                console.log(`\n ${err}`);
                process.exit(1)
            }
         }
    }
]
const normalVehicleQuestions = [
    {
        type:'list',
        name:'engineType',
        choices:['Oil','Gas','Diesel'],
        message:'Engine Type'  
    }
]
const sportsVehicleQuestions = [
    {
        type:'list',
        name:'engineType',
        choices:['Oil'],
        message:'Engine Type'  
    },
    {
        type:'list',
        name:'turbo',
        choices:['Yes','No'],
        message:'Turbo Installed?'  
    }
]
const heavyVehicleQuestions = [
    {
        type:'list',
        name:'engineType',
        choices:['Diesel'],
        message:'Engine Type'  
    },
    {
        type:'number',
        name:'weight',
        message:'Total Weight',
        validate:function(msg){
            try{
             if(!msg){
                 throw new Error('Invalid Entry, Weight can only be a number')
             }
             return true
            }
            catch(err){
                console.log(`\n ${err}`);
                process.exit(1)
            }
         }
    }
]


module.exports = {
    initialQuestions,
    normalVehicleQuestions,
    sportsVehicleQuestions,
    heavyVehicleQuestions
}