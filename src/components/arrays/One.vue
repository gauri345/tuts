<template>
  <div class="container">
    <h1>Arrays</h1>

    <table>
      <tr>
        <th>Name</th>
        <th>age</th>
      </tr>
      <tr v-for="person in listPerson()">
        <td>{{ person.first_name }} {{ person.middle_name }} {{ person.last_name }}</td>
        <td>{{ person.age }}</td>
      </tr>
    </table>

    <!--
    TODO:
      Example: All name must be displayed in upper case.
      1. Display the formatted address on the table. (e.g. Kathmandu, Nepal)
      2. Sort the person in ascending order by age.
      3. Display only the user whose age is less then 90
      4. Display the address only if the city is not Biratnager.
      5. Also display the marks obtained each in each subject.
      6. Also display the total marks obtained by each person.
      7. Also display if the person is pass or fail (pass if all subject has marks > 30).
      8. Also Display the grade of each person. (total_marks > 30 (pass), total_marks > 60 (First Division), total_marks > 80 (Distinction))
    -->

    <!--
    <hr/>
    <b>Exercise Two: </b> Display a list of all number between 650 and 5000 which are divisible by 217.
    <hr/>
    <b>Answer:</b>
    <ul>
      <li v-for="number in numberDivisibleBy()">{{ number }}</li>
    </ul>

    <hr/>
    <b>Exercise One: </b> Display a list of all number between 1 and 500 which are divisible by 17.
    <hr/>
    <b>Answer:</b>

    <ul>


    </ul>
 -->

  </div>
</template>

<script setup>

// List, Set, Map, Array, Stack.
const data = [
  {
    first_name: "Gauri",
    middle_name: "Maya",
    last_name: "Upreti",
    age: 29,
    address: {
      city: "Köln",
      country: "Germany"
    },
    marks: {
      math: 30,
      science: 30,
      english: 70
    }
  },
  {
    first_name: "Pawan",
    middle_name: "Kumar",
    last_name: "Bhattarai",
    age: 45,
    address: {
      city: "Köln",
      country: "Germany"
    },
    marks: {
      math: 35,
      science: 60,
      english: 80
    }
  },
  {
    first_name: "Ram",
    middle_name: "Kumar",
    last_name: "Jhakri",
    age: 15,
    address: {
      city: "Kathmandu",
      country: "Nepal"
    },
    marks: {
      math: 13,
      science: 3,
      english: 7
    }
  },
  {
    first_name: "Bimal",
    middle_name: "",
    last_name: "Kharsung",
    age: 10,
    address: {
      city: "Kathmandu",
      country: "Nepal"
    },
    marks: {
      math: 60,
      science: 3,
      english: 50
    }
  },
  {
    first_name: "Sumit",
    middle_name: "",
    last_name: "Karki",
    age: 95,
    address: {
      city: "Biratnager",
      country: "Nepal"
    },
    marks: {
      math: 50,
      science: 50,
      english: 70
    }
  },
  {
    first_name: "John",
    middle_name: "",
    last_name: "Doe",
    age: 95,
    address: {
      city: "Lalitpur",
      country: "Nepal"
    },
    marks: {
      math: 70,
      science: 90,
      english: 80
    }
  }
];

function listPerson() {

  const list = ["one", "two", "three"];

  console.log(list);

  console.log('-----------for-------------')
  for (let i = 0; i < list.length; i++) {
    console.log(i, list[i]);
  }

  console.log('-----------forEach-------------')
  // Apply the function for each element in the list array.
  // with forEach on cannot return a value form the function.
  list.forEach(function (item, index) {
    console.log(index, item);
  });

  console.log('-----------Map-------------')
  const capitalized = list.map(item => {
    return item.toLocaleUpperCase(); // Can return anything.
  });

  console.log(capitalized);


  console.log('-----------Filter-------------')
  const filtered = capitalized.filter(item => {
    return item === 'ONE' || item === 'TWO'; // Must return a boolean value.

    /**
     if (item === 'ONE' || item === 'TWO') {
      return true;
    } else {
      return false;
    }
     */

  });

  console.log(filtered);

  return data;
}

function numberDivisibleBy() {
  let numbers = [];
  for (let i = 650; i <= 5000; i++) {
    if (i % 217 === 0) {
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

li {

}
</style>