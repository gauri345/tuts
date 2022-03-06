<template>
  <img :alt="personDetail.first_name" :src="personDetail.avatar">
  <p>{{ personDetail.id }}</p>
  <p>{{ personDetail.first_name }}</p>
  <p>{{ personDetail.last_name }}</p>
  <p>{{ personDetail.email }}</p>
  <hr>
  <a @click="$router.back()" class="btn btn-outline-secondary" to="/people/1">Go to people list</a>

</template>

<script>
export default {
  name: "PersonDetail",
  data() {
    return {
      personId: this.$route.params.personId,
      personDetail: {}
    }
  },

  created() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    // fetch the detail of a person from api using the personId from state and update the personDetails state of this component
    fetch("https://reqres.in/api/users/" + this.personId, requestOptions)
        .then(response => response.json())
        .then(result => this.personDetail = result.data)


    console.log(this.personDetail);
  }
}
</script>

<style scoped>

</style>