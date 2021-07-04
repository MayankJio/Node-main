const express = require('express')
const indexRouter = require('./routes/index')
const path = require('path')
const hbs = require('hbs')
const viewsPath = path.join(__dirname, './templates/views')


const app = express()
const port = process.env.PORT || 3000

app.use("/",indexRouter)

app.set('view engine', 'hbs')
app.set('views', viewsPath)



app.get('', (req, res) => {
    res.render('index')

})


/
app.listen(port, () => {
    console.log("Server is up and running on port: " + port)
})