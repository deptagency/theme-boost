import React from 'react'
import PropTypes from 'prop-types'
import Translatable from '@frontastic/catwalk/src/js/component/translatable'

import LinkList from '../../../patterns/molecules/lists/LinkList'
import Column from '../../../patterns/organisms/PageFooter/components/Column'

// Despite the helper function, I think it's the better
// place to do translations. That way the UI component/pattern
// stays dumber and just accepts either any texts or nodes
function translateLabels (links) {
    return links.map((link) => {
        return { ...link, label: <Translatable value={link.label} /> }
    })
}

function FooterLinkList ({ data }) {
    return (
        <Column title={<Translatable value={data.header} />}>
            <LinkList
                links={translateLabels(data.links)}
                className='c-page-footer__link-list'
                listClassName='o-list-bare'
                listItemClassName='o-list-bare__item'
            />
        </Column>
    )
}

FooterLinkList.propTypes = {
    data: PropTypes.object.isRequired,
}

export default FooterLinkList
