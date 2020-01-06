import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import AtomsPrice from '../../atoms/prices/price'

const OrganismsSummary = ({ sum, subtotal }) => {
    return (
        <div>
            <div className='o-summary'>
                {subtotal ?
                    <Fragment>
                        <div className='o-summary__item'>
                            <p className='u-text-s u-text-strong'>
                                <FormattedMessage id='cart.subtotal' />
                            </p>
                        </div>
                        <div className='o-summary__item o-summary__item--offset'>
                            <p className='u-text-s u-text-strong'>
                                <AtomsPrice value={sum} />
                            </p>
                        </div>
                    </Fragment>
                : null}
                <p className='o-summary__item u-text-s'>
                    <FormattedMessage id='cart.shippingCosts' />
                </p>
                <p className='o-summary__item o-summary__item--offset u-text-s'>
                    <FormattedMessage id='cart.gratis' />
                </p>
                <span className='o-summary__full-item c-divider' />
                <div className='o-summary__item'>
                    <p className='u-text-strong'>
                        <FormattedMessage id='cart.totalAmount' />
                    </p>
                    <p className='u-text-s t-text-quiet'><FormattedMessage id='cart.inclVat' /></p>
                </div>
                <div className='o-summary__item o-summary__item--offset'>
                    <p className='u-text-m u-text-strong'><AtomsPrice value={sum} /></p>
                </div>
            </div>
        </div>
    )
}

OrganismsSummary.propTypes = {
    subtotal: PropTypes.string,
    sum: PropTypes.number.isRequired,
}

OrganismsSummary.defaultProps = {
    subtotal: '',
}

export default ComponentInjector.return('OrganismsSummary', OrganismsSummary)
