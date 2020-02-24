<template>

  <div id="app">
    <div class="container mt-3">
    <h1>{{title}}</h1>
    <nav>
      <!-- <router-link class="mr-1" :to="{ name: 'Dahboard', params: {heroes : message} }">Dashboard</router-link>|
       -->
        <router-link class="mr-1" to="/">Dashboard</router-link>
      <router-link to="/heroes">Heroes</router-link>
    </nav>
    <router-view />
  </div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator";

// const GreetingProps =  Vue.extend({
//     props: {
       
//         heroes: {
//             type: Array,
//             default:()=> [1, 2]
//         }
//     }
// });

// @Component
// export default class Greeting extends GreetingProps {
//   get message() {
//     // this.name will be typed
//     return this.heroes
//   }
// }



@Component
export default class App extends Vue {
 title = 'Tour of Heroes in VUE.JS';
  
}
</script>

<style scoped>

h1 {
  font-size: 1.2em;
  margin-bottom: 0;
}
h2 {
  font-size: 2em;
  margin-top: 0;
  padding-top: 0;
}
nav a {
  padding: 5px 10px;
  text-decoration: none;
  margin-top: 10px;
  display: inline-block;
  background-color: #eee;
  border-radius: 4px;
}
nav a:visited, a:link {
  color: #334953;
}
nav a:hover {
  color: #039be5;
  background-color: #CFD8DC;
}
nav a.active {
  color: #039be5;
}


</style>
