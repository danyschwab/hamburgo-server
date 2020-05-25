var hamburguer = {
    id: 1,
    name: "Hambuguer",
    price: 15.00
}

var cheeseburguer = {
    id: 2,
    name: "cheeseburguer",
    price: 16.50
}

var list = [hamburguer, cheeseburguer]

module.exports = {
    getAll : function(){
        return list
    },
    getById : function (id){
        if (id == 1 ) {
            return hamburguer
        } else if ( id == 2) {
            return cheeseburguer
        } else {
            return "Não encontrado"
        }
    },
    search : function(q){
        return hamburguer
    }
}