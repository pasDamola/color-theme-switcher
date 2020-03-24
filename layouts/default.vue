<template>
  <v-app color="contain">
    <v-app-bar fixed color="header">
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
    <v-content
      style="padding: 64px 0px 0px 0px;"
      :style="{ background: $vuetify.theme.currentTheme.contain }"
    >
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    theme() {
      console.log(this.$vuetify.theme.currentTheme)
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    }
  }
}
</script>
