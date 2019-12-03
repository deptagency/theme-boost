import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import OrganismsHeaderSlideIn from '../../base/header-slide-in'
import Button from '../../../atoms/buttons/button'
import TemplatesSlideInPanel from '../../../templates/slide-in-panel'
import ReviewsList from '../reviews-list'
import WriteReviewPanel from './write-review-panel'

const ReviewsPanel = ({ isOpen, onClose }) => {
    const [reviewFormOpen, setReviewFormOpen] = useState(false)

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

            {/* reviews panel */}
            <div className='c-box'>
                <div className='u-text-strong'>
                    {/* Translate this */}
                    Dieses Produkt hat Bewertungen. Möchten Sie das Produkt bewerten?
                </div>
                <Button type='quiet' className='o-distance-m' size='boss' onClick={() => { setReviewFormOpen(true) }}>
                    Bewertung abgeben
                </Button>

                <ReviewsList />

                <Button type='quiet' className='o-distance-l' size='boss' onClick={() => { setReviewFormOpen(true) }}>
                    Bewertung abgeben
                </Button>
            </div>
            {/* end of reviews panel */}
        </TemplatesSlideInPanel>,
        <WriteReviewPanel key='2'
            isOpen={reviewFormOpen}
            onClose={() => { setReviewFormOpen(false) }}
        />,

    ]
}

ReviewsPanel.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
}

WriteReviewPanel.defaultProps = {
    isOpen: false,
    onClose: () => {},
}

export default ReviewsPanel
