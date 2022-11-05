// TODO: 99 Bottles of Beer
var numberOfBottles = 99;

function bottlesOfBeer() {
  while (numberOfBottles >= 0) {
    var bottleWord = "bottles";

    if (numberOfBottles === 1) {
      bottleWord = "bottle";
    }

    if (numberOfBottles === 0) {
      console.log(
        "No more" +
          " " +
          bottleWord +
          " of beer on the wall, " +
          "No more" +
          " " +
          bottleWord +
          " of beer."
      );
    } else {
      console.log(
        numberOfBottles +
          " " +
          bottleWord +
          " of beer on the wall, " +
          numberOfBottles +
          " " +
          bottleWord +
          " of beer."
      );
    }

    numberOfBottles--;

    if (numberOfBottles !== -1) {
      console.log(
        "Take one down and pass it around, " +
          numberOfBottles +
          " " +
          bottleWord +
          " of beer on the wall."
      );
    }
  }
}

bottlesOfBeer();
