<template>
  <v-container>
    <v-row class="justify-center">
      <span class>
        <h1 class="headline font-weight-thin">Menu</h1>
      </span>
    </v-row>
    <v-row class="pa my-4 justify-center">
      <v-col>
        <MenuItemCard
          v-for="items in MenuItems"
          :key="items.id"
          :MenuItem="items"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MenuItemCard from "@/components/MenuItemCard.vue";
import AxiosService from "@/services/AxiosService.js";

export default {
  components: {
    MenuItemCard,
  },
  data() {
    return {
      MenuItems: [],
    };
  },
  created() {
    AxiosService.getMenuItems()
      .then((response) => {
        this.MenuItems = response.data;
        console.log("There was an error:", response.data);
      })
      .catch((error) => {
        console.log("There was an error:", error.response);
      });
  },
};
</script>

<style lang="scss" scoped></style>
