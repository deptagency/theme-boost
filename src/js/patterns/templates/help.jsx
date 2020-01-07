import React, { Component, Fragment } from 'react'

import Referal from '../atoms/links/referal'
import HeaderMobile from '../organisms/base/header-mobile'
import Foot from '../organisms/base/foot'
import PageHeader from '../organisms/base/header-page'
import NewsletterBlock from '../organisms/blocks/newsletter'

class Help extends Component {
    render () {
        return (
            <Fragment>
                <div className='o-television'>
                    <HeaderMobile />
                    <div className='o-television__display'>
                        <div className='o-container-medium'>
                            <PageHeader title='Hilfe' />
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
                            <NewsletterBlock />
                        </div>
                        <Foot />
                    </div>
                </div>
            </Fragment>
        )
    }
}

Help.propTypes = {}

Help.defaultProps = {}

export default Help
