import React, { Component, Fragment } from 'react'

import MoleculesSequentialNav from '../molecules/navigations/sequential-nav'

import OrganismsHead from '../organisms/base/header'
import OrganismsStage from '../organisms/stages/stage'
import OrganismsCategoryListing from '../organisms/listings/category-listing'
import OrganismsCategoryListingHalf from '../organisms/listings/category-listing-half'
import OrganismsProductListing from '../organisms/listings/product-listing'
import OrganismsNewsletterBlock from '../organisms/blocks/newsletter'
import OrganismsFoot from '../organisms/base/foot'

class TemplatesHome extends Component {
    render() {
        return (
            <Fragment>
                <OrganismsHead />
                <main role='main'>
                    <section className='o-container o-distance-m'>
                        <OrganismsStage />
                    </section>
                    <section className='o-container o-distance-s'>
                        <OrganismsCategoryListing />
                    </section>
                    <section className='o-container o-distance'>
                        <OrganismsProductListing />
                    </section>
                    <section className='o-container o-distance'>
                        <OrganismsBanner />
                    </section>
                    <section className='o-container o-distance'>
                        <OrganismsCategoryListingHalf />
                    </section>
                    <section className='o-container o-distance'>
                        <OrganismsProductListing />
                    </section>
                </main>

                <MoleculesSequentialNav />

                <OrganismsFoot />
            </Fragment>
        )
    }
}

TemplatesHome.propTypes = {}

TemplatesHome.defaultProps = {}

export default TemplatesHome
