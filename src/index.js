const express = require('express');
const { connect } = require('./config/db');
const router = require('./router')
const app = express();
const PORT = process.env.PORT || 5501;

app.use(express.json());

app.use('/api', router);

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`)
    await connect();
});