import React from 'react'
import PropTypes from 'prop-types'
import Translatable from '@frontastic/catwalk/src/js/component/translatable'
import LinkList from '../../patterns/molecules/lists/LinkList'

// Despite the helper function, I think it's the better
// place to do translations. That way the UI component/pattern
// stays dumber and just accepts either any texts or nodes
function translateLabels (links) {
    return links.map((link) => {
        return { ...link, label: <Translatable value={link.label} /> }
    })
}

function FooterMetaNav ({ data }) {
    return (
        <LinkList
            links={translateLabels(data.links)}
            listClassName='c-page-footer__meta-nav o-list-inline o-footer__bottom__navigation'
            listItemClassName='o-list-inline__item u-text-s'
        />
    )
}

FooterMetaNav.propTypes = {
    data: PropTypes.object.isRequired,
}

export default FooterMetaNav
