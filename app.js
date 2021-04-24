const cors = require('cors'),
jwt = require('jsonwebtoken'),
express = require('express');

const app = express(); // creation api

app.use(cors({
    origin:true,
    credentials:true,
}));

app.use((req,res, next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,DELETE');
    next()
})

const bdd=[
    {email:"toto@toto.fr",password:"zero",id:1,fullname:"toto"},
    {email:"tata@tata.ta",password:"tata+tata",id:2,fu2lname:"tata"}
]


app.use(express.urlencoded({extended:false}))// active bodyParser

//Middleware (check des donnee)

const checkEmailAndPassword = (req,res, next)=>{
    try{
        const{email,password} = req.body

        //const regex = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g);
        if(email===undefined )
            return res.status(401).json({error:true,message: 'Error email'})
        else if(password===undefined ||password.lenght < 4)
            return res.status(401).json({error:true,message: 'Error password'})
        else
            next()
    }catch(err){
        return res.status(500).json({error:true,message: 'Error server'})
    }
}
const checkToken = (req,res, next)=>{
    try{
        if(!req.headers.authorization){
            return res.status(403).json({error:'no credential sent'})
        }
        next()
    }catch(err){
        return res.status(500).json({error:true,message: 'Error server'})
    }
}


app.post('/login', checkEmailAndPassword,(req,res)=>{
    const {email,password}= req.body
    bdd.forEach((user)=>{
        if(user.email ===email&&user.password===password){
            delete user.password
            user.token=jwt.sign({id:user.id},'keyprive');
            delete user.id
            return res.status(200).json(user)
        }
    })
    return res.status(401).json({error:true,message: 'Error email/password'})
})

app.get('/profil',checkToken,(req,res)=>{

})

app.listen(5050)