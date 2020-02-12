import React, { Component, Fragment } from 'react'

class OrderSuccess extends Component {
    render () {
        return (
            <Fragment>
                <main role='main'>
                    <div className='o-television'>
                        <header role='contentinfo' className='c-context-header t-spotlight o-television__bar'>
                            <div className='o-container c-context-header__wrapper'>
                                <div className='c-context-header__middle'>
                                    <div className='o-flex o-flex--center'>
                                        <h1 className='c-title-level-3 c-context-header__title o-flex__item'>
                                            Bestellbestätigung
                                        </h1>
                                    </div>
                                </div>
                                <button>
                                    <svg className='c-icon c-icon--m' version='1.1' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                                        <title>Ansicht schließen</title>
                                        <path d='M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z' />
                                    </svg>
                                </button>
                            </div>
                        </header>
                        <div className='o-television__display'>
                            <h2 className='c-title-level-3 u-text-center'>Vielen Dank für Ihre Bestellung.</h2>
                            <p className='u-text-center o-distance-xs'>Deine Bestellbestätigung haben wir dir an deine E-Mail Adresse geschickt.</p>
                            <span className='c-divider o-distance-m' />
                            <div className='o-summary o-distance-m'>
                                <dl>
                                    <dt className='t-text-quiet'>Gesamtsumme:</dt>
                                    <dd className='u-text-strong'>84,35€</dd>
                                </dl>
                                <dl>
                                    <dt className='t-text-quiet'>Bestellnummer:</dt>
                                    <dd className='u-text-strong'>23139012412</dd>
                                </dl>
                            </div>
                            <span className='c-divider o-distance-m' />
                            <section className='o-distance-m'>
                                <h2 className='c-title-level-4 u-text-center'>Lieferadresse</h2>
                                <address className='o-distance-s'>
                                    <strong>Tim Hartmann</strong><br />
                                    Ewaldstr. 2 <br />
                                    59174 Kamen <br />
                                    Deutschland
                                </address>
                            </section>
                            <span className='c-divider o-distance-m' />
                            <section className='o-distance-m'>
                                <h2 className='c-title-level-4 u-text-center'>Rechnungsadresse</h2>
                                <p className='o-distance-s'>Entspricht der Lieferadresse.</p>
                            </section>
                            <span className='c-divider o-distance-m' />
                            <section className='o-distance-m'>
                                <h2 className='c-title-level-4 u-text-center'>Zahlungsart</h2>
                                <div className='c-frame t-spotlight-border o-distance-m'>
                                    <p>
                                        <strong>SEPA-Lastschrift</strong><br />
                                        Das Geld wird in den nächsten fünf Tagen von Ihrem angegebenen Konto abgebucht.
                                    </p>
                                    <dl className='o-distance-m'>
                                        <dt className='t-text-quiet'>Kontoinhaber</dt>
                                        <dd className='u-text-strong'>Tim Hartmann</dd>
                                        <dt className='t-text-quiet o-distance-s'>IBAN</dt>
                                        <dd className='u-text-strong'>DE 28 1234 5678 9876 5432</dd>
                                    </dl>
                                </div>
                            </section>
                        </div>
                        <div className='o-television__remote-control'>
                            <a href='' className='c-button c-button--primary c-button--boss'>Weiter shoppen</a>
                        </div>
                    </div>
                </main>
            </Fragment>
        )
    }
}

OrderSuccess.propTypes = {}

OrderSuccess.defaultProps = {}

export default OrderSuccess
