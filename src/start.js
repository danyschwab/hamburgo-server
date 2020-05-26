const express = require('express')
const morgan = require('morgan')
const data = require('./data.js')

const app = express();
app.use(express.json());
app.use(morgan('dev'));

const port = process.env.PORT || 3000;

app.get('/api/v1/', (req, res) => {
	var aux = data.getAll()
	res.send(aux);
});

app.listen(port, function() {console.log(`App listening on port ${port}!`)})
