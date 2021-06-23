const express = require('express');
const axios = require('axios');
const redis = require('redis');
const responseTime = require('response-time');
const { promisify } = require('util');


const app = express(); 
app.use(responseTime());

const client = redis.createClient({
    host: '192.168.1.99',
    port: 6379,
})
const GET_ASYNC = promisify(client.get).bind(client);
const SET_ASYNC = promisify(client.set).bind(client);

// sans Redis
app.get('/rockets', async (req, res) => {
    try {
        const response = await axios.get('https://api.spacexdata.com/v3/rockets')
        res.send(response.data)
    }catch (err) {
        res.send(err.message)
    }
})

//Avec Redis
app.get('/rockets-redis', async (req, res, next) => {
    try {
        const reply = await GET_ASYNC('rockets')
        if (reply) {
            console.log('Using cached data')
            res.send(JSON.parse(reply))
            return
        }
        const response = await axios.get('https://api.spacexdata.com/v4/rockets')
        const saveResult = await SET_ASYNC(
            'rockets',
            JSON.stringify(response.data),
            'EX',
             15)
        console.log('New data Cached', saveResult)
        res.send(response.data)
    }catch (err) {
        res.send(err.message)
    }
});



app.listen(3000, () => console.log('🚀 on port 3000'));

