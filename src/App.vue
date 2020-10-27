<template>
  <div id="app">

    <form class="form" v-on:submit.prevent>
      <div class="inputArea">
        <input type="text" class="inputText" placeholder="Please enter" v-model="newTodoName" v-on:keydown.enter="addTodo">
      </div>
    </form>

    <ul class="list">
      <li class="list__item" v-for="(todo, key) in todos" :key="key" :class="{ done : todo.isComplete}">
        <span v-on:click="doneTodo(todo, key)">
          <i class="far fa-square icon-square" v-if="!todo.isComplete"></i>
          <i class="far fa-check-square icon-check" v-else></i>
        </span>
        <span class="task">{{ todo.name }}</span>
        <i class="fas fa-times icon-times" v-on:click="removeTodo(key)"></i>
      </li>
    </ul>


  </div>
</template>


<script>
import firebase from "firebase/app"
import "firebase/firestore"

export default {
  name: 'App',
  data: function() {
    return {
      newTodoName: '',
      db: null,
      todosRef: null,
      todos: {}
    }
  },
  created: function() {
    this.db = firebase.firestore()
    this.todosRef = this.db.collection('todo')
    this.todosRef.onSnapshot(querySnapshot => {
      const obj = {}
      querySnapshot.forEach(doc => {
        obj[doc.id] = doc.data()
      })
      this.todos = obj
    })
  },
  methods: {
    addTodo: function(e) {
      if(e.keyCode !== 13) return;
      if(this.newTodoName == '') return;
      this.todosRef.add({
        name: this.newTodoName,
        isComplete: false
      });
      this.newTodoName = '';
    },
    doneTodo: function(todo, key) {
      todo.isComplete = !todo.isComplete
      this.todosRef.doc(key).update(todo)
    },
    removeTodo: function(key) {
      this.todosRef.doc(key).delete()
    }
  }
}
</script>