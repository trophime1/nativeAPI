import express from 'express'
import connection from './src/db/connection'
const app = express()
import studentRouter from './src/routes/student'
app.use(express.json())
connection()
app.use(studentRouter)
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("The app is listening at port " + port)
})