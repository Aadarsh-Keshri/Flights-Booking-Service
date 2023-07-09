/**
 * to run "dev" in script of package.json, $'use npm run dev'
 */


const express=require('express');

const {ServerConfig/**,Logger*/}=require('./config');   //we don't need to specify whole path in index.js file
const apiRoutes = require('./routes');
const CRON = require('./utils/common/cron-jobs');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api',apiRoutes);//any url starting with /api will be redirected to routes folder
app.use('/bookingService/api',apiRoutes)

app.listen(ServerConfig.PORT,()=>{
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    //Logger.info("Successfully started the server",{msg:"something"});
    CRON();
});