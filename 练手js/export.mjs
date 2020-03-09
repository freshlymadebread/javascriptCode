 var m = function (){
    console.log('this is export')
 }
 setTimeout(_=>{
    m = function (){
        console.log('this is export222222222222')
     }
 },5000)
 export {m}