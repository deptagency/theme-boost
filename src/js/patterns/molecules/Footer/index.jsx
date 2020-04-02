import React from 'react'
import PropTypes from 'prop-types'
import Translatable from '@frontastic/catwalk/src/js/component/translatable'

import MarginBreakout from 'Molecules/Layout/MarginBreakout'
import ContactInfo from './ContactInfo'
import LinkList from './LinkList'
import MetaNav from './MetaNav'
import PaymentMethods from './PaymentMethods'

const Footer = ({
    title, links,
    infoHeader, infoHeaderIcon, infoLinks,
    aboutHeader, aboutHeaderIcon, aboutLinks,
    contacHeader, phoneNumber, phoneNumberSubline, email, emailOverline,
    paymentMethods,

}) => {
    return (
        <MarginBreakout variant='bg-gray-700 text-gray-200'>
            <div className='hidden lg:flex max-w-840px mx-auto py-10 justify-between'>
                <LinkList
                    header={<Translatable value={infoHeader} />}
                    headerIcon={infoHeaderIcon}
                    links={infoLinks}
                />

                <ContactInfo
                    header={<Translatable value={contacHeader} />}
                    phoneNumber={<Translatable value={phoneNumber} />}
                    phoneNumberSubline={<Translatable value={phoneNumberSubline} />}
                    email={<Translatable value={email} />}
                    emailOverline={<Translatable value={emailOverline} />}
                />

                <LinkList
                    header={<Translatable value={aboutHeader} />}
                    headerIcon={aboutHeaderIcon}
                    links={aboutLinks}
                />

                <PaymentMethods
                    methods={paymentMethods}
                />
            </div>

            <MetaNav
                title={<Translatable value={title} />}
                links={links}
            />
        </MarginBreakout>
    )
}

Footer.propTypes = {
    title: PropTypes.object,
    links: PropTypes.array,
    infoHeader: PropTypes.object,
    infoHeaderIcon: PropTypes.string,
    infoLinks: PropTypes.array,
    aboutHeader: PropTypes.object,
    aboutHeaderIcon: PropTypes.string,
    aboutLinks: PropTypes.array,
    contacHeader: PropTypes.object,
    phoneNumber: PropTypes.object,
    phoneNumberSubline: PropTypes.string,
    email: PropTypes.object,
    emailOverline: PropTypes.string,
    paymentMethods: PropTypes.array,
}

export default Footer
