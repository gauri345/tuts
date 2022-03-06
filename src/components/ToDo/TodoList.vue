<template>
  <h2>Todo</h2>

  <div class="card">
    <div class="card-body">
      <div class="input-group">
        <input v-model="taskContent" aria-label="Enter Task" class="form-control" placeholder="Enter Task" type="text">
        <button class="btn btn-outline-secondary" type="button" @click="addTodo">Add</button>
      </div>
    </div>
  </div>
  <h4>Complected Task</h4>
  <div class="card">
    <div class="card-body">
      <ul class="list-group">
        <li v-for="todo in todoList" class="list-group-item">
          <p>{{ todo.task }}&nbsp;| &nbsp;{{ showStatus(todo) }}</p>
        </li>
      </ul>
    </div>
  </div>


  <!--
  TODO:
  1. Create a todo list. read the data from the example provided.
  2. create a form to add a new do item.

  -->


  <router-link class="btn btn-outline-secondary" to="/">go to homepage</router-link>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
      taskContent: '',
      todoList: [
        {
          id: 1,
          task: "create a todo listing",
          completed: true
        },
        {
          id: 2,
          task: "create a todo form",
          completed: false
        }
      ]
    }
  },
  methods: {
    showStatus(todo) {
      if (todo.completed == false) {
        return 'not competed';
      } else {
        return 'completed'
      }
    },
    getId() {
      let id = 1;
      this.todoList.forEach(todo => {
        if (id < todo.id) {
          id = todo.id;
        }
      });

      return id++
    },
    addTodo() {
      // Calculate the id.
      // get the largest id from the existing todo list and increase it by one.
      this.todoList.push({
        id: this.getId(),
        task: this.taskContent,
        completed: false
      })
    }
  }
}
</script>

<style scoped>
.card {
  margin-bottom: 2rem;
  background-color: lightsteelblue;
}

</style>