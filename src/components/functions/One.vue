<template>
  <div>

    {{ main() }}

  </div>
</template>

<script>
export default {
  name: "One",
  methods: {
    main: function () {
      console.log("test")
      // print("rfewrwer") python
      // println!("wewe") rust
      // printr("sdfsdfd") php
      // System.out.println("sdfdsfdsf") java
      // cout >> "sdfdfsd" c++

      // programming languages:
      // 1. Machine language
      // 2. Assembly language
      // Higher oder language:
      //    a. procedural programming languages. (Basis, c, etc)
      //    b. Object-oriented Programming Languages.(java, c++, c#, etc.)
      //    c. Function programming languages. (Haskell, lisp, javascript, etc.)
      //function/method types:

      // Function are declared/defined in one place and can be invoked or called from some other place.
      // 1. Named function

      // ----- name(parameters ...) {expressions; ?return value; }
      function add(numberOne, numberTwo) {
        return numberOne + numberTwo;
      }

      const numberOne = 10;
      const numberTwo = 20;

      const sumOne = add(numberOne, numberTwo);
      const sumTwo = add(10, 20);

      console.log(sumOne);
      console.log(sumTwo);

      // javascript is a functional programming language.

      // in a functional programming languages functions are first class citizens. i.e.
      // 1. function can be assigned to variables and constants
      // 2. function can be passed an argument/parameter to another function.
      // 3. a function can return another function
      // 4. a function can be partially applied.


      /*
        2. Anonymous functions
      */


      // Anonymous function definition/declaration and assignment to a variable (traditional function declaration


      // Anonymous function definition/declaration and assignment to a variable (functions short definition form).
      //const anotherCalculator = (num1, num2) => num1 + num2;

      // sumCalculator(20, 40);
      // anotherCalculator(230, 4450);


      const sumCalculator = function (numberOne, numberTwo) {
        return numberTwo + numberOne;
      }

      const differenceCalculator = function (numberOne, numberTwo) {
        return numberTwo - numberOne;
      }

      const sumThree = (one, two, three) => one + two + three;

      const sumOfThree = calculator(sumThree); // error


      const calculatedSum = calculator(sumCalculator);
      const calculatedDifference = calculator(differenceCalculator);

      console.log(calculatedSum)
      console.log(calculatedDifference)


      function calculator(calculatorFunction) {
        const num1 = 100;
        const num2 = 300;

        return calculatorFunction(num2, num1);
      }


      const multiply = function (num1, num2) {
        return num1 * num2;
      };

      //const anotherResult = calculator(multiply);
      //const anotherResult = calculator(function (num1, num2) {
      //  return num1 * num2;
      //});
      const anotherResult = calculator((num1, num2) => num1 * num2);

      console.log(anotherResult);


      // partial application of function
      const multiplication = function (multiplyBy) {
        return function (number) {
          return number * multiplyBy;
        };
      }

      const partiallyAppliedFunction = multiplication(100);
      const result = partiallyAppliedFunction(100);

      // curried functions or function currying.
      const resultAgain = multiplication(100)(100);

      console.log("sdfdsfdsf: ", result);
      console.log("sdfdsfdsf: ", resultAgain);


      const click = function (element, callback) {
        if ("button" === element) {
          // will make http request to russia. response will take 20 mins.
          return callback(100);
        } else {
          return "cannot click anything other then button";
        }
      }

      click("button", function (value) {
        console.log(value);
      });

      const x = function (num1) {
        return "some stuff " + num1;
      }

      const string = x(12);
      console.log(string);


      const a = function (kando) {

        kando(100, 200);
      }


      const functionToPass = function() {
      };

      a(functionToPass);


      return "hello world"
    }
  }
}
</script>

<style scoped>

</style>