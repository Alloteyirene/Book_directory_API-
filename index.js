const express=require("express")
const app=express();
const routesBooks=require('./routes/books')
const routesAuthor=require('./routes/authors');
const routesAdmin = require("./routes/admin");
const port=7000

app.use(express.json())
app.use(routesAuthor)
app.use(routesBooks)
app.use(routesAdmin)




app.listen(port,()=>{
    console.log("App is listening")
})