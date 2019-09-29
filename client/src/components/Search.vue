<template>
  <section class="search">
      <h1>SEARCH FOR PLAYER!</h1>
      <form v-on:submit.prevent="onSubmit">
          <div class="form-group">
              <label for="platform">Platform</label>
              <select name="platform" id="platform" v-model="platform">
                  <option value="psn">Playstation</option>
                  <option value="xbl">Xbox One</option>
                  <option value="origin">Origin</option>
              </select>
          </div>
          <div class="form-group">
              <label for="gamertag">User Identification</label>
              <input type="text" name="text" v-model="gamertag" id="gamertag" placeholder="Enter User ID">
          </div>
          <div class="form-group">
              <input type="submit" value="SUBMIT" class="btn">
          </div>
      </form>
  </section>
</template>

<script>
export default {
    name: 'Search',
    
    data (){
        return {
            platform: "psn",
            gamertag: ""
        }
    },

    beforeCreate() {
        document.body.className = "body-bg-image";
    },

    methods: {
        onSubmit() {
            if(!this.gamertag){

                // A warning taost if field left empty
                this.$toasted.show("Please enter a valid ID!", {
                    theme: "outline", 
                    position: "bottom-center",
                    duration: 3000,
                    icon: "exclamation-circle"
                });
            } else {
                this.$router.push(`/profile/${this.platform}/${this.gamertag}`)
            }
        }
    }
}
</script>