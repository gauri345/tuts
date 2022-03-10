<template>
  <div>
    <router-link class="btn btn-outline-secondary" to="/">go to homepage</router-link>
    <hr>
    <div class="form-container" v-if="!formSuccess">
    <div class="form-row">
      <div class="form-group col-6">
        <input v-model="firstName" class="form-control" placeholder="First name" type="text">
      </div>
      <div class="form-group col-6">
        <input v-model="lastName" class="form-control" placeholder="Last name" type="text">
      </div>
      <div class="form-group col-4">
        <input v-model="address" class="form-control" placeholder="address" type="text">
      </div>
      <div class="form-group col-4">
        <input v-model="city" class="form-control" placeholder="city" type="text">
      </div>

      <div class="form-group col-4">
        <select id="state" v-model="state" class="form-control">
          <option>state 1</option>
          <option>state 2</option>
          <option>state 3</option>
        </select>
      </div>

      <div class="form-group col-4">
        <input v-model="zip" class="form-control" placeholder="ZIP" type="text">
      </div>

      <div class="form-check">
        <input id="subscribe_nl" v-model="subscribe_nl" class="form-check-input" type="checkbox">
        <label class="form-check-label" for="subscribe_nl">Subscribe Newsletter</label>
      </div>
      <button class="btn btn-primary" type="submit" @click="submitForm">Send</button>

      <div v-if="formError" class="alert alert-danger col-12 mt-3">{{ formError }}</div>
    </div>

    <div v-if="formSuccess" class="alert alert-success col-12 mt-3">Form successfully submitted! ;)</div>
  </div>
</div>
</template>

<script>
export default {
  name: "personalForm",
  data() {
    return {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      subscribe_nl: 'false',
      formError: '',
      formSuccess: ''
    }
  },
  methods: {
    submitForm() {
      let errors = false;
      if (this.firstName === '') errors = true;
      if (this.lastName === '') errors = true;
      if (this.address === '') errors = true;
      if (this.city === '') errors = true;
      if (this.state === '') errors = true;
      if (this.zip === '') errors = true;
      if (this.subscribe_nl === '') errors = true;
      if (errors) {
        this.formError = 'please correct the mistakes';
        return false;
      }
      alert('form submitted');
      this.formSuccess = true;
    }
  }
}
</script>

<style scoped>
.form-row {
  margin: 3rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-check-label {
  display: flex;
}
</style>