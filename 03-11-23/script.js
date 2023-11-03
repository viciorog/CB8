//    ESERCIZIO N 1

function getTemperatureStatus(currentTemperature) {
  if (currentTemperature <= 11) {
    return "freddo";
  } else if (currentTemperature > 11 && currentTemperature <= 21) {
    return "mite";
  } else if (currentTemperature > 21) {
    return "caldo";
  } else {
    return "Temperatura non valida";
  }
}

console.log(getTemperatureStatus());

//    ESERCIZIO N 2

const whoAmI = {
  name: "Vincenzo",
  surname: "Rogato",
  age: "24",
  "eyes-color": "marron-verde",
  passion: "videogiochi",
  sometimes: function () {
    return "e ogni tanto programmo alle 3 di notte";
  },
  presentation: function () {
    console.log(
      "Io mi chiamo",
      this.name,
      this.surname,
      "ho",
      this.age,
      "anni",
      "il colore dei miei occhi è",
      this["eyes-color"],
      "e la mia più grande passione sono i",
      this.passion,
      this.sometimes()
    );
  },
};

whoAmI.presentation();

//    ESERCIZIO AVANZATO

const preferiti = [];

function aggiungiAPreferiti(movies) {
  preferiti.push(movies);
}

function mostraPreferiti() {
  for (let i = 0; i < preferiti.length; ++i) {
    console.log(i + 1 + ": " + preferiti[i]);
  }
}

function rimuoviDaPreferiti(movies) {
  const indexMovies = preferiti.indexOf(movies);

  if (indexMovies !== -1) {
    preferiti.splice(indexMovies, 1);
    console.log(movies + " rimosso dai preferiti");
  } else {
    console.log("Nessun film trovato con questo nome");
  }
}

aggiungiAPreferiti("evangelion");
aggiungiAPreferiti("Il divo");
aggiungiAPreferiti("Big Lebownski");

mostraPreferiti();

rimuoviDaPreferiti("Big Lebownski");

mostraPreferiti();
