import React from 'react'
import PropTypes from 'prop-types'
import Button from './button'
import { FormattedMessage } from 'react-intl'

const BackButton = ({ onClick }) => {
    return (
        <Button size='boss' type='quiet' onClick={onClick}>
            <FormattedMessage id={'filters.back'} />
        </Button>
    )
}

BackButton.propTypes = {
    onClick: PropTypes.func,
}

export default BackButton
