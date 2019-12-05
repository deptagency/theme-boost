import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import classnames from 'classnames'
import { ReactComponent as ChevronDown } from '../../../../icons/chevronDown.svg'
import { ReactComponent as YellowTick } from '../../../../icons/yellow-tick.svg'
import { ReactComponent as SmallTruck } from '../../../../icons/truck-small.svg'
import Collapsible from 'react-collapsible'
import ReviewsPanel from '../../organisms/products/panels/reviews-panel'
import { moreInfoDesktop, moreInfoDesktop__tabs, moreInfoDesktop__tabs_selected, moreInfoDesktop__tabList, moreInfoDesktop__tab, borderBottom_selected } from './more-info.module.scss'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const OrganismsMoreInfoProductDesktop = ({ product }) => {
    const [selectedTab, setSelectedTab] = useState(0)

    return (
        <div className={moreInfoDesktop}>
            <Tabs className={moreInfoDesktop__tabs} selectedTabClassName={moreInfoDesktop__tabs_selected}>
                <TabList className={moreInfoDesktop__tabList}>
                    <Tab className={moreInfoDesktop__tab}>
                        <h3 className={classnames({
                                'c-title-level-4 c-referal__body': true,
                                'more-info-priduct--selected': selectedTab === 0
                            })}
                            onClick={() => { setSelectedTab(0) }}
                        >
                            <FormattedMessage id='product.description' />
                        </h3>
                    </Tab>
                    <Tab className={moreInfoDesktop__tab}>
                        <h3 className={classnames({
                            'c-title-level-4 c-referal__body': true,
                            'more-info-priduct--selected': selectedTab === 1
                        })}
                            onClick={() => { setSelectedTab(1) }}
                        >
                            <FormattedMessage id='product.shipping' />
                        </h3>
                    </Tab>
                    <Tab className={moreInfoDesktop__tab}>
                        <h3 className={classnames({
                            'c-title-level-4 c-referal__body': true,
                            'more-info-priduct--selected': selectedTab === 2
                        })}
                            onClick={() => { setSelectedTab(2) }}
                        >
                            <FormattedMessage id='product.reviews' values={{ count: 7 }} />
                        </h3>
                    </Tab>
                </TabList>

                <TabPanel>
                    <h3 className='c-title-level-4 c-referal__body'><FormattedMessage id='product.description' /></h3>
                </TabPanel>
                <TabPanel>
                    <h3 className='c-title-level-4 c-referal__body'><FormattedMessage id='product.shipping' /></h3>
                </TabPanel>
                <TabPanel>
                    <h3 className='c-title-level-4 c-referal__body'><FormattedMessage id='product.reviews' values={{ count: 7 }} /></h3>
                </TabPanel>
            </Tabs>

            <div
                style={{
                    backgroundImage: `url(${product.images[0]})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'
                }}
            />
        </div>
    )
}

OrganismsMoreInfoProductDesktop.propTypes = {
    product: PropTypes.object.isRequired,
}

export default OrganismsMoreInfoProductDesktop
