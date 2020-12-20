const express=require("express")
const router=express.Router()
const Books=require('../models/books.json')
const authentication=require('../middleware/Login')

router.get("/books",async (req,res)=>{
 res.send(Books)
})

router.get('/books/:booksId', async(req,res)=>{
    try{
    const bookId=await req.params.booksId
    res.send(bookId)}
    catch(err){
        res.send({message:error})
    }
})

 router.post('/books',authentication.authenticateToken), async(req,res)=>{
     const newBook = req.body.book
     Books.push(newBook)
     res.status(200).json('Added book successfully')
 }
router.delete('/books',authentication.authenticateToken), async(req,res)=>{
    res.send({message:'Book deleted!'})
}
module.exports=router;