export const state = () => ({
  allCountries: [],
  allCountryRegions: [],
  oneCountry: []
})

export const mutations = {
  LOAD_COUNTRIES(state, countries) {
    state.allCountries = countries
  },
  LOAD_COUNTRY_REGIONS(state, regions) {
    state.allCountryRegions = regions
  },
  LOAD_ONE_COUNTRY(state, country) {
    state.oneCountry = country
  }
}
