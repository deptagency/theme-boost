import React from 'react'
import PropTypes from 'prop-types'
import TemplatesSlideInPanel from '../../../templates/slide-in-panel'
import OrganismsHeaderSlideIn from '../../base/header-slide-in'
import { FormattedMessage } from 'react-intl'

const WriteReviewPanel = ({ isOpen, onClose }) => {
    return (
        <TemplatesSlideInPanel
            key='2'
            isOpen={isOpen}
            from='right'
            header={<OrganismsHeaderSlideIn
                onClose={onClose}
                title={<FormattedMessage id='writeReview' />}
                showRightCloseIcon={false}
            />}
            >
            WriteReviewPanel
        </TemplatesSlideInPanel>
    )
}

WriteReviewPanel.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
}

WriteReviewPanel.defaultProps = {
    isOpen: false,
    onClose: () => {},
}

export default WriteReviewPanel
