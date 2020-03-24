export const state = () => ({
  allCountries: [],
  allCountryRegions: []
})

export const mutations = {
  LOAD_COUNTRIES(state, countries) {
    state.allCountries = countries
  },
  LOAD_COUNTRY_REGIONS(state, regions) {
    state.allCountryRegions = regions
  }
}
