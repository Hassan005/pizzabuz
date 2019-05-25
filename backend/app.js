var express=require('express');

var app=express();
app.use((req,res,next)=>
{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type,Accept");
    res.setHeader("Access-Control-Allow-Methods",
    "GET,POST,PATCH,DLETE,OPTIONS");
next();
})
app.use('/api/post',(req,res,next)=>
{
const posts=
[{
    id:'kjskdj323',
    title:'Hassan Asghar',
    contents:'This is my new post'
},{
    id:'kjskdj423',
    title:'Hussain Asghar',
    contents:'This is my second post'
}
]
res.status(200).json({
    message:"success",
    posts:posts
})
})
module.exports = app;