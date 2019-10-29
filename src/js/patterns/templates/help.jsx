import React, { Component, Fragment } from 'react'

import MoleculesReferal from '../molecules/links/referal'
import OrganismsHead from '../organisms/base/header'
import OrganismsFoot from '../organisms/base/foot'
import OrganismsPageHeader from 'js/patterns/organisms/base/header-page'
import OrganismsNewsletterBlock from 'js/patterns/organisms/blocks/newsletter'

class TemplatesHelp extends Component {
    render () {
        return (
            <Fragment>
                <div className='o-television'>
                    <OrganismsHead />
                    <div class='o-television__display'>
                        <OrganismsPageHeader title='Hilfe' />
                        <p class='o-distance-s'>Hier helfen wir dir am schnellsten weiter - finde Updates zu deinen Bestellungen sowie Antworten zu allen Themen.</p>
                        <div class='o-distance'>
                            <h2 className='c-title-level-3'>Finde Antworten nach Themen</h2>
                            <nav role='navigation' className='o-distance-m'>
                                <MoleculesReferal />
                                <span className='c-divider o-distance-m' />
                                <div className='o-distance-m'><MoleculesReferal /></div>
                                <span className='c-divider o-distance-m' />
                                <div className='o-distance-m'><MoleculesReferal /></div>
                                <span className='c-divider o-distance-m' />
                                <div className='o-distance-m'><MoleculesReferal /></div>
                                <span className='c-divider o-distance-m' />
                            </nav>
                        </div>
                        <div className='o-distance'>
                            <OrganismsNewsletterBlock />
                        </div>
                        <OrganismsFoot />
                    </div>
                </div>
            </Fragment>
        )
    }
}

TemplatesHelp.propTypes = {}

TemplatesHelp.defaultProps = {}

export default TemplatesHelp
