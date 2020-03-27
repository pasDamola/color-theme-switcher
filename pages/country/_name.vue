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
      <v-spacer></v-spacer>
      <v-flex sm6 md3>
        <p>
          <b style="font-weight: 800, font-size: 100px">{{
            oneCountry.name
          }}</b>
        </p>
        <p><b>Native Name:</b>{{ oneCountry.nativeName }}</p>
        <p><b>Population:</b>{{ oneCountry.population }}</p>
        <p><b>Region:</b>{{ oneCountry.region }}</p>
        <p><b>Sub Region:</b>{{ oneCountry.subregion }}</p>
        <p><b>Capital:</b>{{ oneCountry.capital }}</p>
      </v-flex>
      <v-flex sm6 md3>
        <p><b>Top Level Domain:</b>{{ oneCountry.topLevelDomain[0] }}</p>
        <p><b>Currencies:</b>{{ oneCountry.currencies[0]['name'] }}</p>
        <div>
          <b>Languages:</b>
          <span v-for="(language, id) in oneCountry.languages" :key="id">
            {{ language['name'], }}
          </span>
        </div>
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
