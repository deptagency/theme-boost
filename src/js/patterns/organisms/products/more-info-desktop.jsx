import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import classnames from 'classnames'
import { ReactComponent as ChevronDown } from '../../../../icons/chevronDown.svg'
import { ReactComponent as YellowTick } from '../../../../icons/yellow-tick.svg'
import { ReactComponent as SmallTruck } from '../../../../icons/truck-small.svg'
import Collapsible from 'react-collapsible'
import ReviewsPanel from '../../organisms/products/panels/reviews-panel'
import { marginRight10, marginRight16 } from './more-info.module.scss'

const OrganismsMoreInfoProductDesktop = ({ product }) => {
    const [reviewsOpen, setReviewsOpen] = useState(false)
    const [isDescriptionFocused, setIsDescriptionFocused] = useState(false)
    const [isShippingFocused, setIsShippingFocused] = useState(false)
    const [isReviewsFocused, setIsReviewsFocused] = useState(false)

    return (
        <nav role='navigation' className='o-distance-m o-prevent-space'>
            <span className='c-divider o-distance-m' />
            <div className='o-distance-m'>
                <Collapsible
                    onOpening={() => { setIsDescriptionFocused(true) }}
                    onClosing={() => { setIsDescriptionFocused(false) }}
                    trigger={
                        <div
                            className={classnames({
                                'c-referal': true,
                                'is-focused': isDescriptionFocused,
                            })}
                        >
                            <h3 className='c-title-level-4 c-referal__body'><FormattedMessage id='product.description' /></h3>
                            <ChevronDown className='c-icon c-referal__icon t-text-quiet' />
                        </div>
                    }
                >
                    <div className='o-distance'>
                        <dl className='o-detaillist o-distance-m'>
                            <dt className='t-text-quiet'><FormattedMessage id='product.materialOuterFabric' /></dt>
                            <dd className='u-text-strong'>100% <FormattedMessage id='product.viscose' /></dd>
                            <dt className='t-text-quiet'><FormattedMessage id='product.lining' /></dt>
                            <dd className='u-text-strong'>100% <FormattedMessage id='product.viscose' /></dd>
                        </dl>
                        <h3 className='c-title-level-3 o-distance'><FormattedMessage id='product.moreAboutThisProduct' /></h3>
                        <dl className='o-detaillist o-distance-m'>
                            <dt className='t-text-quiet'><FormattedMessage id='product.cut' /></dt>
                            <dd className='u-text-strong'>100% <FormattedMessage id='product.viscose' /></dd>
                            <dt className='t-text-quiet'><FormattedMessage id='product.clasp' /></dt>
                            <dd className='u-text-strong'><FormattedMessage id='product.lacing' /></dd>
                            <dt className='t-text-quiet'><FormattedMessage id='product.style' /></dt>
                            <dd className='u-text-strong'>{product.attributes.style.label}</dd>
                            <dt className='t-text-quiet'><FormattedMessage id='product.itemNumber' /></dt>
                            <dd className='u-text-strong'>{product.attributes.matrixId}</dd>
                        </dl>
                    </div>
                </Collapsible>
            </div>
            <span className='c-divider o-distance-m' />
            <div className='o-distance-m'>
                <Collapsible
                    onOpening={() => { setIsShippingFocused(true) }}
                    onClosing={() => { setIsShippingFocused(false) }}
                    trigger={
                        <div
                            className={classnames({
                                'c-referal': true,
                                'is-focused': isShippingFocused,
                            })}
                        >
                            <h3 className='c-title-level-4 c-referal__body'><FormattedMessage id='product.shipping' /></h3>
                            <ChevronDown className='c-icon c-referal__icon t-text-quiet' />
                        </div>
                    }
                >
                    <div className='o-distance'>
                        <div className='o-list-bare'>
                            <div className='o-list-bare__item o-block-short o-block-short--centered'>
                                <YellowTick className={marginRight10} />
                                <div className='o-block-short__body u-text-s'>
                                    <FormattedMessage id='product.freeShipping' />
                                </div>
                            </div>
                            <div className='o-list-bare__item o-block-short o-block-short--centered'>
                                <YellowTick className={marginRight10} />
                                <div className='o-block-short__body u-text-s'>
                                    <FormattedMessage id='product.returnPolicy100days' />
                                </div>
                            </div>
                        </div>
                        <div className='o-block-short o-distance-m'>
                            <SmallTruck className={marginRight16} />
                            <div className='o-block-short__body'>
                                <p className='u-text-strong'><FormattedMessage id='product.standardDelivery.title' /></p>
                                <p className='o-distance-xs'><FormattedMessage id='product.standardDelivery.message' /></p>
                            </div>
                        </div>
                    </div>
                </Collapsible>
            </div>
            <span className='c-divider o-distance-m' />
            <div className='o-distance-m'>
                <div
                    className={classnames({
                        'c-referal': true,
                        'is-focused': isReviewsFocused,
                    })}
                    onClick={() => {
                        setIsReviewsFocused(!isReviewsFocused)
                        setTimeout(() => { setReviewsOpen(true) }, 50)
                    }}
                >
                    <h3 className='c-title-level-4 c-referal__body'><FormattedMessage id='product.reviews' values={{ count: 7 }} /></h3>
                    <ChevronDown className='c-icon c-referal__icon t-text-quiet' />
                </div>
            </div>
            <span className='c-divider o-distance-m' />

            <ReviewsPanel
                isOpen={reviewsOpen}
                onClose={() => {
                    setIsReviewsFocused(!isReviewsFocused)
                    setReviewsOpen(false)
}}
                product={product}
            />

        </nav>
    )
}

OrganismsMoreInfoProductDesktop.propTypes = {
    product: PropTypes.object.isRequired,
}

export default OrganismsMoreInfoProductDesktop
