<template>
  <label for="text">Find: </label>
  <input id="text" placeholder="enter number" v-model="pageNumber"/>
  <div v-if="hasError" class="alert alert-danger" role="alert">
    Number must be either 1 or 2.
  </div>
  <button class="btn-dark btn" @click="showPeople()">Show me people</button>

  <hr>
  <router-link class="btn-dark btn" to="/greet">greet</router-link>

</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      pageNumber: "",
      hasError: false
    }
  },
  methods: {
    showPeople() {
      if (this.pageNumber==1 || this.pageNumber==2){
        this.hasError='false';
        this.$router.push("/people/" + this.pageNumber);
      } else {
        this.hasError ='true'
      }

    }
  }
}
</script>

<style scoped>

</style>