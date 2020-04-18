<template>
  <v-container class="px-10 pt-5">
    <v-row class="text-center">
      <v-img :src="require('../assets/logo_presto.png')" class="my-3" contain height="70" />
    </v-row>
    <v-row class="text-center">
      <h1 class="display-1 font-weight-thin mb-0">Herzlich Wilkommen bei "La Poma"</h1>
    </v-row>
    <v-row class="text-center">
      <v-img :src="require('../assets/shop_photo.jpg')" class="my-3" contain height="200" />
    </v-row>
    <v-row class="text-center">
      <v-btn
        block
        class="white--text"
        elevation="0"
        min-height="50px"
        color="#96C74E"
        tile
        to="Overview"
      >Zum Menü</v-btn>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  myStyle: {
    backgroundColor: "#16a085"
  }
};
</script>

<style scoped></style>
