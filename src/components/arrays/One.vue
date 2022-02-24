<template>
  <div class="container">
    <h1>Arrays</h1>
    <hr />
    <b>Exercise Two: </b> Display a list of all number between 650 and 5000 which are divisible by 217.
    <hr />
    <b>Answer:</b>
    <ul>
      <li v-for="number in numberDivisibleBy()">{{number}}</li>
    </ul>

    <hr />
    <b>Exercise One: </b> Display a list of all number between 1 and 500 which are divisible by 17.
    <hr />
    <b>Answer:</b>

    <ul>


    </ul>


  </div>
</template>

<script setup>

function numberDivisibleBy(){
  let numbers = [];
  for (let i = 650; i <= 5000; i++){
    if(i % 217 === 0){
      numbers.push(i);
    }
  }
  console.log(numbers);
  return numbers;
}

/*
  function numbersDivisibleBySeventeen() {
    let numbers = [];

    for (let i = 0; i <= 500; i++) {
      if (i % 17 === 0 ) {
        numbers.push(i);
      }
    }
    console.log(numbers);
    return numbers;
  } */

</script>


<style scoped>
.container {
  text-align: left;
}
li{

}
</style>