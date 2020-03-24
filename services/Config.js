const baseUrl = 'https://restcountries.eu/rest/v2/'

const Config = {
  baseUrl,
  endPoints: {
    allCountries: `${baseUrl}all`
  },
  mutations: {
    LOAD_COUNTRIES: 'LOAD_COUNTRIES'
  }
}

export default Config
