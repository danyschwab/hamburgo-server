const express = require('express')
const data = require('./data.js')

const app = express();
app.use(express.json());

const hostname = '127.0.0.1';
const port = 3000;

app.get('/api/v1/', (req, res) => {
	var aux = data.getAll()
	res.send(aux);
});

app.listen(3000);
console.log("Listen on port 3000");

