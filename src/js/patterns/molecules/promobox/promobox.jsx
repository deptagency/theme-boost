import React, { Component } from 'react'

import ComponentInjector from '../../../app/injector'

class OrganismsPromobox extends Component {
    render () {
        return (<div>
            <h3>Default Promobox</h3>
            <div className='c-promobox u-aspect-ratio-16x9'>
                <img src='https://images.unsplash.com/photo-1510598969022-c4c6c5d05769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' alt='' className='c-promobox__backdrop' />
                <div className='c-promobox__overlay c-promobox__overlay--middle-center'>
                    <div className='c-promobox__overlay__inner'>
                        <a href='' title='Mützen' className='c-button'>Mützen</a>
                    </div>
                </div>
            </div>
            <h2 className='o-distance'>Content Promobox</h2>
            <div className='c-promobox t-spotlight u-aspect-ratio-16x9'>
                <img src='https://images.unsplash.com/photo-1510598969022-c4c6c5d05769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' alt='' className='c-promobox__backdrop' />
                <div className='c-promobox__overlay'>
                    <div className='c-promobox__overlay__inner'>
                        <p className='c-topic'>Jetzt für den Sommer</p>
                        <h1 className='c-title'>Viele Angebote bei Levi´s </h1>
                        <a href='' title='' className='c-button'>Jetzt shoppen</a>
                    </div>
                </div>
            </div>
            <h2 className='o-distance'>Top-Right Content Promobox</h2>
            <div className='c-promobox t-spotlight u-aspect-ratio-16x9'>
                <img src='https://images.unsplash.com/photo-1510598969022-c4c6c5d05769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' alt='' className='c-promobox__backdrop' />
                <div className='c-promobox__overlay c-promobox__overlay--top-right'>
                    <div className='c-promobox__overlay__inner'>
                        <p className='c-topic'>Jetzt für den Sommer</p>
                        <h1 className='c-title'>Viele Angebote bei Levi´s </h1>
                        <a href='' title='' className='c-button'>Jetzt shoppen</a>
                    </div>
                </div>
            </div>
            <h2 className='o-distance'>Bottom-Left Content Promobox</h2>
            <div className='c-promobox t-spotlight u-aspect-ratio-16x9'>
                <img src='https://images.unsplash.com/photo-1510598969022-c4c6c5d05769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' alt='' className='c-promobox__backdrop' />
                <div className='c-promobox__overlay c-promobox__overlay--bottom-left'>
                    <div className='c-promobox__overlay__inner'>
                        <p className='c-topic'>Jetzt für den Sommer</p>
                        <h1 className='c-title'>Viele Angebote bei Levi´s </h1>
                        <a href='' title='' className='c-button'>Jetzt shoppen</a>
                    </div>
                </div>
            </div>
            <h2 className='o-distance'>Bottom-Right Content Promobox</h2>
            <div className='c-promobox t-spotlight u-aspect-ratio-16x9'>
                <img src='https://images.unsplash.com/photo-1510598969022-c4c6c5d05769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' alt='' className='c-promobox__backdrop' />
                <div className='c-promobox__overlay c-promobox__overlay--bottom-right'>
                    <div className='c-promobox__overlay__inner'>
                        <p className='c-topic'>Jetzt für den Sommer</p>
                        <h1 className='c-title'>Viele Angebote bei Levi´s </h1>
                        <a href='' title='' className='c-button'>Jetzt shoppen</a>
                    </div>
                </div>
            </div>
            <h2 className='o-distance'>Middle Content Promobox</h2>
            <div className='c-promobox t-spotlight u-aspect-ratio-16x9'>
                <img src='https://images.unsplash.com/photo-1510598969022-c4c6c5d05769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' alt='' className='c-promobox__backdrop' />
                <div className='c-promobox__overlay c-promobox__overlay--middle-center'>
                    <div className='c-promobox__overlay__inner'>
                        <p className='c-topic'>Jetzt für den Sommer</p>
                        <h1 className='c-title'>Viele Angebote bei Levi´s </h1>
                        <a href='' title='' className='c-button'>Jetzt shoppen</a>
                    </div>
                </div>
            </div>
        </div>)
    }
}

OrganismsPromobox.propTypes = {
}

OrganismsPromobox.defaultProps = {
}

export default ComponentInjector.return('OrganismsPromobox', OrganismsPromobox)
