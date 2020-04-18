<template>
  <v-container>
    <v-row class="justify-center">
      <span class>
        <h1 class="headline font-weight-thin">Menu</h1>
      </span>
    </v-row>
    <v-row class="pa my-4 justify-center">
      <v-col>
        <MenuItemCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MenuItemCard from "@/components/MenuItemCard.vue";

export default {
  components: {
    MenuItemCard
  }
};
</script>

<style lang="scss" scoped></style>
