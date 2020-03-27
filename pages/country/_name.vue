<template>
  <v-container>
    <v-row class="mt-9">
      <v-btn small color="header" elevation="5" @click="goHome()"
        ><v-icon left>mdi-arrow-left</v-icon>Back</v-btn
      >
    </v-row>
    <v-layout class="mt-10" wrap>
      <v-flex sm12 md6>
        <img :src="oneCountry.flag" style="max-width: 100%" />
      </v-flex>
      <v-flex sm12 md6>
        <img :src="oneCountry.flag" style="max-width: 100%" />
      </v-flex>
    </v-layout>
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
