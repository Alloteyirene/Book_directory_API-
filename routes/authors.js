const express=require("express")
const router=express.Router()
const Authors=require('../models/authors')
const authentication = require('../middleware/Login')

router.get("/authors",async (req,res)=>{
    try{
        res.send(Authors)
        console.log(req)
    }
    catch(err){
        res.send({message:error})
    }
 
})

router.get('/authors/:authorsId', async(req,res)=>{
    let authorId = Authors.find(author => author["authorId"] === request.params.authorId)
    if(author){
        response.status(200).send(authorId)
    } else{
        response.status(400).send('Error')
    }
})
router.get('/authors/authorsId/books', async(req,res)=>{
    let author = Authors.find(author => author["authorId"] === request.params.authorId)
    if(author){
        response.status(200).send(author)
    } else{
        response.status(400).send('Error')
    }
})

 router.post('/authors',authentication.authenticateToken), async(req,res)=>{
     const newAuthor = req.body.authors
     Authors.push(newAuthor)
     res.status(200).json('Added author successfully')
 }
router.delete('/authors/authorsID',authentication.authenticateToken), async(req,res)=>{
    try{
        const authorDeletedId=await req.params.authorsId
        res.send({message:'Author deleted!'})}
        catch(err){
            res.send({message:error})
        }
}
module.exports=router