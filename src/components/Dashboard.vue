<template>
  <div class="">
    <h3>Events Dashboard</h3>
    <!-- <p>{{$store.state}}</p> -->
    <button class="btn btn-danger
     btn-sm" @click="signOut">Sign Out</button>
    <hr />
    <AddEvent></AddEvent>
    {{this.$store.state.events}}

    <div class="card-block" v-for="(e,idx) in this.$store.state.events" :key="idx">
      <!-- TODO: move this list of cards to component -->
      <p>{{e.title}}</p>
      <p>{{e.description}}</p>
    </div>
  </div>
</template>

<script>
  import {
    firebaseApp,
    eventsRef
  } from '../firebaseApp'

  import AddEvent from "./AddEvent";


  export default {
    name: 'Dashboard',
    methods: {
      signOut() {
        this.$store.dispatch('signout');
        firebaseApp.auth().signOut();
      }
    },
    components: {
      AddEvent
    },
    data() {
      return {
        events: []
      }
    },
    mounted() {
      eventsRef.on("value", (snapShot) => {
        snapShot.forEach(event => {
          console.log(event.val());
          this.events.push(event.val());
        });
        //TODO: push the events to store

        this.$store.dispatch('setEvents', this.events);
      });
    }
  }
</script>

<style>

</style>