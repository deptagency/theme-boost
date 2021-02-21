import countryCodes from './countries.json'

const convertToCountryName = (code) => {
    return countryCodes.find(country => country.alpha2 === code).name
}

export { convertToCountryName }
