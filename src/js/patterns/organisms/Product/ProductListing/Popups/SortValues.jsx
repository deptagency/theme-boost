import React  from 'react'
import { FormattedMessage } from 'react-intl'

export default [
    {
        name: <FormattedMessage id='filters.sortFilter.lowPrice' />,
        value: {
            attributeId: 'variants.scopedPrice.value.centAmount',
            order: 'ascending'
        }
    },
    {
        name: <FormattedMessage id='filters.sortFilter.highPrice' />,
        value: {
            attributeId: 'variants.scopedPrice.value.centAmount',
            order: 'descending'
        }
    }
]