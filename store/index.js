export const state = () => ({
  allCountries: []
})

export const getters = {
  getRegions: (state) => {
    return state.allCountries.map((country) => country.region)
  }
}

export const mutations = {
  LOAD_COUNTRIES(state, countries) {
    state.allCountries = countries
  }
}
