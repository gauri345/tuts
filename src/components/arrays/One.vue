<template>
  <div class="container">
    <h1>Arrays</h1>
    <hr />
    <b>Exercise Two: </b> Display a list of all number between 650 and 5000 which are divisible by 217.
    <hr />
    <b>Answer:</b>
    <ul>
      <li>217</li>
    </ul>

    <hr />
    <b>Exercise One: </b> Display a list of all number between 1 and 500 which are divisible by 17.
    <hr />
    <b>Answer:</b>

    <ul>
      <li v-for="number in numbersDivisibleBySeventeen()">{{number}}</li>
    </ul>


  </div>
</template>

<script setup>

  function numbersDivisibleBySeventeen() {
    let numbers = [];

    for (let i = 0; i <= 500; i++) {
      if (i % 17 === 0 ) {
        numbers.push(i);
      }
    }
    console.log(numbers);
    return numbers;
  }

</script>


<style scoped>
.container {
  text-align: left;
}
</style>