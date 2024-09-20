import app from './app.js'
import dotenv from 'dotenv'
import { connectDB } from './db.js'


dotenv.config()

connectDB()

const PORT = process.env.PORT ?? 3000

app.get('/',(req,res)=>{
    res.send('<h1>TODO PIOLA</h1>')
})


app.listen(PORT, ()=>{
    console.log(`Server listening on http://localhost:${PORT}`);
})