<template>
  <v-app>
    <v-app-bar app color="#96C74E" dense dark elevate-on-scroll>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title class="title font-weight-regular"
        >Presto</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-btn icon v-on="false">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
    <v-bottom-navigation
      app
      :value="activeBtn"
      horizontal
      grow
      color="#96C74E"
      fill-height
    >
      <v-row>
        <v-layout align-center>
          <v-flex fill-height></v-flex>
          <v-btn to="/">
            <span>Home</span>
            <v-icon>fa-home</v-icon>
          </v-btn>
          <v-btn to="/Overview">
            <span>Übersicht</span>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-flex fill-height></v-flex>
        </v-layout>
      </v-row>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data() {
    return {
      activeBtn: 1,
    };
  },
};
</script>
