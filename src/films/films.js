const { Router } = require("express")

const film = [{
    id: 1,
    name: "The Shining "
}, {
    id: 2,
    name: "Incendies "
}, {
    id: 3,
    name: "Rang de Basanti "
}, {
    id: 4,
    name: " Finding Nemo "

}]
module.exports.films = film

function films2(i) {
    let y = film.filter(x => x.id == i)
    if (y.length == 1) {
        return y[0].name
    } else {
        return 'no movie exists with this id'
    }
}


module.exports.films2 = films2