<template>
  <ul class="user-list">
    <li v-for="person in people">
      <div class="card">
        <div class="card-body">
          <!--
           TODO:
           1. The image of each person should be clickable.
           2. When some on click on the image it should display the details page for that person.
          -->

          <router-link :to="getPersonUrl(person.id)">
            <img :alt="person.first_name" :src="person.avatar" class="img-thumbnail">
          </router-link>
          <p>{{ person.first_name }} {{ person.last_name }}</p>
          <p>{{ person.email }}</p>
        </div>
      </div>

    </li>
  </ul>

  <div class="pagination">
    <div aria-label="First group" class="btn-group" role="group">

        <router-link to="/people/1" class="btn btn-outline-secondary">1</router-link>


        <router-link to="/people/2" class="btn btn-outline-secondary">2</router-link>

      <router-link to="/" class="btn btn-outline-secondary">go to homepage</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "PeopleList",
  data() {
    return {
      people: []
    };
  },
  components: {},
  methods: {
    getAllPeople(pageNumber) {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      fetch("https://reqres.in/api/users?page=" + pageNumber, requestOptions) // make an http request.
          .then(response => response.json())
          .then(result => this.people = result.data)
          .catch(error => console.log('error', error));
    },

    getPersonUrl(personId) {
      return "/person/" + personId;
    }
  },

  created() {
    this.getAllPeople(this.$route.params.pageNumber);
  }
}
</script>

<style scoped>
.img-thumbnail {
  background-color: #4e4747;
}

.user-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

li {
  list-style-type: none;
}

.pagination {
  display: block;
}
</style>