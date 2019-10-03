const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const path = require('path');
 
const app = express();

mongoose.connect('mongodb://omnistack:omnistack@omnistack-shard-00-00-pf1kr.mongodb.net:27017,omnistack-shard-00-01-pf1kr.mongodb.net:27017,omnistack-shard-00-02-pf1kr.mongodb.net:27017/semana09?ssl=true&replicaSet=OmniStack-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);