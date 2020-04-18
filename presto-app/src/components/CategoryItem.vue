<template>
  <router-link class="category-link" :to="'/category/' + category.id">
    <v-card class="pa my-4" v-bind:style="{ backgroundColor: checkIsAngebot(category.title) }" tile>
      <v-card-title class="justify-center font-weight-light">{{ category.title }}</v-card-title>
    </v-card>
  </router-link>
</template>

<script>
export default {
  props: {
    category: Object
  },
  data() {
    return {};
  },
  methods: {
    checkIsAngebot(text) {
      if (text === "Angebote") {
        return "#A7FFEB";
      }
    }
  }
};
</script>

<style scoped>
.category-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
