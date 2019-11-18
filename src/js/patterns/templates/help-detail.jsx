import React, { Component, Fragment } from 'react'

import Referal from '../atoms/links/referal'
import OrganismsHead from '../organisms/base/header'
import OrganismsFoot from '../organisms/base/foot'
import OrganismsPageHeader from '../organisms/base/header-page'
import OrganismsNewsletterBlock from '../organisms/blocks/newsletter'

class TemplatesHelpDetail extends Component {
    render () {
        return (
            <Fragment>
                <div className='o-television'>
                    <OrganismsHead />
                    <div className='o-television__display'>
                        <div className='o-container-medium'>
                            <OrganismsPageHeader title='Rücksendung & Erstattung' />
                            <div className='o-distance-l'>
                                <h2 className='c-title-level-4 o-block-short'>
                                    <span className='o-block-short__body'>
                                  Reklamation
                                    </span>
                                    <svg className='c-icon c-icon--s o-block-short__short-item t-spotlight-color' version='1.1' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                                        <title>chevron-right</title>
                                        <path d='M15.7 11.3l-6-6c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5.3 5.3-5.3 5.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l6-6c0.4-0.4 0.4-1 0-1.4z' />
                                    </svg>
                                </h2>
                                <p className='u-text-s o-distance-s'>Dein Artikel ist mangelhaft? Das tut uns leid. Gerne prüfen wir deine Reklamation. Bitte gib uns folgende Informationen durch...</p>
                            </div>
                            <div className='o-distance-l'>
                                <h2 className='c-title-level-4 o-block-short'>
                                    <span className='o-block-short__body'>
                                  Wie sende ich einen Artikel zurück?
                                    </span>
                                    <svg className='c-icon c-icon--s o-block-short__short-item t-spotlight-color' version='1.1' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                                        <title>chevron-right</title>
                                        <path d='M15.7 11.3l-6-6c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5.3 5.3-5.3 5.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l6-6c0.4-0.4 0.4-1 0-1.4z' />
                                    </svg>
                                </h2>
                                <p className='u-text-s o-distance-s'>Dein Artikel ist mangelhaft? Das tut uns leid. Gerne prüfen wir deine Reklamation. Bitte gib uns folgende Informationen durch...</p>
                            </div>
                            <div className='o-distance-l'>
                                <h2 className='c-title-level-4 o-block-short'>
                                    <span className='o-block-short__body'>
                                  Rückerstattung bei Gutscheinen
                                    </span>
                                    <svg className='c-icon c-icon--s o-block-short__short-item t-spotlight-color' version='1.1' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                                        <title>chevron-right</title>
                                        <path d='M15.7 11.3l-6-6c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5.3 5.3-5.3 5.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l6-6c0.4-0.4 0.4-1 0-1.4z' />
                                    </svg>
                                </h2>
                                <p className='u-text-s o-distance-s'>Dein Artikel ist mangelhaft? Das tut uns leid. Gerne prüfen wir deine Reklamation. Bitte gib uns folgende Informationen durch...</p>
                            </div>
                            <nav role='navigation' className='o-distance'>
                                <div><Referal /></div>
                                <span className='c-divider o-distance-m' />
                                <div className='o-distance-m'><Referal /></div>
                                <span className='c-divider o-distance-m' />
                                <div className='o-distance-m'><Referal /></div>
                                <span className='c-divider o-distance-m' />
                                <div className='o-distance-m'><Referal /></div>
                                <span className='c-divider o-distance-m' />
                            </nav>
                            <div className='o-distance'>
                                <OrganismsNewsletterBlock />
                            </div>
                        </div>
                        <OrganismsFoot />
                    </div>
                </div>
            </Fragment>
        )
    }
}

TemplatesHelpDetail.propTypes = {}

TemplatesHelpDetail.defaultProps = {}

export default TemplatesHelpDetail
