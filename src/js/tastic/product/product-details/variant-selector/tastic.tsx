import * as React from 'react'
import { useSelector } from 'react-redux'

import productConnector from '@frontastic/catwalk/src/js/tastic/product/connector'
import tastify from '@frontastic/catwalk/src/js/helper/tastify'
import Translatable from '@frontastic/catwalk/src/js/component/translatable'
import app from '@frontastic/catwalk/src/js/app/app'

import SelectVariant from '../../../../patterns/atoms/select/SelectVariant'
import DropdownList, { DropdownItem } from '../../../../patterns/molecules/DropdownList'

const hasAttribute = (product, attr) => product.variants.find((v) => v.attributes.hasOwnProperty(attr))

//const availableValuesByAttribute = (product, attr) =>

const realVariants = [
    {
        _type: 'Frontastic\\Common\\ProductApiBundle\\Domain\\Variant',
        id: '1',
        sku: 'A0E200000002B7C',
        groupId: '84455',
        price: 13800,
        discountedPrice: null,
        discounts: [],
        currency: 'EUR',
        attributes: {
            baseId: '84455',
            articleNumberManufacturer: 'DAPHINE PTPT 1201 M',
            articleNumberMax: '84455',
            matrixId: 'A0E200000002B7C',
            designer: {
                key: 'gabs',
                label: 'Gabs',
            },
            madeInItaly: {
                key: 'yes',
                label: 'yes',
            },
            commonSize: {
                key: 'oneSize',
                label: 'one Size',
            },
            size: 'one size',
            color: {
                key: 'yellow',
                label: 'Yellow',
            },
            colorFreeDefinition: 'yellow',
            style: {
                key: 'sporty',
                label: 'sporty',
            },
            gender: {
                key: 'women',
                label: 'Damen',
            },
            season: 'A15',
        },
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/084455_1_medium.jpg'],
        isOnStock: true,
    },
    {
        _type: 'Frontastic\\Common\\ProductApiBundle\\Domain\\Variant',
        id: '2',
        sku: 'A0E200000002B7D',
        groupId: '84455',
        price: 13800,
        discountedPrice: null,
        discounts: [],
        currency: 'EUR',
        attributes: {
            baseId: '84455',
            articleNumberManufacturer: 'DAPHNE PTPT 1701 M',
            articleNumberMax: '84456',
            matrixId: 'A0E200000002B7D',
            designer: {
                key: 'gabs',
                label: 'Gabs',
            },
            madeInItaly: {
                key: 'yes',
                label: 'yes',
            },
            commonSize: {
                key: 'oneSize',
                label: 'one Size',
            },
            size: 'one size',
            color: {
                key: 'brown',
                label: 'Brown',
            },
            colorFreeDefinition: 'brown',
            style: {
                key: 'sporty',
                label: 'sporty',
            },
            gender: {
                key: 'women',
                label: 'Damen',
            },
            season: 'A15',
        },
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/084455_1_medium.jpg'],
        isOnStock: true,
    },
    {
        _type: 'Frontastic\\Common\\ProductApiBundle\\Domain\\Variant',
        id: '3',
        sku: 'A0E200000002B7E',
        groupId: '84455',
        price: 13800,
        discountedPrice: null,
        discounts: [],
        currency: 'EUR',
        attributes: {
            baseId: '84455',
            articleNumberManufacturer: 'DAPHNE PTPT 2000 M',
            articleNumberMax: '84457',
            matrixId: 'A0E200000002B7E',
            designer: {
                key: 'gabs',
                label: 'Gabs',
            },
            madeInItaly: {
                key: 'yes',
                label: 'yes',
            },
            commonSize: {
                key: 'oneSize',
                label: 'one Size',
            },
            size: 'one size',
            color: {
                key: 'black',
                label: 'Black',
            },
            colorFreeDefinition: 'black',
            style: {
                key: 'sporty',
                label: 'sporty',
            },
            gender: {
                key: 'women',
                label: 'Damen',
            },
            season: 'A15',
        },
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/084455_1_medium.jpg'],
        isOnStock: true,
    },
    {
        _type: 'Frontastic\\Common\\ProductApiBundle\\Domain\\Variant',
        id: '4',
        sku: 'A0E200000002B7F',
        groupId: '84455',
        price: 13800,
        discountedPrice: null,
        discounts: [],
        currency: 'EUR',
        attributes: {
            baseId: '84455',
            articleNumberManufacturer: 'DAPHNE PTPT 2023 M',
            articleNumberMax: '84458',
            matrixId: 'A0E200000002B7F',
            designer: {
                key: 'gabs',
                label: 'Gabs',
            },
            madeInItaly: {
                key: 'yes',
                label: 'yes',
            },
            commonSize: {
                key: 'oneSize',
                label: 'one Size',
            },
            size: 'one size',
            color: {
                key: 'grey',
                label: 'Grey',
            },
            colorFreeDefinition: 'grey',
            style: {
                key: 'sporty',
                label: 'sporty',
            },
            gender: {
                key: 'women',
                label: 'Damen',
            },
            season: 'A15',
        },
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/084455_1_medium.jpg'],
        isOnStock: true,
    },
    {
        _type: 'Frontastic\\Common\\ProductApiBundle\\Domain\\Variant',
        id: '5',
        sku: 'A0E200000002B7G',
        groupId: '84455',
        price: 13800,
        discountedPrice: null,
        discounts: [],
        currency: 'EUR',
        attributes: {
            baseId: '84455',
            articleNumberManufacturer: 'DAPHNE PTPT 1901 M',
            articleNumberMax: '84459',
            matrixId: 'A0E200000002B7G',
            designer: {
                key: 'gabs',
                label: 'Gabs',
            },
            madeInItaly: {
                key: 'yes',
                label: 'yes',
            },
            commonSize: {
                key: 'oneSize',
                label: 'one Size',
            },
            size: 'one size',
            color: {
                key: 'blue',
                label: 'Blue',
            },
            colorFreeDefinition: 'blue',
            style: {
                key: 'sporty',
                label: 'sporty',
            },
            gender: {
                key: 'women',
                label: 'Damen',
            },
            season: 'A15',
        },
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/084455_1_medium.jpg'],
        isOnStock: true,
    },
    {
        _type: 'Frontastic\\Common\\ProductApiBundle\\Domain\\Variant',
        id: '6',
        sku: 'A0E200000002B7H',
        groupId: '84461',
        price: 17800,
        discountedPrice: null,
        discounts: [],
        currency: 'EUR',
        attributes: {
            baseId: '84461',
            articleNumberManufacturer: 'DAPHNE OXOX 1201 XL',
            articleNumberMax: '84460',
            matrixId: 'A0E200000002B7H',
            designer: {
                key: 'gabs',
                label: 'Gabs',
            },
            madeInItaly: {
                key: 'yes',
                label: 'yes',
            },
            commonSize: {
                key: 'oneSize',
                label: 'one Size',
            },
            size: 'one size',
            color: {
                key: 'yellow',
                label: 'Yellow',
            },
            colorFreeDefinition: 'yellow',
            style: {
                key: 'sporty',
                label: 'sporty',
            },
            gender: {
                key: 'women',
                label: 'Damen',
            },
            season: 'A15',
        },
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/084461_1_medium.jpg'],
        isOnStock: true,
    },
]

interface Variant {
    sku: string
    price: number
    attributes: Attributes
}
// would be great to have something like io-ts for these things
interface Attributes {
    [key: string]: string | { label: string; key: string }
}

// step 1 - parse all variants and get all possible attribute values
const allowed = ['size', 'color', 'length']
// step 2 - filter attributes by whitelist, either from porject settings or overwrite via tastic
function parseVariants(variants) {
    // grab all attributes from current product
    // and filter with whitelist (from project settings or tastic override)
    const filteredAttrs = Object.keys(variants[0].attributes).filter((key) => allowed.includes(key))

    // create an object with a key per whitelisted attribute
    // and then all the possible attributes there are from all the variants
    // checks also uniqueness
    return filteredAttrs.reduce((acc, attr) => {
        return {
            ...acc,
            [attr]: Array.from(new Set(variants.map((v) => v.attributes[attr]))),
        }
    }, {})
}
//const currentVariant = [2, 0, 0] // black, one size, sporty, A0E200000002B7E
const currentVariant = { color: { key: 'yellow', label: 'Yellow' }, size: 'one size' }
//const isVariantVailable = variants =>

const getVariantFromSelectedAttributes = (variants, attributes, current) => {
    return variants.filter((v) => {
        const isMatch = (attr) => {
            return JSON.stringify(v.attributes[attr]) === JSON.stringify(current[attr])
        }
        return Object.keys(attributes).every(isMatch)
    })[0]
    // filter returns an array and we grab the first result. Technbically, that's
    // not necessary, but we had an isue during testing of duplicate variants, so the
    // attribute selections would match for more than one product. According to product,
    // this shouldn't happen, but we just want make sure here.
}

// function filteredAttributes(attributes, whitelist) {
//     // iterate over whitelist and return only those
// }

// function getSKUFromAttributes(variants, currentSelectedAttributes) {
//     const res = variants.filter(v => {

//     })

//     console.log(res)
// }

function allowedVariantAttributes(variant, allowed) {
    // now iterate over our whitelist and return all those attributes
    return Object.keys(variant.attributes)
        .filter((attr) => allowed.includes(attr))
        .reduce((attrs, curAttr) => {
            return {
                ...attrs,
                [curAttr]: variant.attributes[curAttr],
            }
        }, {})
}

// how it works:
// the state is just the attributes of the currently selected variant.
// Those attributes get filtered (because there are many, mostly irrelevant)
// via the allowed list, which comes either from the projects settings or
// via override from the tastic.
//

function VariantSelector(props) {
    const { data, route } = props
    const { product, variant, ...rest } = useSelector((state) => productConnector(state, props))
    console.log('INITAL DATA', product, variant, rest, route)

    //const [currentAvailability, setcurrentAvailability] = useState()
    const [possibleOptions, setPossibleOptions] = React.useState(null)
    const [currentVariantAttrs, setCurrentVariantAttrs] = React.useState(null)

    React.useEffect(() => {
        setCurrentVariantAttrs(allowedVariantAttributes(variant, allowed))
        setPossibleOptions(parseVariants(product.variants))
    }, [product, variant])

    const handleSelectAttribute = (attr, e) => {
        const current = JSON.parse(e.target.value)
        setCurrentVariantAttrs({ ...currentVariantAttrs, [attr]: current })
        const currentVariant = getVariantFromSelectedAttributes(
            product.variants,
            setPossibleOptions,
            currentVariantAttrs
        )
        console.log(currentVariant)
        app.getRouter().replace(route.route, { ...route.parameters, _variant: 2 })
    }

    if (!possibleOptions) return null
    console.log('render', possibleOptions, currentVariantAttrs)
    return Object.keys(possibleOptions).map((attr) => {
        return (
            <div className='flex-col pt-4 md:pb-4'>
                <div className='pb-2'>{attr}</div>
                <div className='w-full mb-6 md:mb-0'>
                    <DropdownList
                        value={JSON.stringify(currentVariantAttrs[attr])}
                        onChange={(e) => handleSelectAttribute(attr, e)}
                    >
                        {possibleOptions[attr].map((val, key) => {
                            //console.log('select', val, key, allAttributes[lastSelected.attr])
                            return (
                                <DropdownItem
                                    value={typeof val === 'string' ? val : JSON.stringify(val)}
                                    label={typeof val === 'string' ? val : val.label}
                                />
                            )
                        })}
                    </DropdownList>
                </div>
            </div>
        )
    })
}

export default tastify({ connect: { route: true, urlHandler: true } })(VariantSelector)
