const express = require('express')
const morgan = require('morgan')
const snacks = require('./snacks.js')
const ingredients = require('./ingredient.js')

const app = express();
app.use(express.json());
app.use(morgan('dev'));

const port = process.env.PORT || 3000;

app.get('/api/v1/snack/:snackId', (req, res) => {
	var id = req.params.snackId;
	if (id != null) {
		res.send(snacks.getById(id));
	} else {
		res.send(snacks.getAll());
	}
});

app.get('/api/v1/snack/:snackId/ingredients', (req, res) => {
	var id = req.params.snackId;
	if (id != null) {
		res.send(snacks.getIngredientsById(id));
	} else {
		res.send("Error");
	}
});

app.get('/api/v1/snack/', (req, res) => {
	var aux = snacks.getAll()
	res.send(aux);
});

app.get('/api/v1/ingredient/:ingredientId', (req, res) => {
	var id = req.params.ingredientId;
	if (id != null) {
		res.send(ingredients.getById(id));
	} else {
		res.send(ingredients.getAll());
	}
});

app.get('/api/v1/ingredient/', (req, res) => {
	var aux = ingredients.getAll()
	res.send(aux);
});

app.listen(port, function () { console.log(`App listening on port ${port}!`) })
