<template>
  <div class="hello">
    <h3>Top Heroes</h3>
    <div class="grid grid-pad">
      <router-link  v-for="hero in heroes" class="col-1-4" :key ="hero.id" :to="{ name: 'Details', params: { id: hero.id } }">
        <div class="module hero">
      <h4>{{hero.name}}</h4>
    </div>
  </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Hero } from '../hero'

@Component
export default class Dashboard extends Vue {
  msg = 'I am using TypeScript classes with Vue!';
  // @Prop({ type: Array, required: true })
  //       heroes!: number[];

  heroes : Hero[] =[];
  heroArray = [];     
  isReady = false;
  async created(){
    if(localStorage.getItem('heroArray')){
      this.heroArray = JSON.parse(localStorage.getItem('heroArray') || '{}');
    }
    else{
        await this.getUserAsync()
        .then(data => this.heroArray = data.Heroes) 
        localStorage.setItem('heroArray', JSON.stringify(this.heroArray));
    }
      
        this.heroes = this.heroArray.slice(1,5)
  }

  async getUserAsync() 
{
  const response = await fetch(`https://api.myjson.com/bins/1bomtc`);
  const data = await response.json()
  return data
}



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

[class*='col-'] {
  float: left;
  padding-right: 20px;
  padding-bottom: 20px;
}
[class*='col-']:last-of-type {
  padding-right: 0;
}
a {
  text-decoration: none;
}
*, *:after, *:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
h3 {
  text-align: center;
  margin-bottom: 0;
}
h4 {
  position: relative;
}
.grid {
  margin: 0;
}
.col-1-4 {
  width: 25%;
}
.module {
  padding: 20px;
  text-align: center;
  color: #eee;
  max-height: 120px;
  min-width: 120px;
  background-color: #3f525c;
  border-radius: 2px;
}
.module:hover {
  background-color: #EEE;
  cursor: pointer;
  color: #607d8b;
}
.grid-pad {
  padding: 10px 0;
}
.grid-pad > [class*='col-']:last-of-type {
  padding-right: 20px;
}
@media (max-width: 600px) {
  .module {
    font-size: 10px;
    max-height: 75px; }
}
@media (max-width: 1024px) {
  .grid {
    margin: 0;
  }
  .module {
    min-width: 60px;
  }
}

</style>
