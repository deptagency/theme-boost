import PropTypes from 'prop-types'
import { intlShape } from 'react-intl'

const convertToCountryName = (intl, code) => {
    return intl.formatMessage({ id: `country.${code}` })
}

const convertToStateName = (intl, country, state) => {
    return intl.formatMessage({ id: `state.${country}.${state}` })
}

const getCountryStates = (country) => {
    if (country === 'US') {
        return [
            'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA',
            'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM',
            'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA',
            'WV', 'WI', 'WY',
        ]
    }

    if (country === 'CA') {
        return [
            'AB', 'BC', 'MB', 'NB', 'NL', 'NT', 'NS', 'NU', 'ON', 'PE', 'QC', 'SK', 'YT',
        ]
    }

    return null
}

convertToCountryName.propTypes = {
    intl: intlShape.isRequired,
    code: PropTypes.string.isRequired,
}

convertToStateName.propTypes = {
    intl: intlShape.isRequired,
    country: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
}

getCountryStates.propTypes = {
    country: PropTypes.string.isRequired,
}

export { convertToCountryName, convertToStateName, getCountryStates }
