import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import OrganismsHeaderSlideIn from '../../base/header-slide-in'
import Button from '../../../atoms/buttons/button'
import TemplatesSlideInPanel from '../../../templates/slide-in-panel'
import ReviewsList from '../reviews-list'
import WriteReviewPanel from './write-review-panel'
import { reviewsPanel,
    reviewBtn,
    ratingQuestion,
 } from './reviews-panel.module.scss'

const ReviewsPanel = ({ isOpen, onClose, product }) => {
    const [reviewFormOpen, setReviewFormOpen] = useState(false)

    const SubmitReviewButton = () => {
        return (
            <Button
                type='quiet'
                className={`${reviewBtn} o-distance-l`}
                size='boss'
                onClick={() => { setReviewFormOpen(true) }}
                >
                <FormattedMessage id='writeReview' />
            </Button>
        )
    }

    return [
        <TemplatesSlideInPanel
            key='1'
            isOpen={isOpen}
            header={<OrganismsHeaderSlideIn
                onClose={onClose}
                title={<FormattedMessage id={'reviews'} />}
                showLeftBackIcon={false}
            />}
            >
            <div className={`${reviewsPanel}`}>
                <div className={`${ratingQuestion} u-text-strong`}><FormattedMessage id='ratingQuestion' /></div>
                <SubmitReviewButton />
                <ReviewsList />
                <SubmitReviewButton />
            </div>
        </TemplatesSlideInPanel>,
        <WriteReviewPanel key='2'
            isOpen={reviewFormOpen}
            onClose={() => { setReviewFormOpen(false) }}
            product={product}
        />,
    ]
}

ReviewsPanel.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    product: PropTypes.object.isRequired,
}

WriteReviewPanel.defaultProps = {
    isOpen: false,
    onClose: () => {},
}

export default ReviewsPanel
