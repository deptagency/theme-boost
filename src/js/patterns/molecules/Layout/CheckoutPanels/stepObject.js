import PropTypes from 'prop-types'

export const stepObject = PropTypes.shape({
    name: PropTypes.object.isRequired,
    component: PropTypes.any.isRequired,
    errorMessage: PropTypes.string,
})
