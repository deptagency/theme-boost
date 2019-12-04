import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import TemplatesSlideInPanel from '../../../templates/slide-in-panel'
import OrganismsHeaderSlideIn from '../../base/header-slide-in'
import SmallStars from '../stars/small-stars'

import { writeReviewPanel,
    productOverivew,
    nameAndStars,
    productName,
    productDesigner,
    rateMsg,
    reviewTextStyle,
} from './write-review-panel.module.scss'
import Button from '../../../atoms/buttons/button'

const WriteReviewPanel = ({ isOpen, onClose, product }) => {
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

            <div className={`${writeReviewPanel} u-text-m`}>

                <FormattedMessage id='order.reviewQuestion' />

                <div className={productOverivew}>
                    <div
                        style={{
                            backgroundImage: `url(${product.images[0]})`,
                            height: '131px',
                            width: '100px',
                            backgroundSize: 'contain',
                            margin: '0 16px 45px 0',
                        }}
                    />

                    <div className={nameAndStars}>
                        <div className={`${productName} u-text-s`}>
                            {product.name}
                        </div>

                        <div className={`${productDesigner} u-text-xs`}>
                            {product.attributes.designer && product.attributes.designer.label}
                        </div>

                        <SmallStars saveRating={setRating} />

                        <div className={`${rateMsg} u-text-xxs`}>
                            <FormattedMessage id='order.pleaseRate' />
                        </div>

                    </div>

                </div>

                <div className={`${reviewTextStyle} u-text-s`}><FormattedMessage id='order.yourReview' /></div>
                <textarea
                    type='text'
                    className='o-distance-xs'
                    rows='5'
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
}

WriteReviewPanel.defaultProps = {
    isOpen: false,
    onClose: () => {},
}

export default WriteReviewPanel
