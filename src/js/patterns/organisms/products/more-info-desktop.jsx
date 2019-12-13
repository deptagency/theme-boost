import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import classnames from 'classnames'
import { Scrollbars } from 'react-custom-scrollbars'
import MoleculesStaticRating from '../../molecules/ratings/static-rating'
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
    moreInfoDesktop_light_text,
    reviewOverview,
    precent,
    minContentWidth,
} from './more-info.module.scss'
/* eslint-disable enable */

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import ReviewsList from './reviews-list'
import OrganismsDetailsDesktop from "./more-info/details-desktop";

const OrganismsMoreInfoProductDesktop = ({ product }) => {
    const { images , attributes } = product
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
                    {attributes && <OrganismsDetailsDesktop attributes={attributes}  />}
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

                    <div className={reviewOverview}>
                        <div className={`${precent} ${minContentWidth}`}>4,2</div>
                        <MoleculesStaticRating outerClassName={minContentWidth} rating={3} reviewsCount={7} />
                    </div>

                </TabPanel>
            </Tabs>

            {selectedTab === 2 ?
                <Scrollbars autoHide style={{
                    height: 'calc(100% - 48px)',
                    minHeight: '340px',
                    margin: '0 30px 30px',
                    width: 'inherit',
                }}>
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
    )
}

OrganismsMoreInfoProductDesktop.propTypes = {
    product: PropTypes.object.isRequired,
}

export default OrganismsMoreInfoProductDesktop
