import React from 'react'
import PropTypes from 'prop-types'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import { FormattedMessage } from 'react-intl'
import { ReactComponent as FullSmallStar } from '../../../../icons/full-small-star.svg'
import { ReactComponent as EmptySmallStar } from '../../../../icons/empty-small-star.svg'

const MoleculesRating = ({ className }) => {
    return (
        <div>
            <div className='c-rating o-flex o-flex--center'>
                {[1, 2, 3, 4, 5].map((s, i) => {
                    return i < 3 ? <FullSmallStar key={i} /> : <EmptySmallStar key={i} />
                })}
            </div>
            <div className='u-text-s t-text-quiet'>
                <FormattedMessage id='product.reviewsWithCount' values={{ count: 7 }} />
            </div>

        </div>
    )
}

MoleculesRating.propTypes = {
    // outerClassName: PropTypes.string,
    className: PropTypes.string,
}

MoleculesRating.defaultProps = {
    // outerClassName: '',
    className: '',
}

export default ComponentInjector.return('MoleculesRating', MoleculesRating)
