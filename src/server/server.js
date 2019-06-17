const express = require('express');
const mongoose = require('mongoose');
// const cors = require('cors');


const register = require('./routes/register');
const signin = require('./routes/signin');
const updateRank = require('./routes/updateRank');

mongoose.connect('mongodb://localhost:27017/smartbrain', { useNewUrlParser: true })
    .then(() => console.log('server is connected to database'))
    .catch(console.log);

const app = express();

// const corsOptions = {
//     origin: 'http://localhost:3000'
// };

// app.use(cors(corsOptions))

app.use(express.json());

app.use('/', register);

app.use('/api', signin);

app.use('/', updateRank);

const port = process.env.port || 5000;
app.listen(port, () => console.log(`server is running at port ${port}`));