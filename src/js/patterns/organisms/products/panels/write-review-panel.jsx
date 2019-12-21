import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import TemplatesSlideInPanel from '../../../templates/slide-in-panel'
import OrganismsHeaderSlideIn from '../../base/header-slide-in'
import SmallStars from '../stars/small-stars'
import Button from '../../../atoms/buttons/button'

const WriteReviewPanel = ({ isOpen, onClose, product, image, designer }) => {
    const [ rating, setRating ] = useState(0)
    const [reviewText, setReviewText] = useState('')

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

            <div>

                <p className='c-title-level-3'><FormattedMessage id='order.reviewQuestion' /></p>

                <div className='o-bundle o-distance-m'>
                    {image &&
                        <img src={image} className='o-bundle__asset' alt='Asset' />
                    }

                    <div className='o-bundle__header'>
                        <div className='o-bundle__header__full-column'>
                            <h2 className='c-title-level-4'>{product.name}</h2>
                            <p className='u-text-s t-text-quiet'>
                                {designer && designer.label}
                            </p>
                        </div>
                    </div>

                    <div className='o-bundle__body'>
                        <SmallStars saveRating={setRating} />

                        <p className='u-text-s t-text-quiet'>
                            <FormattedMessage id='order.pleaseRate' />
                        </p>

                    </div>

                </div>

                <label htmlFor='review' className='c-form-label o-distance-l'><FormattedMessage id='order.yourReview' /></label>
                <textarea
                    type='text'
                    className='o-distance-xs'
                    rows='5'
                    id='review'
                    value={reviewText}
                    onChange={(event => { return (setReviewText(event.target.value)) })}
                />

                <Button
                    size='boss'
                    type='primary'
                    className='o-distance-m'
                    onClick={() => {
                        console.log(`${rating} stars. Review: "${reviewText}"`)
                    }}
                >
                    <FormattedMessage id='submit' />
                </Button>

            </div>

        </TemplatesSlideInPanel>
    )
}

WriteReviewPanel.propTypes = {
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

export default WriteReviewPanel
