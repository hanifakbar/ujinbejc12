const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')



const PORT=4000


const app=express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

const {productRouters}=require('./router')
const {inventoryRouters}=require('./router')
const {storeRouters}=require('./router')

app.get('/',(req,res)=>{
    res.send('<h1>Ujian Backend jc 12 </h1>')
})

app.use('/product',productRouters)
app.use('/inventory',inventoryRouters)
app.use('/store',storeRouters)



app.listen(PORT,()=>console.log(`api jalan di port ${PORT}`))