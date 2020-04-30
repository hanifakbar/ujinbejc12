const mysql=require('mysql')
const db=mysql.createConnection({
    host:'localhost',
    user:'hankur',
    password:'Hanifcaem21',//dari workbench
    database:'konoha',
    port:'3306'
})

db.connect((err)=>{
    if(err){
        console.log(err)
    }
    console.log('connect sudah')
})

module.exports=db