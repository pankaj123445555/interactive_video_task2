const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const {configure_video} = require('./controllers/addNameController');


 app.get('/addName/:name',configure_video);
 

 app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });












































































