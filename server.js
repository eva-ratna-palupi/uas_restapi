const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var morgan = require('morgan')

//parse aplication/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

//panggil routes
var routes = require('./routes')
routes(app);

//daftar menu routes dari index
app.use('/auth', require('./middleware'));

app.listen(3002, () => {
    console.log(`Server started on port 3002`);
}); 