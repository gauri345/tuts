<template>
  <div class="container">
    <h1>Arrays</h1>

    <table>
      <tr>
        <th>Name</th>
        <th>age</th>
        <th>address</th>
        <th colspan="3">marks</th>
      </tr>
      <tr>
        <td colspan="3"></td>
        <td> math</td>
        <td>science</td>
        <td>english</td>
        <td>total</td>
        <td>result</td>
        <td>grade</td>
      </tr>

      <tr v-for="person in listPerson()">
        <td>
          {{ person.first_name.toUpperCase() }}
          {{ person.middle_name.toString() }}
          {{ person.last_name.toUpperCase() }}
        </td>
        <td>
          {{ person.age }}
        </td>
        <td> {{ person.address.city }} {{ ',' }} {{ person.address.country }}</td>
        <td>{{ person.marks.math }}</td>
        <td>{{ person.marks.science }}</td>
        <td>{{ person.marks.english }}</td>
        <td>{{ person.marks.total }}</td>
        <td>{{ person.marks.result }}</td>
        <td>{{ person.marks.grade }}</td>

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
      8. Also Display the grade of each person. must be pass and logic is as follows (total_marks > 30% (pass), total_marks > 60% (First Division), total_marks > 80% (Distinction))
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
      city: "Biratnager",
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
  const sorted = data.sort((person1, person2) => {
    return person1.age - person2.age;
  });
  const filtered = sorted.filter(person => {
    return person.age <= 90 && person.address.city !== 'Biratnager'
  });
  return filtered.map(function (person) {
    const total = person.marks.english + person.marks.math + person.marks.science;
    person.marks.total = total;
    const fail = person.marks.math <= 30 || person.marks.science <= 30 || person.marks.english <= 30

    if (fail) {
      person.marks.result = "fail";
      person.marks.grade = "fail";
    } else {

      person.marks.result = 'pass';
      person.marks.grade = 'pass';

      const percentageObtained = (total / 300) * 100;

      if (percentageObtained >= 50 && percentageObtained < 60) {
        person.marks.grade = "second";
      }

      if (percentageObtained >= 60 && percentageObtained <= 80) {
        person.marks.grade = "first";
      }

      if (percentageObtained > 80) {
        person.marks.grade = "distinction";
      }
    }

    return person
  });

}


/*
const list = ["one", "two", "three"];

console.log(list);

console.log('-----------for-------------')
for (let i = 0; i < list.length; i++) {
  console.log(i, list[i]);
}

console.log('-----------forEach-------------')
// Apply the functions for each element in the list array.
// with forEach on cannot return a value form the functions.
list.forEach(functions (item, index) {
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


   if (item === 'ONE' || item === 'TWO') {
    return true;
  } else {
    return false;
  }


});

console.log(filtered);

return data;
}



/* functions numberDivisibleBy() {
let numbers = [];
for (let i = 650; i <= 5000; i++) {
  if (i % 217 === 0) {
    numbers.push(i);
  }
}
console.log(numbers);
return numbers;
}
*/
/*
  functions numbersDivisibleBySeventeen() {
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

td {
  padding: 1rem;
}
</style>