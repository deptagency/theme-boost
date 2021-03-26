import React from 'react'
import PropTypes from 'prop-types'

import FullPageWidthWrapper from '../Layout/FullPageWidthWrapper'
import ContactInfo from './ContactInfo'
import LinkList from './LinkList'
import MetaNav from './MetaNav'
import PaymentMethods from './PaymentMethods'

const Footer = ({
    title,
    links,
    infoHeader,
    infoHeaderIcon,
    infoLinks,
    aboutHeader,
    aboutHeaderIcon,
    aboutLinks,
    contactHeader,
    phoneNumber,
    phoneNumberSubline,
    email,
    emailOverline,
    paymentMethods,
}) => {
    return (
        <FullPageWidthWrapper className='bg-neutral-800 text-neutral-200'>
            <div className='hidden lg:flex mx-auto py-10 justify-between lg:w-9/12 xl:w-7/12'>
                <LinkList header={infoHeader} headerIcon={infoHeaderIcon} links={infoLinks} />

                <ContactInfo
                    header={contactHeader}
                    phoneNumber={phoneNumber}
                    phoneNumberSubline={phoneNumberSubline}
                    email={email}
                    emailOverline={emailOverline}
                />

                <LinkList header={aboutHeader} headerIcon={aboutHeaderIcon} links={aboutLinks} />

                <PaymentMethods methods={paymentMethods} />
            </div>

            <MetaNav title={title} links={links} />
        </FullPageWidthWrapper>
    )
}

Footer.propTypes = {
    title: PropTypes.string,
    links: PropTypes.array,
    infoHeader: PropTypes.string,
    infoHeaderIcon: PropTypes.string,
    infoLinks: PropTypes.array,
    aboutHeader: PropTypes.string,
    aboutHeaderIcon: PropTypes.string,
    aboutLinks: PropTypes.array,
    contactHeader: PropTypes.string,
    phoneNumber: PropTypes.string,
    phoneNumberSubline: PropTypes.string,
    email: PropTypes.string,
    emailOverline: PropTypes.string,
    paymentMethods: PropTypes.array,
}

export default Footer
