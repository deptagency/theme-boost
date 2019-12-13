import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import classnames from 'classnames'
import { ReactComponent as ChevronDown } from '../../../../icons/chevronDown.svg'
import { ReactComponent as YellowTick } from '../../../../icons/yellow-tick.svg'
import { ReactComponent as SmallTruck } from '../../../../icons/truck-small.svg'
import Collapsible from 'react-collapsible'
import ReviewsPanel from '../../organisms/products/panels/reviews-panel'
import DetailsMobile from './more-info/details-mobile'
import { moreInfoMobile, marginRight10, marginRight16 } from './more-info.module.scss'

const OrganismsMoreInfoProductMobile = ({ product, variant }) => {
    const [reviewsOpen, setReviewsOpen] = useState(false)
    const [isDescriptionFocused, setIsDescriptionFocused] = useState(false)
    const [isShippingFocused, setIsShippingFocused] = useState(false)
    const [isReviewsFocused, setIsReviewsFocused] = useState(false)

    return (
        <nav role='navigation' className={`${moreInfoMobile} o-distance-m o-prevent-space`}>
            <span className='c-divider o-distance-m'/>
            <div className='o-distance-m'>
                <Collapsible
                    onOpening={() => {
                        setIsDescriptionFocused(true)
                    }}
                    onClosing={() => {
                        setIsDescriptionFocused(false)
                    }}
                    trigger={
                        <div
                            className={classnames({
                                'c-referal': true,
                                'is-focused': isDescriptionFocused,
                            })}
                        >
                            <h3 className='c-title-level-4 c-referal__body'><FormattedMessage id='product.description'/>
                            </h3>
                            <ChevronDown className='c-icon c-referal__icon t-text-quiet'/>
                        </div>
                    }
                >
                    <DetailsMobile variant={variant}/>
                </Collapsible>
            </div>
            <span className='c-divider o-distance-m'/>
            <div className='o-distance-m'>
                <Collapsible
                    onOpening={() => {
                        setIsShippingFocused(true)
                    }}
                    onClosing={() => {
                        setIsShippingFocused(false)
                    }}
                    trigger={
                        <div
                            className={classnames({
                                'c-referal': true,
                                'is-focused': isShippingFocused,
                            })}
                        >
                            <h3 className='c-title-level-4 c-referal__body'><FormattedMessage id='product.shipping'/>
                            </h3>
                            <ChevronDown className='c-icon c-referal__icon t-text-quiet'/>
                        </div>
                    }
                >
                    <div className='o-distance'>
                        <div className='o-list-bare'>
                            <div className='o-list-bare__item o-block-short o-block-short--centered'>
                                <YellowTick className={marginRight10}/>
                                <div className='o-block-short__body u-text-s'>
                                    <FormattedMessage id='product.freeShipping'/>
                                </div>
                            </div>
                            <div className='o-list-bare__item o-block-short o-block-short--centered'>
                                <YellowTick className={marginRight10}/>
                                <div className='o-block-short__body u-text-s'>
                                    <FormattedMessage id='product.returnPolicy100days'/>
                                </div>
                            </div>
                        </div>
                        <div className='o-block-short o-distance-m'>
                            <SmallTruck className={marginRight16}/>
                            <div className='o-block-short__body'>
                                <p className='u-text-strong'><FormattedMessage id='product.standardDelivery.title'/></p>
                                <p className='o-distance-xs'><FormattedMessage id='product.standardDelivery.message'/>
                                </p>
                            </div>
                        </div>
                    </div>
                </Collapsible>
            </div>
            <span className='c-divider o-distance-m'/>
            <div className='o-distance-m'>
                <div
                    className={classnames({
                        'c-referal': true,
                        'is-focused': isReviewsFocused,
                    })}
                    onClick={() => {
                        setIsReviewsFocused(!isReviewsFocused)
                        setTimeout(() => {
                            setReviewsOpen(true)
                        }, 50)
                    }}
                >
                    <h3 className='c-title-level-4 c-referal__body'><FormattedMessage id='product.reviewsWithCount'
                                                                                      values={{ count: 7 }}/></h3>
                    <ChevronDown className='c-icon c-referal__icon t-text-quiet'/>
                </div>
            </div>
            <span className='c-divider o-distance-m'/>

            <ReviewsPanel
                isOpen={reviewsOpen}
                onClose={() => {
                    setIsReviewsFocused(!isReviewsFocused)
                    setReviewsOpen(false)
                }}
                product={product}
                variant={variant}
            />

        </nav>
    )
}

OrganismsMoreInfoProductMobile.propTypes = {
    product: PropTypes.object.isRequired,
    variant: PropTypes.object.isRequired,
}

export default OrganismsMoreInfoProductMobile
