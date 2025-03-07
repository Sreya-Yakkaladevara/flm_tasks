const bcrypt = require('bcrypt');
const Auth = (req,res,next)=>{
   const token = req.header.Authorization.split(" ")[1];

    try{
        jwt.verify(token, 'secrete', function(err, decoded) {
    
            if(decoded){
                next();
            }
            else{
                res.send({msg:"please login"});
            }

          });
    }
    catch(error){
        res.send({msg:"login"})
    }
      
};
module.exports={
    Auth
}