// Esercizio 1
var studente = {
    "nome": "Paolo",
    "cognome": "Paoleschi",
    "età": 19
}

for(var key in studente) {
    console.log(key);
}

// Esercizio 2
var listaStudenti = [
    {
        "nome": "studente1-nome",
        "cognome": "studente1-cognome",
        "età": 19
    },
    {
        "nome": "studente2-nome",
        "cognome": "studente2-cognome",
        "età": 14
    },
    {
        "nome": "studente3-nome",
        "cognome": "studente3-cognome",
        "età": 9
    },
    {
        "nome": "studente4-nome",
        "cognome": "studente4-cognome",
        "età": 99
    },
    {
        "nome": "studente5-nome",
        "cognome": "studente5-cognome",
        "età": 9999
    }
];

for(var i = 0; i < listaStudenti.length; i++)  {
    for(var prop in listaStudenti[i]) {
        if(prop === "nome" || prop === "cognome") {
            console.log(`Studente n. ${i + 1}, ${prop}: ${listaStudenti[i][prop]}.`)
        }
    }
};

// Esercizio 3
(function creaNuovoStudente(arr) {
    var nuovoStudente = {};
    var listaProprietà = ["nome", "cognome", "età"];

    for (var i = 0; i < listaProprietà.length; i++) {
        listaProprietà[i] === "età" ?
            nuovoStudente[listaProprietà[i]] = parseInt(prompt(`${listaProprietà[i]}:`)) :
            nuovoStudente[listaProprietà[i]] = prompt(`${listaProprietà[i]}:`);
    }

    arr.push(nuovoStudente);
})(listaStudenti);

console.log(listaStudenti);
