const express=require("express")
const path=require("path")

const routes=express.Router()

routes.use(express.urlencoded({ extended: true }));

const Filepath=path.join(__dirname,'..','views','shop.html')
routes.get('/home',(req,res,next)=>{

    res.sendFile(Filepath, (err) => {
        if (err) {
            console.error(err);
            res.status(err.status || 500).send('Error sending file.');
        } else {
            console.log('File sent successfully');
        }
    });
    
})
routes.post('/product',(req,res,next)=>{
    
    console.log(req.body)
    res.redirect('/shop')
})
module.exports=routes