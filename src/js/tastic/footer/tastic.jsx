import React from 'react'
import PropTypes from 'prop-types'
import tastify from '@frontastic/catwalk/src/js/helper/tastify'
import Footer from '../../patterns/molecules/Footer'

function MetaNavTastic ({
    data: {
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
        paymentHeader,
    },
}) {
    return (
        <Footer
            title={title}
            links={links}
            infoHeader={infoHeader}
            infoHeaderIcon={infoHeaderIcon}
            infoLinks={infoLinks}
            aboutHeader={aboutHeader}
            aboutHeaderIcon={aboutHeaderIcon}
            aboutLinks={aboutLinks}
            contactHeader={contactHeader}
            phoneNumber={phoneNumber}
            phoneNumberSubline={phoneNumberSubline}
            email={email}
            emailOverline={emailOverline}
            paymentMethods={paymentMethods}
            paymentHeader={paymentHeader}
        />
    )
}

MetaNavTastic.propTypes = {
    data: PropTypes.object.isRequired,
}

export default tastify({ translate: true })(MetaNavTastic)
