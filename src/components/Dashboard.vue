<template>
  <div class="">This is dashboard component
    <p>{{$store.state}}</p>
    <button class="btn btn-danger
     btn-sm" @click="signOut">Sign Out</button>
  </div>
</template>

<script>
import {firebaseApp} from '../firebaseApp'

  export default {
    name: 'Dashboard',
    methods: {
      signOut (){
        this.$store.dispatch('signout');
        firebaseApp.auth().signOut();        
      }
    }
  }
</script>

<style>

</style>