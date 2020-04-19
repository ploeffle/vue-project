<template>
  <v-container>
    <router-link class="category-link" :to="'/overview/'">
      <v-card
        class="mx-auto v-card-style"
        tile
        elevation="2"
        flat
        max-width="344"
        outlined
      >
        <v-list-item three-line class>
          <v-list-item-content class>
            <v-row no-gutters>
              <v-col cols="11" class>
                <v-list-item-title class="title font-weight-regular mb-1"
                  >{{ MenuItem.dish_id }}.
                  {{ MenuItem.dish }}</v-list-item-title
                >
              </v-col>
              <v-col cols="1" class>
                <router-link class="category-link" :to="'/home/'">
                  <v-icon>far fa-heart</v-icon>
                </router-link>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-list-item-subtitle class>
                {{ MenuItem.description }}
              </v-list-item-subtitle>
            </v-row>
            <v-row>
              <v-col class="">
                <v-card-actions>
                  <v-chip
                    color="green"
                    label
                    outlined
                    v-show="checkIsVegetarisch(MenuItem)"
                    >Vegetarisch</v-chip
                  >
                </v-card-actions>
              </v-col>
              <v-spacer></v-spacer>
              <v-col class="pa-0 ma-0 d-flex align-center text-end  ">
                <v-flex>{{ MenuItem.price }} €</v-flex>
              </v-col>
            </v-row>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </router-link>
  </v-container>
</template>

<script>
//var isVegetarisch = true;

export default {
  props: {
    MenuItem: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  methods: {
    checkIsVegetarisch(MenuItem_obj) {
      if (MenuItem_obj.vegetarian) {
        return true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.category-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}

.v-card-style {
  background-color: white;
}
</style>
