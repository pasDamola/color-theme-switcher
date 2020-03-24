<template>
  <v-container>
    <v-row>
      <v-col cols="9">
        <v-text-field
          v-model="search"
          hide-details
          prepend-icon="mdi-magnify"
          single-line
          dense
          solo
          placeholder="Search for a country..."
          style="width : 50%"
          background-color="header"
        ></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-select
          v-model="selectedRegion"
          :items="allRegions"
          label="Solo field"
          dense
          solo
          placeholder="Filter By Region"
          background-color="header"
          item-color="header"
          @input="selectRegion()"
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(country, id) in allCountries" :key="id" cols="12" sm="3">
        <v-card class="mx-auto">
          <v-img
            class="white--text align-end"
            height="200px"
            :src="country.flag"
          >
          </v-img>
          <v-card-title class="pb-0">{{ country.name }}</v-card-title>
          <v-spacer></v-spacer>
          <v-card-text>
            <div>
              Population:
              {{
                country.population
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              }}
            </div>
            <div>Region: {{ country.region }}</div>
            <div>Capital: {{ country.capital }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import Config from '../services/Config'

export default {
  async asyncData({ store, params }) {
    const countriesResponse = await axios.get(Config.endPoints.allCountries)
    const allCountries = countriesResponse.data
    store.commit(Config.mutations.LOAD_COUNTRIES, allCountries)
    const allRegions = allCountries.map((country) => country.region)
    store.commit(Config.mutations.LOAD_COUNTRY_REGIONS, allRegions)
  },
  data() {
    return {
      selectedRegion: null,
      search: ''
    }
  },
  computed: {
    ...mapState({
      allCountries: (state) => state.allCountries,
      allRegions: (state) => state.allCountryRegions
    })
  },
  methods: {
    async selectRegion() {
      const regionPostData = this.selectedRegion
      console.log(regionPostData)
      const countriesByRegionResponse = await axios.get(
        `${
          Config.endPoints.fetchCountriesByRegion
        }${regionPostData.toLowerCase()}`
      )
      console.log(countriesByRegionResponse)
      const countriesByRegion = countriesByRegionResponse.data
      console.log(countriesByRegion)
      this.$store.commit(Config.mutations.LOAD_COUNTRIES, countriesByRegion)
    }
  }
}
</script>
<style lang="scss" scoped>
.v-menu__content {
  .theme--dark.v-list {
    background-color: #2b3945;
  }
  .theme--light.v-list {
    background-color: #ffffff;
  }
}
</style>
