exports.add=(req,res)=>{
   const {num1,num2}=req.body
   if(typeof num1=='string' || typeof num2=="string"){
     return  res.json({
           message:"invalid syntex"
       })
   }

   const sum=num1+num2;
   if(sum>1000000){
    return  res.json({
        message:"Overflow"
    })
   }
   return  res.json({
    status:"success",   
    message:"sum of two numbers",
    sum
})
}
exports.sub=(req,res)=>{
    const {num1,num2}=req.body
    if(typeof num1=='string' || typeof num2=="string"){
      return  res.json({
            message:"invalid syntex"
        })
    }
 
    const sum=num1-num2;
    if(sum>1000000){
     return  res.json({
         message:"Overflow"
     }) 
    } else if(sum<-1000000){
        return  res.json({
            message:"Underflow"
        })
    }
    return  res.json({
     status:"success",   
     message:" the difference of given two number",
     sum
 })
 }
 exports.multiply=(req,res)=>{
    const {num1,num2}=req.body
    if(typeof num1=='string' || typeof num2=="string"){
      return  res.json({
            message:"invalid syntex"
        })
    }
 
    const sum=num1*num2;
    if(sum>1000000){
     return  res.json({
         message:"Overflow"
     })
    }
    return  res.json({
     status:"success",   
     message:"Multiply of two numbers",
     sum
 })
 }
 exports.divide=(req,res)=>{
    const {num1,num2}=req.body
    if(typeof num1=='string' || typeof num2=="string"){
      return  res.json({
            message:"invalid syntex"
        })
    }
    if(num2===0){
        return  res.json({
            type:"error",
            message:"can not divide by zero"
        })
    }
 
    const sum=num1/num2;
    if(sum>1000000){
     return  res.json({
         message:"Overflow"
     })
    }
    return  res.json({
     status:"success",   
     message:"divison of two numbers",
     sum
 })
 }
   