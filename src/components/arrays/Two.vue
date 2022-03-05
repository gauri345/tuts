<template>
  <ul class="user-list">
    <li v-for="person in people">
      <div class="card">
        <div class="card-body">
          <p><img :alt="person.first_name" :src="person.avatar" class="img-thumbnail"></p>
          <p>{{ person.first_name }} {{ person.last_name }}</p>
          <p>{{ person.email }}</p>
        </div>
      </div>

    </li>
  </ul>

  <div class="pagination">
    <div aria-label="First group" class="btn-group" role="group">
      <button class="btn btn-outline-secondary" type="button" @click="getAllPeople(1)">
        <router-link to="/people/1">1</router-link>
      </button>

      <button class="btn btn-outline-secondary" type="button" @click="getAllPeople(2)">
        <router-link to="/people/2">2</router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Two",
  data() {
    return {
      people: []
    };
  },
  components: {},
  methods: {
    getAllPeople(pageNumber) {
      const that = this;
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      fetch("https://reqres.in/api/users?page=" + pageNumber, requestOptions) // make an http request.
          .then(response => response.json())
          .then(function (result) {
            return that.people = result.data;
          })
          .catch(function (error) {
            console.log('error', error)
          });
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