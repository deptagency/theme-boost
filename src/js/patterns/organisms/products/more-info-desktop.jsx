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
    moreInfoDesktop__selected,
    marginRight10, marginRight16,
    moreInfoDesktop_tab_panel,
    moreInfoDesktop_span_formatted,
    moreInfoDesktop_p_formatted,
    moreInfoDesktop_light_text
} from './more-info.module.scss'
/* eslint-disable enable */

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import ReviewsList from './reviews-list'

const OrganismsMoreInfoProductDesktop = ({ product }) => {
    const [selectedTab, setSelectedTab] = useState(0)

    return (
        <div className={`${moreInfoDesktop} o-distance-xl`}>
            <Tabs className={moreInfoDesktop__tabs} selectedTabClassName={moreInfoDesktop__tabs_selected}>
                <TabList className={moreInfoDesktop__tabList}>
                    <Tab className={moreInfoDesktop__tab}>
                        <h3 className={classnames({
                                'c-title-level-4 c-referal__body': true,
                                [moreInfoDesktop__selected]: selectedTab === 0,
                            })}
                            onClick={() => { setSelectedTab(0) }}
                        >
                            <FormattedMessage id='product.description' />
                        </h3>
                    </Tab>
                    <Tab className={moreInfoDesktop__tab}>
                        <h3 className={classnames({
                            'c-title-level-4 c-referal__body': true,
                            [moreInfoDesktop__selected]: selectedTab === 1,
                        })}
                            onClick={() => { setSelectedTab(1) }}
                        >
                            <FormattedMessage id='product.shipping' />
                        </h3>
                    </Tab>
                    <Tab className={moreInfoDesktop__tab}>
                        <h3 className={classnames({
                            'c-title-level-4 c-referal__body': true,
                            [moreInfoDesktop__selected]: selectedTab === 2,
                        })}
                            onClick={() => { setSelectedTab(2) }}
                        >
                            <FormattedMessage id='product.reviewsWithCount' values={{ count: 7 }} />
                        </h3>
                    </Tab>
                </TabList>

                <TabPanel className={moreInfoDesktop_tab_panel}>
                    <h3 className='c-title-level-4 c-referal__body'>
                        <FormattedMessage id='product.description' />
                    </h3>

                    <div>
                            <p className={moreInfoDesktop_light_text}><span className={moreInfoDesktop_span_formatted}><FormattedMessage id='product.materialOuterFabric' /></span> 100% <FormattedMessage id='product.viscose' /></p>
                            <p className={moreInfoDesktop_light_text}><span className={moreInfoDesktop_span_formatted}><FormattedMessage id='product.lining' /></span> 100% <FormattedMessage id='product.viscose' /></p>

                            <p className={moreInfoDesktop_p_formatted}><FormattedMessage id='product.moreAboutThisProduct' /></p>
                        
                            <p className={moreInfoDesktop_light_text}><span className={moreInfoDesktop_span_formatted}><FormattedMessage id='product.cut' /></span> 100% <FormattedMessage id='product.viscose' /></p>
                            <p className={moreInfoDesktop_light_text}><span className={moreInfoDesktop_span_formatted}><FormattedMessage id='product.clasp' /></span> <FormattedMessage id='product.lacing' /></p>
                            <p className={moreInfoDesktop_light_text}><span className={moreInfoDesktop_span_formatted}><FormattedMessage id='product.style' /></span> {product.attributes.style.label} </p>
                            <p className={moreInfoDesktop_light_text}><span className={moreInfoDesktop_span_formatted}><FormattedMessage id='product.itemNumber' /></span> {product.attributes.matrixId} </p>
                    
                    </div>
                </TabPanel>
                <TabPanel className={moreInfoDesktop_tab_panel}>
                    <div>
                        <h3 className='c-title-level-4 c-referal__body'>
                            <FormattedMessage id='product.shipping' />
                        </h3>
                        <div className='o-list-bare'>
                            <div className='o-list-bare__item o-block-short o-block-short--centered'>
                                <YellowTick className={marginRight10} />
                                <div className={moreInfoDesktop_light_text}>
                                    <FormattedMessage id='product.freeShipping' />
                                </div>
                            </div>
                            <div className='o-list-bare__item o-block-short o-block-short--centered'>
                                <YellowTick className={marginRight10} />
                                <div className={moreInfoDesktop_light_text}>
                                    <FormattedMessage id='product.returnPolicy100days' />
                                </div>
                            </div>
                        </div>
                        <div className='o-block-short o-distance-l'>
                            <SmallTruck className={marginRight16} />
                            <div className='o-block-short__body'>
                                <p className={moreInfoDesktop_span_formatted}><FormattedMessage id='product.standardDelivery.title' /></p>
                                <p className={moreInfoDesktop_light_text}><FormattedMessage id='product.standardDelivery.message' /></p>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel className={moreInfoDesktop_tab_panel}>
                    <h3><FormattedMessage id='product.reviews' /></h3>
                </TabPanel>
            </Tabs>

            {selectedTab === 2 ?
                <Scrollbars autoHide style={{
                    height: 'calc(100% - 48px)',
                    minHeight: '340px',
                    margin: '30px',
                    width: 'inherit'
                }}>
                    <ReviewsList/>
                </Scrollbars>
                :
                <div
                    style={{
                        backgroundImage: `url(${product.images[0]})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        width: '100%',
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
