<template>
  <div class="hello">


  <div v-if="hero">
  <h2>{{hero.name}} Details</h2>
  <div><span>id: </span>{{hero.id}}</div>
  <div>
    <label>name:
      <input v-model="hero.name" placeholder="name"/>
    </label>
  </div>
  <button v-on:click="goBack">go back</button>
  <button v-on:click="updateHero(hero)">save</button>
</div>


  
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Hero } from '../hero'

@Component
export default class HeroDetails extends Vue {
id = 0;
hero ={};
key = 0;
heroArray: Hero[] = [];
    created(){
         this.id = parseInt(this.$route.params.id)
         this.heroArray =  JSON.parse(localStorage.getItem('heroArray') || '{}');
         this.key = this.heroArray.findIndex(item => item.id == this.id);
         this.hero = this.heroArray[this.key];
           
    }
    goBack(){
       this.$router.push('/');
    }

    updateHero(hero: any){
      this.heroArray[this.key].name = hero.name;
      localStorage.setItem('heroArray', JSON.stringify(this.heroArray));
    }
 

}

</script>


<style scoped>



</style>
