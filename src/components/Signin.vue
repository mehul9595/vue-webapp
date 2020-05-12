<template>
  <!-- <div class="form-inline">
      <h3>Sign In</h3>
      <div class="form-group">
        <input type="text" placeholder="email" v-model="email" class="form-control" />
        <input type="password" placeholder="password" v-model="password" class="form-control" />
        <button class="btn btn-primary" @click="onLogin">Sign In</button>
      </div>
      <br>
      <p>{{error.message}}</p>
  </div> -->
  <!-- another sign in example 
    https://bootsnipp.com/snippets/bxzmb 
    -->
  <div class="signin">
    <div class="card">
      <article class="card-body">
        <h4 class="card-title text-center mb-4 mt-1">Sign in</h4>
        <hr>
        <p class="text-success text-center">{{error.message}}</p>
        <form>
          <div class="form-group">

            <div class="input-group">
              <div class="input-group-prepend"><span class="input-group-text"> <i class="fa fa-user"></i></span></div>
              <input name="" class="form-control" placeholder="Email" type="email" v-model="email">
            </div> <!-- input-group.// -->
          </div> <!-- form-group// -->
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-prepend"><span class="input-group-text"> <i class="fa fa-lock"></i></span></div>
              <input class="form-control" placeholder="******" type="password" v-model="password">
            </div> <!-- input-group.// -->
          </div> <!-- form-group// -->
          <div class="form-group">
            <button type="button" class="btn btn-primary btn-block" @click="onLogin"> Login </button>
          </div> <!-- form-group// -->
          <p class="text-center"><a href="#" class="btn">Forgot password?</a></p>
          <p class="text-center"><router-link to="/signup">Not a user? Sign up</router-link></p>
        </form>
      </article>
    </div> <!-- card.// -->
  </div>
</template>

<script>
  import {
    firebaseApp
  } from '../firebaseApp'

  export default {
    data() {
      return {
        email: '',
        password: '',
        error: {
          message: ''
        }
      }
    },
    methods: {
      onLogin() {
        console.log('logged in...');
        firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
          .catch(err => {
            this.error = err;
          })
      }
    }
  }
</script>

<style>

</style>