<template>
<div class="container">
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="text" v-model="user.username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" v-model="user.password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" @click="login()" class="btn btn-primary">Submit</button>
</form>
</div>
</template>

<script>
import {useUserStore} from "../store/index.js"
export default {
 name:"login",
 data(){
     return {
         user:{
             username:"",
             password:""
         }
     }
 },
 methods:{
     login(){
         this.store.user={"username":this.user.username,"password":this.user.password,"isAuth":true}
         this.$router.push("/dashboard")
     }
 },
setup() {
    const store = useUserStore()

    return {
      // you can return the whole store instance to use it in the template
      store,
    }
  },
}
</script>

<style>

</style>