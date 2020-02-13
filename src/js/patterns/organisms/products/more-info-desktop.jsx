import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import classnames from 'classnames'
import { Scrollbars } from 'react-custom-scrollbars'
import StaticRating from '../../molecules/ratings/static-rating'
import { ReactComponent as YellowTick } from '../../../../icons/yellow-tick.svg'
import { ReactComponent as SmallTruck } from '../../../../icons/truck-small.svg'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import ReviewsList from './reviews-list'
import DetailsDesktop from './more-info/details-desktop'

const MoreInfoProductDesktop = ({ product }) => {
    const { images, attributes } = product
    const [selectedTab, setSelectedTab] = useState(0)

    return (
        <div className='u-hidden-until-medium'>
            <div className='o-with-sidebar o-distance-xl' style={{ minHeight: '440px' }}>
                <Tabs className='c-box c-box--xl c-tabs u-background-color-default' selectedTabClassName='is-active'>
                    <TabList className='c-tabs__list'>
                        <Tab className='c-tabs__list__item'>
                            <h3 className={classnames({
                                    'c-tabs__list__title': true,
                                    'is-active': selectedTab === 0,
                                })}
                                onClick={() => { setSelectedTab(0) }}
                            >
                                <FormattedMessage id='product.description' />
                            </h3>
                        </Tab>
                        <Tab className='c-tabs__list__item'>
                            <h3 className={classnames({
                                'c-tabs__list__title': true,
                                'is-active': selectedTab === 1,
                            })}
                                onClick={() => { setSelectedTab(1) }}
                            >
                                <FormattedMessage id='product.shipping' />
                            </h3>
                        </Tab>
                        <Tab className='c-tabs__list__item'>
                            <h3 className={classnames({
                                'c-tabs__list__title': true,
                                'is-active': selectedTab === 2,
                            })}
                                onClick={() => { setSelectedTab(2) }}
                            >
                                <FormattedMessage id='product.reviewsWithCount' values={{ count: 7 }} />
                            </h3>
                        </Tab>
                    </TabList>

                    <TabPanel className='o-distance-xl'>
                        <h3 className='c-title'>
                            <FormattedMessage id='product.description' />
                        </h3>
                        <div className='o-distance-m'>
                            { attributes && <DetailsDesktop attributes={attributes} /> }
                        </div>
                    </TabPanel>
                    <TabPanel className='o-distance-xl'>
                        <div>
                            <h3 className='c-title'>
                                <FormattedMessage id='product.shipping' />
                            </h3>
                            <div className='o-distance-m'>
                                <div className='o-list-bare'>
                                    <div className='o-list-bare__item'>
                                        <div className='o-block-short o-block-short--centered'>
                                            <YellowTick className='o-block-short__short-item' />
                                            <div>
                                                <FormattedMessage id='product.freeShipping' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='o-list-bare__item'>
                                        <div className='o-block-short o-block-short--centered'>
                                            <YellowTick className='o-block-short__short-item' />
                                            <div>
                                                <FormattedMessage id='product.returnPolicy100days' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='o-block-short o-block-short--medium o-distance-xl'>
                                <SmallTruck className='c-icon c-icon--m o-block-short__short-item' />
                                <p className='o-block-short__body'>
                                    <p><FormattedMessage id='product.standardDelivery.title' /></p>
                                    <p><FormattedMessage id='product.standardDelivery.message' /></p>
                                </p>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel className='o-distance-l'>
                        <h3 className='c-title'><FormattedMessage id='product.reviews' /></h3>
                        <div className='o-box-center o-flex'>
                            <div className='o-distance-xl o-block-short o-block-short--medium o-block-short--centered'>
                                <h4 className='c-title o-block-short__short-item'>4,2</h4>
                                <StaticRating outerClassName='o-block-short__body' rating={3} reviewsCount={7} />
                            </div>
                        </div>

                    </TabPanel>
                </Tabs>

                {selectedTab === 2 ?
                    <Scrollbars autoHide>
                        <ReviewsList />
                    </Scrollbars>
                    :
                    <div
                        style={{
                            backgroundImage: `url(${images[0]})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            width: '100%',
                        }}
                    />
                }
            </div>
        </div>
    )
}

MoreInfoProductDesktop.propTypes = {
    product: PropTypes.object.isRequired,
}

export default MoreInfoProductDesktop
