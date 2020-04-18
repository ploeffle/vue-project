<template>
  <v-container>
    <v-row>
      <v-col class="text-center">
        <h1>Übersicht</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <v-card class="pa my-4" to="/menu" tile>
          <v-card-title class="justify-center font-weight-light">Menu</v-card-title>
        </v-card>
        <CategoryItem v-for="category in categories" :key="category.id" :category="category" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CategoryItem from "@/components/CategoryItem.vue";

export default {
  components: {
    CategoryItem
  },
  data() {
    return {
      categories: [
        { id: 1, title: "Angebote" },
        { id: 2, title: "Snacks" },
        { id: 3, title: "Sandwiches" },
        { id: 4, title: "Fahitas" },
        { id: 5, title: "Grill Spezialitäten" },
        { id: 6, title: "Salate" }
      ]
    };
  }
};
</script>

<style scoped></style>
