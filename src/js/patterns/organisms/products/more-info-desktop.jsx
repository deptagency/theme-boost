import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import classnames from 'classnames'
import { ReactComponent as ChevronDown } from '../../../../icons/chevronDown.svg'
import { ReactComponent as YellowTick } from '../../../../icons/yellow-tick.svg'
import { ReactComponent as SmallTruck } from '../../../../icons/truck-small.svg'
import Collapsible from 'react-collapsible'
import ReviewsPanel from '../../organisms/products/panels/reviews-panel'
import { moreInfoDesktop, moreInfoDesktop__tabs, moreInfoDesktop__tabList, moreInfoDesktop__tab } from './more-info.module.scss'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const OrganismsMoreInfoProductDesktop = ({ product }) => {

    return (
        <div className={moreInfoDesktop}>
            <Tabs className={moreInfoDesktop__tabs}>
                <TabList className={moreInfoDesktop__tabList}>
                    <Tab className={moreInfoDesktop__tab}>Title 1</Tab>
                    <Tab className={moreInfoDesktop__tab}>Title 2</Tab>
                    <Tab className={moreInfoDesktop__tab}>Title 3</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
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
