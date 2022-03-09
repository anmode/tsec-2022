const { application } = require("express")
require('dotenv').config()
const express = require("express")
const cors=require('cors')
const app = express();
require('./config/connection')
const corsOptions = {
    origin: '*',            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const userRouterAPI = require('./api/routes/UserApiRouter')
const dietAPIRouter=require('./api/routes/dietApiRouter');
const medicineAPIRouter=require('./api/routes/medicineApiRouter');

app.use('/api/user/', userRouterAPI);
app.use('/api/diet',dietAPIRouter);
app.use('/api/medicine',medicineAPIRouter);


app.listen(process.env.PORT, () => console.log('server running on port 5000'))