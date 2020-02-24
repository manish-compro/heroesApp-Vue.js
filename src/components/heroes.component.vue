<template>
<div>
    <h2>My Heroes</h2>

<form v-on:submit="addHero" class="form-inline my-3">
  <div class="form-group" >
    <input  class="form-control"  placeholder="Add a hero" v-model = "newHero">
    <button class="ml-2" type="submit">Add</button>
  </div>
 </form>



<ul class="heroes">
  <li  v-for="hero in heroes" :key ="hero.id">
    <routerLink :to="{ name: 'Details', params: { id: hero.id } }">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </routerLink>
    <button class="delete" title="delete hero" v-on:click="deleteHero(hero)">x</button>
    </li>
    </ul>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Hero } from '../hero'

@Component
export default class Heroes extends Vue {
heroes: Hero[] = [];
newHero = '';
created(){
    this.heroes = JSON.parse(localStorage.getItem('heroArray') || '{}');
}

addHero(){
console.log( this.newHero)
const lastElement = this.heroes[this.heroes.length-1];
this.heroes.push({'id' : lastElement.id+1, 'name': this.newHero});
localStorage.setItem('heroArray', JSON.stringify(this.heroes));
}

deleteHero(hero : any){debugger
const key = this.heroes.findIndex(item=> item.id == hero.id);
this.heroes.splice(key, 1);
localStorage.setItem('heroArray', JSON.stringify(this.heroes));
}

}
</script>
<style  scoped>
.heroes {
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 15em;
}
.heroes li {
  position: relative;
  cursor: pointer;
  background-color: #EEE;
  margin: .5em;
  padding: .3em 0;
  height: 36px;
  border-radius: 4px;
}

.heroes li:hover {
  color: #607D8B;
  background-color: #DDD;
  left: .1em;
}

.heroes a {
  color: #333;
  text-decoration: none;
  position: relative;
  display: block;
  width: 250px;
}

.heroes a:hover {
  color:#607D8B;
}

.heroes .badge {
  display: inline-block;
  font-size: small;
  color: white;
  padding: 0.8em 0.7em 0 0.7em;
  background-color:#405061;
  line-height: 1em;
  position: relative;
  left: -1px;
  top: -4px;
  height: 34px;
  min-width: 16px;
  text-align: right;
  margin-right: .8em;
  border-radius: 4px 0 0 4px;
}

button {
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  cursor: hand;
  font-family: Arial;
}

button:hover {
  background-color: #cfd8dc;
}

button.delete {
  position: relative;
  left: 194px;
  top: -38px;
  background-color: gray !important;
  color: white;
}


</style>