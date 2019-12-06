import React from 'react'
import PropTypes from 'prop-types'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import { FormattedMessage } from 'react-intl'
import { ReactComponent as FullSmallStar } from '../../../../icons/full-small-star.svg'
import { ReactComponent as EmptySmallStar } from '../../../../icons/empty-small-star.svg'

const MoleculesRating = ({ className }) => {
    return (
        <div>
            <div className={`c-rating o-flex o-flex--center ${className}`}>
                {[1, 2, 3, 4, 5].map((s, i) => {
                    return i < 3 ? <FullSmallStar /> : <EmptySmallStar />
                })}
            </div>
            <div className='u-text-s t-text-quiet padding-left--8'>
                <FormattedMessage id='product.reviews' values={{ count: 7 }} />
            </div>

        </div>
    )
}

MoleculesRating.propTypes = {
    className: PropTypes.string,
}

MoleculesRating.defaultProps = {
    className: '',
}

export default ComponentInjector.return('MoleculesRating', MoleculesRating)
