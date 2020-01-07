import React, { Component, Fragment } from 'react'

import MoleculesSequentialNav from '../molecules/navigations/sequential-nav'

import Head from '../organisms/base/header'
import Stage from '../organisms/stages/stage'
import CategoryListing from '../organisms/listings/category-listing'
import CategoryListingHalf from '../organisms/listings/category-listing-half'
import ProductListing from '../organisms/listings/product-listing'
import Foot from '../organisms/base/foot'

class Home extends Component {
    render () {
        return (
            <Fragment>
                <Head />
                <main role='main'>
                    <section className='o-container o-distance-m'>
                        <Stage />
                    </section>
                    <section className='o-container o-distance-s'>
                        <CategoryListing />
                    </section>
                    <section className='o-container o-distance'>
                        <ProductListing />
                    </section>
                    <section className='o-container o-distance'>
                        <CategoryListingHalf />
                    </section>
                    <section className='o-container o-distance'>
                        <ProductListing />
                    </section>
                </main>

                <MoleculesSequentialNav />

                <Foot />
            </Fragment>
        )
    }
}

Home.propTypes = {}

Home.defaultProps = {}

export default Home
