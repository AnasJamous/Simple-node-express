const express = require('express')
const app = express();

const getTime = () => {
    var date = new Date();
    var current_hour = date.getHours();
    var current_minute = date.getMinutes();
    var current_seconds = date.getSeconds();
    return current_hour+':'+current_minute+':'+current_seconds
}


app.get('/', (req, res) => res.send('batata'))

// GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage')
})

app.get('/test', (req,res) =>
    res.send({status:200, message:'Ok'}
))

app.get('/time', (req,res) => {
    
    res.send({status:200, message:('Time: ',getTime() )})
}) 

app.listen(3000, () => console.log('listening on port 3000!'))