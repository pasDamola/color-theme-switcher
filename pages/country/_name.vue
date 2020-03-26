<template>
  <v-container>
    <v-row class="mt-9">
      <v-btn small color="header" elevation="5" @click="goHome()"
        ><v-icon left>mdi-arrow-left</v-icon>Back</v-btn
      >
    </v-row>
    <v-row class="mt-10">
      <v-col cols="8">
        <img :src="oneCountry.flag" style="max-width: 150%" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from 'axios'
import { mapState } from 'vuex'
import Config from '../../services/Config'

export default {
  async asyncData({ store, params, route }) {
    const countryName = route.params.name
    const countryResponse = await axios.get(
      `${
        Config.endPoints.getCountryByName
      }${countryName.toLowerCase()}?fullText=true`
    )
    console.log(countryResponse)
    const oneCountry = countryResponse.data[0]
    store.commit(Config.mutations.LOAD_ONE_COUNTRY, oneCountry)
  },
  data() {
    return {
      name: this.$route.params.name
    }
  },
  computed: {
    ...mapState({
      oneCountry: (state) => state.oneCountry
    })
  },
  methods: {
    goHome() {
      this.$router.push({ path: '/' })
    }
  }
}
</script>
