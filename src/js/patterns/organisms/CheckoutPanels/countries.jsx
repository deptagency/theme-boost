import PropTypes from 'prop-types'
import { intlShape } from 'react-intl'

const convertToCountryName = (intl, code) => {
    return intl.formatMessage({ id: 'country.' + code })
}

convertToCountryName.propTypes = {
    intl: intlShape.isRequired,
    code: PropTypes.string.isRequired,
}

export { convertToCountryName }
