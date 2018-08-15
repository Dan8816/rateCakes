const express = require("express");
const bodyParser = require("body-parser");
const PORT = 5000;
const path = require('path');
const app = express();

app.use(bodyParser.json());

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.use(express.static( __dirname + '/public/dist/public' ));

app.listen(PORT, ()=>{
    console.log(`Listening on PORT: ${PORT}!`);
})