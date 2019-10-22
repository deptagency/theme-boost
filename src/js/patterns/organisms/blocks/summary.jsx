import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class OrganismsSummary extends Component {
    render () {
        return (
            <div>
                <div className='o-summary'>
                    {this.props.subtotal ?
                        <Fragment>
                            <div className='o-summary__item'>
                                <p className='u-text-s u-text-strong'>
                          Zwischensumme
                                </p>
                            </div>
                            <div className='o-summary__item'>
                                <p className='u-text-s u-text-strong cart-summary--right'>
                          84,85 €
                                </p>
                            </div>
                        </Fragment>
                    : null}
                    <p className='o-summary__item u-text-s'>Versandkosten</p>
                    <p className='o-summary__item u-text-s cart-summary--right'>gratis</p>
                    <span className='o-summary__full-item c-divider' />
                    <div className='o-summary__item'>
                        <p className='u-text-strong'>
                      Gesamtbetrag
                        </p>
                        <p className='u-text-s t-text-quiet'>inkl. Mwst.</p>
                    </div>
                    <div className='o-summary__item'>
                        <p className='u-text-m u-text-strong cart-summary--right'>84,85 €</p>
                    </div>
                </div>
            </div>
        )
    }
}

OrganismsSummary.propTypes = {
    subtotal: PropTypes.Bool,
}

OrganismsSummary.defaultProps = {
    subtotal: '',
}

export default ComponentInjector.return('OrganismsSummary', OrganismsSummary)
