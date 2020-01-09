import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import HeaderSlideIn from '../../base/header-slide-in'
import Button from '../../../atoms/buttons/button'
import SlideInPanel from '../../../templates/slide-in-panel'
import ReviewsList from '../reviews-list'
import WriteReviewPanel from './write-review-panel'

const ReviewsPanel = ({ isOpen, onClose, product, image, designer }) => {
    const [reviewFormOpen, setReviewFormOpen] = useState(false)

    const SubmitReviewButton = () => {
        return (
            <Button
                type='quiet'
                size='boss'
                onClick={() => { setReviewFormOpen(true) }}
                >
                <FormattedMessage id='writeReview' />
            </Button>
        )
    }

    return [
        <SlideInPanel
            key='1'
            isOpen={isOpen}
            header={<HeaderSlideIn
                onClose={onClose}
                title={<FormattedMessage id={'reviews'} />}
                showLeftBackIcon={false}
            />}
            footer={<SubmitReviewButton />}>
            <div className='u-text-strong'><FormattedMessage id='ratingQuestion' /></div>
            <div className='o-distance-m'>
                <SubmitReviewButton />
            </div>
            <ReviewsList />
        </SlideInPanel>,
        <WriteReviewPanel key='2'
            isOpen={reviewFormOpen}
            onClose={() => { setReviewFormOpen(false) }}
            product={product}
            image={image}
            designer={designer}
        />,
    ]
}

ReviewsPanel.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    product: PropTypes.object.isRequired,
    image: PropTypes.string,
    designer: PropTypes.object,
}

WriteReviewPanel.defaultProps = {
    isOpen: false,
    onClose: () => {},
}

export default ReviewsPanel
