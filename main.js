var fizz = function() {
  var fizzCount = 0, buzzCount = 0, fizzBuzzCount = 0;

  for(var i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      if (i % 5 === 0){
        console.log(i+ ": FizzBuzz");
        fizzBuzzCount++;
      } else {
        console.log(i + ": Fizz");
        fizzCount++;
      }
    } else if (i % 5 === 0) {
      console.log(i + ": Buzz");
      buzzCount++;
    }
  }

  console.log("\nFizz: " + fizzCount + "\nBuzz: " + buzzCount + "\nFizzBuzz: " + fizzBuzzCount);
}

fizz();
