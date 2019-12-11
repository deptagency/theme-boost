import React from 'react'
import PropTypes from 'prop-types'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import { FormattedMessage } from 'react-intl'
import { ReactComponent as FullSmallStar } from '../../../../icons/full-small-star.svg'
import { ReactComponent as EmptySmallStar } from '../../../../icons/empty-small-star.svg'

const MoleculesStaticRating = ({ outerClassName, className, rating, reviewsCount }) => {
    return (
        <div className={outerClassName}>
            <div className={`c-rating o-flex o-flex--center ${className}`}>
                {[1, 2, 3, 4, 5].map((s, i) => {
                    return i < rating ? <FullSmallStar key={i} /> : <EmptySmallStar key={i} />
                })}
            </div>
            <div className='u-text-s t-text-quiet padding-left--8'>
                {reviewsCount} <FormattedMessage id='product.reviews' />
            </div>

        </div>
    )
}

MoleculesStaticRating.propTypes = {
    outerClassName: PropTypes.string,
    className: PropTypes.string,
    rating: PropTypes.number.isRequired,
    reviewsCount: PropTypes.number.isRequired,
}

MoleculesStaticRating.defaultProps = {
    outerClassName: '',
    className: '',
}

export default ComponentInjector.return('MoleculesStaticRating', MoleculesStaticRating)
