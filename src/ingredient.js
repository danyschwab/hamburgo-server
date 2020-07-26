
const carne = {
    id: 1,
    name: "Hambuguer",
    price: 2.00
};

const queijo = {
    id: 2,
    name: "Queijo",
    price: 1.50
}

const tomate = {
    id: 3,
    name: "Tomate",
    price: 0.30
}

const alface = {
    id: 4,
    name: "Alface",
    price: 0.30
}

const ovo = {
    id: 5,
    name: "Ovo",
    price: 1.00
}

const presunto = {
    id: 6,
    name: "Presunto",
    price: 1.50
}
const bacon = {
    id: 7,
    name: "Bacon",
    price: 2.00
}

const calabresa = {
    id: 8,
    name: "Calabresa",
    price: 1.50
}

var list = [carne, queijo, tomate, alface, ovo, presunto, bacon, calabresa]

module.exports = {
    carne,
    queijo, 
    ovo,
    presunto,
    tomate, 
    alface,
    calabresa,
    bacon,
    getAll: function () {
        return list
    },
    getById: function (id) {
        return list.find(x => x.id == id)
    },
    search: function (q) {
        return list.filter(x => x.name == q)
    }
}