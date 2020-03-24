export const state = () => ({
  allCountries: []
})

export const getters = {}

export const mutations = {
  LOAD_COUNTRIES(state, countries) {
    state.allCountries = countries
  }
}
