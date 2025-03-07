const jwt = require('jsonwebtoken');
const Auth = (req,res,next)=>{
    const token = req.headers.authorization.split(" ")[1];
    if(token){
        try{
            jwt.verify(token,"secrete",(error,decoder)=>{
            if(decoder){
                req.body.AuthorID = decoder.AuthorID,
                req.body.Author = decoder.Author
                next()
            }
            else{
                res.send({"msg":"please login"});
            }
        })
        }
        catch(error){
            res.send({"error": error.message});
        }
    }
    else{
        res.send({"msg":"please do login"})
    }
    

}

module.exports={
    Auth
}