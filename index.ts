import express,{Express} from 'express';
// import {}
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }));


// dontenv configured
require("dotenv").config();
require('./config/db')
// routes included
import router  from "./routes/inventroyroutes";

// router 

app.use('/api',router)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})