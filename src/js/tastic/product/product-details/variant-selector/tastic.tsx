import * as React from 'react'
import { useSelector } from 'react-redux'

import productConnector from '@frontastic/catwalk/src/js/tastic/product/connector'
import tastify from '@frontastic/catwalk/src/js/helper/tastify'
import app from '@frontastic/catwalk/src/js/app/app'

import AttributeSelector from '../../../../patterns/molecules/Product/attributeSelector'

import { Product, Variant } from '@frontastic/common/src/js/types/product'

import { parseVariants, getVariantFromSelectedAttributes } from './helpers'
//
//
// TYPES
interface RootState {
    product: Product
    variants: Variant[]
}

export interface Props {
    data: { stream: Product; isSingularSelectable: boolean; possibleAttributes: [{ label: string; attribute: string }] }
    route: { route: string; parameters: { _variant: string } }
}

// TYPEGUARD for attributes which technically can be anything according to:
// https://frontastic.slack.com/archives/C013EQ3URUL/p1605178586442000?thread_ts=1605173728.433300&cid=C013EQ3URUL
// This way we make sure the UI lets us know.
// ** Currently not in use because attributes are typed any. ¯\_(ツ)_/¯
//
//function isValidAttrs(attrs: unknown[]): attrs is unknown[] {
//    if (!Array.isArray(attrs)) {
//        throw new Error('Product Attributes are not valid for this Tastic')
//    }
//    if (attrs.every((a) => typeof a === 'string')) {
//        return true
//    }
//    if (attrs.every((a) => a.label !== 'undefined' && a.key !== undefined)) {
//        return true
//    }
//    throw new Error('Product Attributes are not valid for this Tastic')
//}

//
//   (\ /)
//  ( . .)
//  c(")(")
//
// HOW IT WORKS:
//
// 1. We go through all available variants of the current product
// and extract all possible attributes from there (Note: product variants
// are unique combinations of attributes like size and color).
// This is what the function `parseVariants` does.
// A result is an object like this:
//      {
//       color: [{key: "black", label: "Black"}, {key: "yellow", label: "Yellow"}],
//       size: ['s', 'm', 'l', 'xl']
//      }
// Attributes can be either a string or an Object, see the Attribute type above.
//
// 2. Now that we know which possible attributes there are (e.g., which sizes and colors),
// we can use those to render the UI.
//
// 3. Once a user selects an attribute, the helper function `getVariantFromSelectedAttributes`
// finds the variant based on the currently selected attributes and uses that to update the URL state.
//
//
//

// MAIN COMPONENT
function VariantSelector(props: Props) {
    const { data, route } = props
    const { product, variant } = useSelector((state: RootState) => productConnector(state, props))

    const allowedAttributes = data.possibleAttributes.map((attr) => attr.attribute)

    const [availableAttributes, setAvailableAttributes] = React.useState(null)
    const [currentVariantAttrs, setCurrentVariantAttrs] = React.useState(null)

    React.useEffect(() => {
        if (variant && product && allowedAttributes) {
            // we need to parseVariants twice here, unfortunately. Once for
            // the currently selected variant to get the currentlu selected and to deal with
            // handling the selection of attributes later.
            // And then once more to get every available attribute for rendering the UI
            setCurrentVariantAttrs(parseVariants(variant, allowedAttributes))
            setAvailableAttributes(parseVariants(product.variants, allowedAttributes))
        }
    }, [data.possibleAttributes])

    const handleSelectAttribute = (attr: string, e: React.ChangeEvent<HTMLSelectElement>) => {
        const current = JSON.parse(e.target.value)
        // Note: if the value is a primitive (string), JSON.parse turns that into a number,
        // which then doesn't work anymore to find the proper variant, so we convert it to a string before
        const currentVariant = getVariantFromSelectedAttributes(product.variants, availableAttributes, {
            ...currentVariantAttrs,
            [attr]: typeof current === 'number' ? current.toString() : current,
        })
        setCurrentVariantAttrs(currentVariant)
        app.getRouter().replace(route.route, { ...route.parameters, _variant: currentVariant })
    }

    if (!availableAttributes || !product || !variant) return null

    // It would make sense to iterate over the keys of only the available attributes,
    // (availableAttributes) but then you'd have a harder time to get to the label.
    // That's why there's the extra null check
    return data.possibleAttributes.map(({ attribute: attr, label }) => {
        if (!availableAttributes[attr]) return null

        return (
            <AttributeSelector
                key={attr}
                label={label}
                value={currentVariantAttrs[attr]}
                options={availableAttributes[attr]}
                isSingularSelectable={data.isSingularSelectable}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleSelectAttribute(attr, e)}
            />
        )
    })
}

export default tastify({ translate: true, connect: { route: true, urlHandler: true } })(VariantSelector)
