import React from 'react'
import PropTypes from 'prop-types'
import LinkList from '../../patterns/molecules/lists/LinkList'

import { ReactComponent as FacebookIcon } from '../../../icons/facebook.svg'
import { ReactComponent as InstagramIcon } from '../../../icons/instagram.svg'

// icon map - should mirror the options in the tastic schema
const socialIcons = { facebook: <FacebookIcon />, instagram: <InstagramIcon /> }

// returns an array of objects for the <LinkList/>
// component. the actual link can be omitted to
// render just the list of icons
function socialLinksFromData (socialLinks) {
    return socialLinks.map((link) => {
        return { ...link, children: socialIcons[link.icon] }
    })
}

function FooterSocialNav ({ data }) {
    const socialLinks = socialLinksFromData(data.socialLinks)
    return (
        <LinkList
            links={socialLinks}
            className='c-page-footer__social-links'
            listClassName='o-list-inline'
            listItemClassName='o-list-inline__item'
        />
    )
}

FooterSocialNav.propTypes = {
    data: PropTypes.object.isRequired,
}

export default FooterSocialNav
