const express = require('express')
const data = require('./data.js')

const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());

const hostname = process.env.HOST;
const port = process.env.PORT;

app.get('/api/v1/', (req, res) => {
	var aux = data.getAll()
	res.send(aux);
});

app.listen(port, hostname, function() {console.log(`App listening on port ${port}!`)})
