<template>
  <v-container>
    <p>{{ oneCountry.capital }}</p>
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
  }
}
</script>
