const baseUrl = 'https://restcountries.eu/rest/v2/'

const Config = {
  baseUrl,
  endPoints: {
    allCountries: `${baseUrl}all`,
    fetchCountriesByRegion: `${baseUrl}region/`,
    getCountryByName: `${baseUrl}name/`
  },
  mutations: {
    LOAD_COUNTRIES: 'LOAD_COUNTRIES',
    LOAD_COUNTRY_REGIONS: 'LOAD_COUNTRY_REGIONS'
  }
}

export default Config
