<template>
  <header>
      <img v-bind:src="image">
  </header>
</template>

<script>
export default {
    name: 'Header',
    data (){
        return{
            image: require("@/assets/logo.png")
        }
    }
}
</script>

<style scoped>
img {
    width: 300px;
    display: block;
    margin: auto;
}

</style>