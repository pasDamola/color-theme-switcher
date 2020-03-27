<template>
  <v-container grid-list-md>
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
      <v-flex sm12 md5>
        <v-layout wrap>
          <v-flex sm12 md5>
            <p>
              <b class="display-1">{{ oneCountry.name }}</b>
            </p>
            <p>Native Name:{{ oneCountry.nativeName }}</p>
            <p>Population:{{ oneCountry.population }}</p>
            <p>Region:{{ oneCountry.region }}</p>
            <p>Sub Region:{{ oneCountry.subregion }}</p>
            <p>Capital:{{ oneCountry.capital }}</p>
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex sm12 md5>
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
        <v-spacer></v-spacer>
        <v-layout wrap>
          <p v-if="oneCountry.borders.length > 0">
            <b>Border Countries:</b>
            <v-btn
              class="ma-auto"
              v-for="(border, id) in oneCountry.borders.slice(0, 3)"
              :key="id"
              color="header"
              >{{ border }}</v-btn
            >
          </p>
        </v-layout>
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
