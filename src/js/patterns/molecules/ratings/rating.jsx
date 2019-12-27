import React from 'react'
import PropTypes from 'prop-types'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import { FormattedMessage } from 'react-intl'
import { ReactComponent as StarSmallFull } from '../../../../icons/star-small-full.svg'
import { ReactComponent as StarSmallEmpty } from '../../../../icons/star-small-empty.svg'

const MoleculesRating = ({ counterMessage, className }) => {
    return (
        <div className={className}>
            <div className='c-rating o-flex o-flex--center'>
                {[1, 2, 3, 4, 5].map((s, i) => {
                    return i < 3 ? <StarSmallFull className='o-flex__item' key={i} /> : <StarSmallEmpty className='o-flex__item' key={i} />
                })}
            </div>
            {counterMessage ?
                <div className='u-text-s t-text-quiet'>
                    <FormattedMessage id='product.reviewsWithCount' values={{ count: 7 }} />
                </div>
            : null}

        </div>
    )
}

MoleculesRating.propTypes = {
    className: PropTypes.string,
    counterMessage: PropTypes.bool,
}

MoleculesRating.defaultProps = {
    className: '',
    counterMessage: false,
}

export default ComponentInjector.return('MoleculesRating', MoleculesRating)
