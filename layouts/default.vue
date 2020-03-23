<template>
  <v-app>
    <v-app-bar fixed>
      <v-container>
        <v-layout justify-space-between align-center>
          Where in the World?
          <v-spacer></v-spacer>
          <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
            <v-icon>mdi-weather-night</v-icon>
          </v-btn>
          Dark Mode
        </v-layout>
      </v-container>
    </v-app-bar>
    <v-content style="padding: 64px 0px 0px 0px;">
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
<style></style>
