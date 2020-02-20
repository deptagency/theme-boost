import React from 'react'
import PropTypes from 'prop-types'
import Button from './button'
import { FormattedMessage } from 'react-intl'

const SaveButton = ({ onClick }) => {
    return (
        <Button size='boss' type='primary' onClick={onClick}>
            <FormattedMessage id={'filters.save'} />
        </Button>
    )
}

SaveButton.propTypes = {
    onClick: PropTypes.func,
}

export default SaveButton
