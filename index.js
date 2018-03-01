const express = require('express')
const app = express();

const getTime = () => {
    var date = new Date();
    var current_hour = date.getHours();
    var current_minute = date.getMinutes();
    var current_seconds = date.getSeconds();
    return current_hour+':'+current_minute+':'+current_seconds
}

const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]

// The Home page :
app.get('/', (req, res) => res.send('batata'))


// The test page : 
app.get('/test', (req,res) =>
    res.send({status:200, message:'Ok'}
))

// The time page :
app.get('/time', (req,res) => {
    res.send({status:200, message:('Time: ',getTime())})
}) 

// The Hello page :
app.get('/hello/:id', (req,res) =>{
    const id = req.params.id;
    res.send({status : 200 , message: "hello"+" "+id})
})


// The search page
app.get('/search?:s',(req,res)=>{
    let url = req.url
    let input = url.split('/search')
    s = input[1]
    console.log(input,s)

    if(s != ''){
        res.write(`
        {status:200, message:"ok", ${s} }

         ok  ` + s + `
    `)
        res.send()
    }else{
        res.write(`
        {status:500,error:true,message:"you have to provide a search"}  
        You have to provide a search
    `)
        res.send()
    }
})

// Movies pages:
app.get('/movies/create', (req,res)=>{
    res.send({status:200, message:''})
})
app.get('/movies/read', (req,res)=>{
    let titles = [];
    for (let i =0 ; i < movies.length ; i++){
        titles[i] = movies[i].title;
    }
    res.send({status:200 , data:titles})
})
app.get('/movies/update', (req,res)=>{
    res.send({status:200, message:'This is movies page'})
})
app.get('/movies/delete', (req,res)=>{
    res.send({status:200, message:'This is movies page'})
})


app.listen(3000, () => console.log('listening on port 3000!'))