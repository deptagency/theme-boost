import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import classnames from 'classnames'
import { Scrollbars } from 'react-custom-scrollbars'
import { ReactComponent as YellowTick } from '../../../../icons/yellow-tick.svg'
import { ReactComponent as SmallTruck } from '../../../../icons/truck-small.svg'

/* eslint-disable camelcase */
import {
    moreInfoDesktop,
    moreInfoDesktop__tabs,
    moreInfoDesktop__tabs_selected,
    moreInfoDesktop__tabList,
    moreInfoDesktop__tab,
    marginRight10, marginRight16,
} from './more-info.module.scss'
/* eslint-disable enable */

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import ReviewsList from './reviews-list'

const OrganismsMoreInfoProductDesktop = ({ product }) => {
    const [selectedTab, setSelectedTab] = useState(0)

    return (
        <div className={moreInfoDesktop}>
            <Tabs className={moreInfoDesktop__tabs} selectedTabClassName={moreInfoDesktop__tabs_selected}>
                <TabList className={moreInfoDesktop__tabList}>
                    <Tab className={moreInfoDesktop__tab}>
                        <h3 className={classnames({
                                'c-title-level-4 c-referal__body': true,
                                'more-info-priduct--selected': selectedTab === 0,
                            })}
                            onClick={() => { setSelectedTab(0) }}
                        >
                            <FormattedMessage id='product.description' />
                        </h3>
                    </Tab>
                    <Tab className={moreInfoDesktop__tab}>
                        <h3 className={classnames({
                            'c-title-level-4 c-referal__body': true,
                            'more-info-priduct--selected': selectedTab === 1,
                        })}
                            onClick={() => { setSelectedTab(1) }}
                        >
                            <FormattedMessage id='product.shipping' />
                        </h3>
                    </Tab>
                    <Tab className={moreInfoDesktop__tab}>
                        <h3 className={classnames({
                            'c-title-level-4 c-referal__body': true,
                            'more-info-priduct--selected': selectedTab === 2,
                        })}
                            onClick={() => { setSelectedTab(2) }}
                        >
                            <FormattedMessage id='product.reviews' values={{ count: 7 }} />
                        </h3>
                    </Tab>
                </TabList>

                <TabPanel>
                    <h3 className='c-title-level-4 c-referal__body'>
                        <FormattedMessage id='product.description' />
                    </h3>

                    <div className='o-distance'>
                        <dl className='o-detaillist o-distance-m'>
                            <dt className='t-text-quiet'><FormattedMessage id='product.materialOuterFabric' /></dt>
                            <dd className='u-text-strong'>100% <FormattedMessage id='product.viscose' /></dd>
                            <dt className='t-text-quiet'><FormattedMessage id='product.lining' /></dt>
                            <dd className='u-text-strong'>100% <FormattedMessage id='product.viscose' /></dd>
                        </dl>
                        <h3 className='c-title-level-3 o-distance'><FormattedMessage id='product.moreAboutThisProduct' /></h3>
                        <dl className='o-detaillist o-distance-m'>
                            <dt className='t-text-quiet'><FormattedMessage id='product.cut' /></dt>
                            <dd className='u-text-strong'>100% <FormattedMessage id='product.viscose' /></dd>
                            <dt className='t-text-quiet'><FormattedMessage id='product.clasp' /></dt>
                            <dd className='u-text-strong'><FormattedMessage id='product.lacing' /></dd>
                            <dt className='t-text-quiet'><FormattedMessage id='product.style' /></dt>
                            <dd className='u-text-strong'>{product.attributes.style.label}</dd>
                            <dt className='t-text-quiet'><FormattedMessage id='product.itemNumber' /></dt>
                            <dd className='u-text-strong'>{product.attributes.matrixId}</dd>
                        </dl>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='o-distance'>
                        <div className='o-list-bare'>
                            <div className='o-list-bare__item o-block-short o-block-short--centered'>
                                <YellowTick className={marginRight10} />
                                <div className='o-block-short__body u-text-s'>
                                    <FormattedMessage id='product.freeShipping' />
                                </div>
                            </div>
                            <div className='o-list-bare__item o-block-short o-block-short--centered'>
                                <YellowTick className={marginRight10} />
                                <div className='o-block-short__body u-text-s'>
                                    <FormattedMessage id='product.returnPolicy100days' />
                                </div>
                            </div>
                        </div>
                        <div className='o-block-short o-distance-m'>
                            <SmallTruck className={marginRight16} />
                            <div className='o-block-short__body'>
                                <p className='u-text-strong'><FormattedMessage id='product.standardDelivery.title' /></p>
                                <p className='o-distance-xs'><FormattedMessage id='product.standardDelivery.message' /></p>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <h1><FormattedMessage id='product.reviews' values={{ count: 7 }} /></h1>
                </TabPanel>
            </Tabs>

            {selectedTab === 2 ?
                <Scrollbars autoHide style={{
                    height: 'calc(100% - 48px)',
                    minHeight: '500px',
                }}>
                    <ReviewsList />
                </Scrollbars>
                :
                <div
                    style={{
                        backgroundImage: `url(${product.images[0]})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
            }
        </div>
    )
}

OrganismsMoreInfoProductDesktop.propTypes = {
    product: PropTypes.object.isRequired,
}

export default OrganismsMoreInfoProductDesktop
