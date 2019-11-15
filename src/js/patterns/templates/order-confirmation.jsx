import React, { Component } from 'react'
import PropTypes from 'prop-types'

import OrganismsAddressblock from 'js/patterns/organisms/blocks/addressblock'
import MoleculesButton from 'js/patterns/molecules/buttons/button'
import OrganismsHeaderMobile from 'js/patterns/organisms/base/header-mobile'

import PaymentType from '../../../constants/payment-types'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class TemplatesOrderConfirmation extends Component {
    render () {
        const { paymentType: pt } = this.props

        return (
            <div className='o-television'>
                <OrganismsHeaderMobile className='o-television__bar' />
                <div className='o-television__display'>
                    <div className='o-container-small'>
                        <section className='u-text-center'>
                            <svg width='80' height='80' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <g clipPath='url(#clip0)'>
                                    <path d='M40 0C32.0888 0 24.3552 2.34596 17.7772 6.74121C11.1992 11.1365 6.07234 17.3836 3.04484 24.6927C0.0173314 32.0017 -0.774802 40.0444 0.768607 47.8036C2.31202 55.5628 6.12165 62.6902 11.7157 68.2843C17.3098 73.8784 24.4372 77.688 32.1964 79.2314C39.9556 80.7748 47.9983 79.9827 55.3074 76.9552C62.6164 73.9277 68.8635 68.8008 73.2588 62.2228C77.6541 55.6448 80 47.9112 80 40C79.9877 29.3951 75.7694 19.2281 68.2707 11.7294C60.7719 4.23059 50.6049 0.0123507 40 0V0ZM63.09 27.3333L40.2733 58.2967C40.004 58.6541 39.6661 58.9542 39.2795 59.1796C38.8928 59.405 38.4652 59.5512 38.0214 59.6095C37.5777 59.6679 37.1268 59.6372 36.695 59.5194C36.2633 59.4016 35.8593 59.199 35.5067 58.9233L19.2134 45.8967C18.8715 45.6231 18.5868 45.2848 18.3757 44.9012C18.1645 44.5176 18.031 44.0962 17.9827 43.661C17.8852 42.7821 18.1408 41.9004 18.6933 41.21C19.2459 40.5196 20.0501 40.0769 20.929 39.9794C21.8079 39.8818 22.6896 40.1375 23.38 40.69L36.9667 51.56L57.7234 23.39C57.9732 23.015 58.2966 22.6946 58.6738 22.4481C59.051 22.2016 59.4742 22.0342 59.918 21.9559C60.3618 21.8776 60.8168 21.8901 61.2556 21.9926C61.6944 22.0951 62.1078 22.2855 62.4709 22.5523C62.8341 22.8191 63.1393 23.1568 63.3682 23.5449C63.5972 23.9331 63.7451 24.3636 63.8029 24.8104C63.8608 25.2573 63.8274 25.7113 63.7049 26.1449C63.5824 26.5785 63.3732 26.9828 63.09 27.3333Z' fill='#98E076' />
                                </g>
                                <defs>
                                    <clipPath id='clip0'>
                                        <rect width='80' height='80' fill='white' />
                                    </clipPath>
                                </defs>
                            </svg>
                            <h2 className='c-title-beta o-distance-xs'>Vielen Dank für deine Bestellung.</h2>
                            <p className='o-distance-xs'>Deine Bestellbestätigung haben wir dir an deine E-Mail Adresse geschickt.</p>
                        </section>
                        <div className='o-television__display__boundless'>
                            <span className='c-divider c-divider--break o-distance' />
                        </div>
                        <section className='o-distance o-prevent-space'>
                            <div className='o-grid o-grid--side-by-side'>
                                <p className='u-text-l u-text-strong'>84,85 €</p>
                                <div>
                                    <dt className='u-text-s t-text-quiet'>Bestellnummer:</dt>
                                    <dd className='u-text-s u-text-strong'>23139012412</dd>
                                </div>
                            </div>
                        </section>
                        <div className='o-television__display__boundless'>
                            <span className='c-divider c-divider--break o-distance' />
                        </div>
                        <section className='o-distance o-prevent-space'>
                            <h2 className='c-title-level-3'>Lieferadresse</h2>
                            <div className='o-distance-m'>
                                <OrganismsAddressblock />
                            </div>
                        </section>
                        <div className='o-television__display__boundless'>
                            <span className='c-divider c-divider--break o-distance' />
                        </div>
                        <section className='o-distance o-prevent-space'>
                            <h2 className='c-title-level-3'>Rechnungsadresse</h2>
                            <div className='o-distance-m'>
                                <p>Entspricht der Lieferadresse.</p>
                            </div>
                        </section>
                        <div className='o-television__display__boundless'>
                            <span className='c-divider c-divider--break o-distance' />
                        </div>
                        <section className='o-distance o-prevent-space'>
                            <h2 className='c-title-level-3'>Zahlungsart</h2>
                            {pt === PaymentType.directDebit && <div className='c-frame t-spotlight-border o-distance-m'>
                                <p className='c-title-level-4'>SEPA-Lastschrift</p>
                                <p className='o-distance-s'>Das Geld wird in den nächsten fünf Tagen von Ihrem angegebenen Konto abgebucht.</p>
                                <dl className='o-distance-m'>
                                    <dt className='t-text-quiet'>Kontoinhaber:</dt>
                                    <dd>Max Mustermann</dd>
                                    <dt className='o-distance-s t-text-quiet'>IBAN:</dt>
                                    <dd>DE 28 1234 5678 9876 52</dd>
                                </dl>
                            </div>}
                            {pt === PaymentType.creditCard && <div className='c-frame t-spotlight-border o-distance-m'>
                                <p className='c-title-level-4'>Kreditkarte</p>
                                <dl className='o-distance-m'>
                                    <dt className='o-distance-s t-text-quiet'>Visa:</dt>
                                    <dd>1234 XXXX XXXX XXXX</dd>
                                </dl>
                            </div>}
                            {pt === PaymentType.invoice && <div className='c-frame t-spotlight-border o-distance-m'>
                                <p className='c-title-level-4'>Rechnung</p>
                                <p className='o-distance-s'>Bitte das Geld innerhalb von 14 Tagen überweisen.</p>
                                <dl className='o-distance-m'>
                                    <dt className='t-text-quiet'>Zahlungsempfänger</dt>
                                    <dd>Catwalk</dd>
                                    <dt className='o-distance-s t-text-quiet'>IBAN:</dt>
                                    <dd>DE 28 1234 5678 9876 52</dd>
                                    <dt className='o-distance-s t-text-quiet'>Verwendungszweck:</dt>
                                    <dd>123456789</dd>
                                </dl>
                            </div>}
                        </section>
                    </div>
                </div>
                <div className='o-television__remote-control o-container-small'>
                    <MoleculesButton type='primary' size='boss'>Weitershoppen</MoleculesButton>
                </div>
            </div>
        )
    }
}

TemplatesOrderConfirmation.propTypes = {
    paymentType: PropTypes.oneOf([PaymentType.directDebit, PaymentType.creditCard, PaymentType.invoice]).isRequired,
}

TemplatesOrderConfirmation.defaultProps = {

}

export default ComponentInjector.return('TemplatesOrderConfirmation', TemplatesOrderConfirmation)
