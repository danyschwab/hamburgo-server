
const ingredient = require('./ingredient.js');
const hambuguer = {
    id: 1,
    name: "Hambuguer",
    image: "",
    ingredientList: [
        ingredient.carne,
        ingredient.tomate,
        ingredient.alface
    ]
}

var xburgao = {
    id: 2,
    name: "X-Burgão",
    image: "",
    ingredientList: [
        ingredient.carne,
        ingredient.queijo,
        ingredient.tomate,
        ingredient.alface
    ]
}

var burgovo = {
    id: 3,
    name: "Burgovo",
    image: "",
    ingredientList: [
        ingredient.carne,
        ingredient.queijo,
        ingredient.ovo,
        ingredient.tomate,
        ingredient.alface
    ]
}

var list = [hambuguer, xburgao, burgovo]


function checkID(el) {
    return el.id == this.snackId;
}

module.exports = {
    getAll: function () {
        return list
    },
    getById: function (snackId) {
        return list.find(x => x.id == snackId)
    },
    getIngredientsById: function (snackId) {
        return list.find(x => x.id == snackId).ingredientList
    },
    search: function (q) {
        return list.filter(x => x.name == q)
    }
}