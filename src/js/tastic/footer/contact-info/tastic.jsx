import React from 'react'
import PropTypes from 'prop-types'
import Translatable from '@frontastic/catwalk/src/js/component/translatable'

import ContactInfoMini from '../../../patterns/molecules/ContactInfoMini'
import Column from '../../../patterns/organisms/PageFooter/components/Column'

function FooterContactInfo ({ data }) {
    return (
        <Column title={<Translatable value={data.header} />}>
            <ContactInfoMini
                phoneNumber={<Translatable value={data.phoneNumber} />}
                phoneNumberSubline={<Translatable value={data.phoneNumberSubline} />}
                email={<Translatable value={data.email} />}
                emailOverline={<Translatable value={data.emailOverline} />}
            />
        </Column>
    )
}

FooterContactInfo.propTypes = {
    data: PropTypes.object.isRequired,
}

export default FooterContactInfo
