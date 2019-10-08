import React, { Component, Fragment } from 'react'

import OrganismsHead from '../organisms/base/header'
import OrganismsFoot from '../organisms/base/foot'
import MoleculesReferal from '../molecules/links/referal'

class TemplatesHelp extends Component {
    render () {
        return (
            <Fragment>
                <div>
                    <main role='main'>
                        <section>
                            <h2 className='c-title-level-3 u-text-center'>Bestellung</h2>
                            <nav role='navigation' className='o-distance-m'>
                                <div className='o-distance-s'><MoleculesReferal /></div>
                                <span className='c-divider o-distance-s' />
                                <div className='o-distance-s'><MoleculesReferal /></div>
                                <span className='c-divider o-distance-s' />
                                <div className='o-distance-s'><MoleculesReferal /></div>
                                <span className='c-divider o-distance-s' />
                                <div className='o-distance-s'><MoleculesReferal /></div>
                                <span className='c-divider o-distance-s' />
                            </nav>
                        </section>
                        <section className='o-distance'>
                            <h2 className='c-title-level-3 u-text-center'>Zahlung</h2>
                            <nav role='navigation' className='o-distance-m'>
                                <div className='o-distance-s'><MoleculesReferal /></div>
                                <span className='c-divider o-distance-s' />
                                <div className='o-distance-s'><MoleculesReferal /></div>
                                <span className='c-divider o-distance-s' />
                                <div className='o-distance-s'><MoleculesReferal /></div>
                                <span className='c-divider o-distance-s' />
                                <div className='o-distance-s'><MoleculesReferal /></div>
                                <span className='c-divider o-distance-s' />
                            </nav>
                        </section>
                    </main>
                </div>
            </Fragment>
        )
    }
}

TemplatesHelp.propTypes = {}

TemplatesHelp.defaultProps = {}

export default TemplatesHelp
