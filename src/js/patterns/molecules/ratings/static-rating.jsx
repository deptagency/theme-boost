import React from 'react'
import PropTypes from 'prop-types'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import { FormattedMessage } from 'react-intl'
import { ReactComponent as FullSmallStar } from '../../../../icons/star-small-full.svg'
import { ReactComponent as EmptySmallStar } from '../../../../icons/star-small-empty.svg'

const StaticRating = ({ outerClassName, className, rating, reviewsCount }) => {
    return (
        <div className={outerClassName}>
            <div className={`c-rating o-flex o-flex--center ${className}`}>
                {[1, 2, 3, 4, 5].map((s, i) => {
                    return i < rating ? <FullSmallStar className='c-rating__symbol is-active o-flex__item' key={i} /> : <EmptySmallStar className='o-flex__item' key={i} />
                })}
            </div>
            <div className='u-text-s u-text-color-quiet o-distance-s'>
                {reviewsCount} <FormattedMessage id='product.reviews' />
            </div>

        </div>
    )
}

StaticRating.propTypes = {
    outerClassName: PropTypes.string,
    className: PropTypes.string,
    rating: PropTypes.number.isRequired,
    reviewsCount: PropTypes.number.isRequired,
}

StaticRating.defaultProps = {
    outerClassName: '',
    className: '',
}

export default ComponentInjector.return('StaticRating', StaticRating)
