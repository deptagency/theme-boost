import React, { Component, Fragment } from 'react'

import Referal from '../atoms/links/referal'
import OrganismsHead from '../organisms/base/header'
import OrganismsFoot from '../organisms/base/foot'
import OrganismsPageHeader from '../organisms/base/header-page'
import OrganismsNewsletterBlock from '../organisms/blocks/newsletter'

class TemplatesHelp extends Component {
    render () {
        return (
            <Fragment>
                <div className='o-television'>
                    <OrganismsHead />
                    <div className='o-television__display'>
                        <div className='o-container-medium'>
                            <OrganismsPageHeader title='Hilfe' />
                            <p className='o-distance-s'>Hier helfen wir dir am schnellsten weiter - finde Updates zu deinen Bestellungen sowie Antworten zu allen Themen.</p>
                            <div className='o-distance'>
                                <h2 className='c-title-level-3'>Finde Antworten nach Themen</h2>
                                <nav role='navigation' className='o-distance-m'>
                                    <Referal />
                                    <span className='c-divider o-distance-m' />
                                    <div className='o-distance-m'><Referal /></div>
                                    <span className='c-divider o-distance-m' />
                                    <div className='o-distance-m'><Referal /></div>
                                    <span className='c-divider o-distance-m' />
                                    <div className='o-distance-m'><Referal /></div>
                                    <span className='c-divider o-distance-m' />
                                </nav>
                            </div>
                        </div>
                        <div className='o-distance o-container'>
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
