import React from 'react'
import PropTypes from 'prop-types'

import StoreFeatureList from '../../molecules/StoreFeatureList'
import ContactInfoMini from '../../molecules/ContactInfoMini'
import LinkList from '../../molecules/lists/LinkList'

import { ReactComponent as PayPalIcon } from '../../../../icons/paypal.svg'
import { ReactComponent as VisaIcon } from '../../../../icons/visa.svg'
import { ReactComponent as MastercardIcon } from '../../../../icons/mastercard.svg'
import { ReactComponent as FacebookIcon } from '../../../../icons/facebook.svg'
import { ReactComponent as InstagramIcon } from '../../../../icons/instagram.svg'

import Column from './components/Column'

import styles from './styles.module.scss'

const linksUnternehmen = [
    { url: '#', title: 'Ueber uns' },
    { url: '#', title: 'Partnerschaften' },
    { url: '#', title: 'Karriere' },
    { url: '#', title: 'Presse' },
]
const linksService = [
    { url: '#', title: 'Bestellung nachverfolgen' },
    { url: '#', title: 'FAQ' },
    { url: '#', title: 'Lieferung' },
    { url: '#', title: 'Ruecksendung' },
]
const linksMeta = [
    { url: '#', title: 'Jobs' },
    { url: '#', title: 'AGB' },
    { url: '#', title: 'Impressum' },
    { url: '#', title: 'Datenschutz' },
]
const linksPayment = [{ children: <PayPalIcon /> }, { children: <VisaIcon /> }, { children: <MastercardIcon /> }]

const linksSocial = [
    { url: '#', title: 'Facebook', children: <FacebookIcon /> },
    { url: '#', title: 'Instagram', children: <InstagramIcon /> },
]

export function PageFooter() {
    return (
        <div className='c-page-footer o-container o-prevent-space'>
            <StoreFeatureList />
            <div className='c-footer__body o-grid o-grid--small-half o-grid--large-forth'>
                <Column title='Kontakt'>
                    <ContactInfoMini />
                </Column>
                <Column title='Zahlungsbedingungen'>
                    <LinkList
                        links={linksPayment}
                        className={styles.paymentMethodsList}
                        listClassName='o-list-inline'
                        listItemClassName='o-list-inline__item'
                    />
                </Column>
                <Column title='Unternehmen'>
                    <LinkList
                        links={linksUnternehmen}
                        listClassName='o-list-bare'
                        listItemClassName='o-list-bare__item'
                    />
                </Column>
                <Column title='Service'>
                    <LinkList links={linksService} listClassName='o-list-bare' listItemClassName='o-list-bare__item' />
                </Column>
            </div>
            <div className='o-footer__bottom'>
                <LinkList
                    links={linksSocial}
                    className={styles.socialList}
                    listClassName='o-list-inline'
                    listItemClassName='o-list-inline__item'
                />

                <LinkList
                    links={linksMeta}
                    listClassName='o-list-inline o-footer__bottom__navigation'
                    listItemClassName='o-list-inline__item u-text-s'
                />
            </div>
        </div>
    )
}

PageFooter.propTypes = {
    // children: PropTypes.node.isRequired,
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    className: PropTypes.string,
    theme: PropTypes.string,
}

PageFooter.defaultProps = {
    component: 'footer',
    theme: 't-universe',
    className: '',
}

//ComponentInjector.return('PageFooter', PageFooter)
