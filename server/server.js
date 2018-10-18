const express = require('express');
const server = express();
const fath = require ( 'path')
const bodyParser = require('body-parser');
const pins = require('./feedGallery');
const cors = require('cors')

server.use(bodyParser.json());
server.use("/api/pins/", pins);
server.use(cors());


server.use(express.static(fath.join(__dirname,'../build')))
server.listen(8080);
