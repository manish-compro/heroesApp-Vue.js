//import {  Vue } from "vue-property-decorator";

export default {

  async set() {
         response = await fetch('https://api.myjson.com/bins/1bomtc');  
         return response.json(); 
  },
  get() {
    return 
  }
}