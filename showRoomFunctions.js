const ShowRoom = require('./model/showroom')
const showRoomNormal = ()=>{
    ShowRoom.find()
    .then(res=>{
        if(res.length===0){
            ShowRoom.create({name:'Cars'})
        }
    })
    ShowRoom.findOneAndUpdate({name:'Cars'}, { $inc: { total: 1,normal:1 } }, {new: true },function(err,res){
        if(err){
            console.log(err)
            
        }
        else{
            console.log(res)
            
        }
    })
}

const showRoomSports = ()=>{
    ShowRoom.find()
    .then(res=>{
        if(res.length===0){
            ShowRoom.create({name:'Cars'})
        }
        ShowRoom.findOneAndUpdate({name:'Cars'}, { $inc: { total: 1,sports:1,visitor:20 } }, {new: true },function(err,res){
            if(err){
                console.log(err)
               
            }
            else{
                console.log(res)
               
            }
        })
        
    })
}

const showRoomHeavy = ()=>{
    ShowRoom.find()
    .then(res=>{
        if(res.length===0){
            ShowRoom.create({name:'Cars'})
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
module.exports = {showRoomNormal,showRoomSports,showRoomHeavy}