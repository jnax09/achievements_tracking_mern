const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')

const achievements = require('./routes/api/achievements')

const app = express()

//middleware
app.use(bodyParser.json())

//Use routes
app.use('/api/achievements', achievements)

//DB Config
const db = require('./config/keys').mongoURI

//Connect to Mongo
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err))


//serve static assets if we are in production
if(process.env.NODE_ENV === 'production') {
    //Set static folder
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        //Load index.html file
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
}) 
