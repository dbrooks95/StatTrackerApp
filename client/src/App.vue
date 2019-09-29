<template>
  <div class="container" id="app">
    <Header/>
    <transition name="animations" mode="out-in" enter-active-class="animated fadeIn" >
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Header from "./components/Header";


export default {
  name: 'app',
  components: {
    Header   
  }
}
</script>

<style>

/* Simple animation import */
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css";

:root {
  --primary-color: #e5e1d8;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background: var(--primary-color);
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  line-height: 1.6;
}
a {
  color: #fff;
  text-decoration: none;
}
ul {
  list-style: none;
}
.body-bg-no-image {
  background: var(--primary-color);
}
.body-bg-image {
  background: var(--primary-color) url("./assets/background.jpg") no-repeat top
    center;
    background-size: cover;
}
.container {
  max-width: 960px;
  margin: 1rem auto;
  overflow: auto;
  padding: 0 2rem;
}
.form-group {
  margin: 1rem 0;
}
.search {
  background: rgba(0, 0, 0, 0.5);
  border: 4px #fff solid;
  margin-top: 1rem;
  padding: 2rem;
  border-radius: 12px;
}

.search h1 {
  text-align: center;
}
input,
select,
textarea {
  display: block;
  width: 100%;
  padding: 0.4rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
}
.btn {
  display: inline-block;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 0.4rem 1.3rem;
  border: 2px #fff solid;
  cursor: pointer;
  outline: none;
  margin-top: 1rem;
  border-radius: 12px;
}

.animations {
  animation-duration: 100ms;
  animation-delay: 0s;
}

@media (max-width: 700px) {
  body {
    background: var(--primary-color);
  }
}
</style>
