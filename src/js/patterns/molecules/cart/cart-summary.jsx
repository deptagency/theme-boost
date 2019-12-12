import React from 'react'
import PropTypes from 'prop-types'

import OrganismsSummary from '../../organisms/blocks/summary'
import Button from '../../atoms/buttons/button'
import { FormattedMessage } from 'react-intl'
import { mobileMarginTop } from './cart-summary.module.scss'

const MoleculesCartSummary = ({ sum, outerClassName }) => {
    return (
        <div className={`${outerClassName}`}>
            <section className={`o-container ${mobileMarginTop}`}>
                <h2 className='c-title-level-3'><FormattedMessage id='cart.totalSum' /></h2>
                <div className='o-distance-s'>
                    <OrganismsSummary sum={sum} />
                    <p className='o-distance-m u-text-s t-text-quiet'>
                        <FormattedMessage id='cart.enterVouchers' />
                    </p>
                </div>
            </section>
            <div className='o-container o-distance'>
                <Button size='boss' type='primary'>
                    <FormattedMessage id='cart.checkout' />
                </Button>
            </div>
        </div>
    )
}

MoleculesCartSummary.propTypes = {
    sum: PropTypes.number.isRequired,
    outerClassName: PropTypes.string.isRequired,
}

export default MoleculesCartSummary
