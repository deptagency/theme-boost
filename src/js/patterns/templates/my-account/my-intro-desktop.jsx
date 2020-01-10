import React, { Component } from 'react'

import Button from '../../atoms/buttons/button'
import PageHeader from '../../organisms/base/header-page'
import HeaderMobile from '../../organisms/base/header-mobile'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class MyAccountIntroDesktop extends Component {
    render () {
        return (
            <>
                <HeaderMobile />
                <div className='o-container'>
                    <h2 className='c-title-area'>Hello Max,</h2>
                    <p className=''>welcome to your user account! Here you can manage your orders, returns and account information directly.</p>
                    <div className='o-distance-l'>
                        <p className='c-title-level-3'>The latest updates to your order</p>
                        <div className='c-frame o-distance-m'>
                            <div className='o-flex o-flex--justified'>
                                <div className='o-flex__item'>
                                    <h3 className='c-title-level-4'>The package has been sent</h3>
                                    <div className='o-distance-m u-text-s'>
                                        <p className='u-text-strong'>59,95 €</p>
                                        <time className='u-text-color-quiet'>12. Mai 2019</time>
                                    </div>
                                    <div className='o-distance-m u-text-s'>
                                        <p className='u-text-color-quiet'>Bestellnummer</p>
                                        <p className='u-text-strong'>P22KI23IACV</p>
                                    </div>
                                    <div className='o-distance-m'>
                                        <a href='' title='' className='c-link'>Bestellung ansehen</a>
                                    </div>
                                </div>
                                <div className='o-flex__item'>
                                    <div className='o-flex'>
                                        <div className='o-flex__item'>
                                            <img src='https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073328_1_medium.jpg' alt='' />
                                        </div>
                                        <div className='o-flex__item'>
                                            <img src='https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073328_1_medium.jpg' alt='' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='o-distance-m'>
                        <a href='' title='' className='c-button c-button--primary'>Alle Bestellungen ansehen</a>
                    </div>
                </div>
            </>
        )
    }
}

MyAccountIntroDesktop.propTypes = {
}

MyAccountIntroDesktop.defaultProps = {
}

export default ComponentInjector.return('MyAccountIntroDesktop', MyAccountIntroDesktop)
