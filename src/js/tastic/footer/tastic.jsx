import React from 'react'
import PropTypes from 'prop-types'
import tastify from '@frontastic/catwalk/src/js/helper/tastify'
import Translatable from '@frontastic/catwalk/src/js/component/translatable'
import Footer from 'Molecules/Footer'

// Despite the helper function, I think it's the better
// place to do translations. That way the UI component/pattern
// stays dumber and just accepts either any texts or nodes
function translateLabels (links) {
    return links.map((link) => {
        return { ...link, label: <Translatable value={link.label} /> }
    })
}

function MetaNavTastic ({ data: {
    title, links,
    infoHeader, infoHeaderIcon, infoLinks,
    aboutHeader, aboutHeaderIcon, aboutLinks,
    contacHeader, phoneNumber, phoneNumberSubline, email, emailOverline,
    paymentMethods, paymentHeader,

} }) {
    return (
        <Footer
            title={title}
            links={translateLabels(links)}
            infoHeader={infoHeader}
            infoHeaderIcon={infoHeaderIcon}
            infoLinks={translateLabels(infoLinks)}
            aboutHeader={aboutHeader}
            aboutHeaderIcon={aboutHeaderIcon}
            aboutLinks={translateLabels(aboutLinks)}
            contacHeader={contacHeader}
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

export default tastify()(MetaNavTastic)
