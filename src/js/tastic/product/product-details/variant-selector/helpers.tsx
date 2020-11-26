// this type should probably be elsewhere, but I felt the the definition
// of what the UI is "capable" of rendering belongs to that UI layer
import { Attribute } from '../../../../patterns/molecules/Product/attributeSelector'
import { Variant } from '@frontastic/common/src/js/types/product'

export interface PossibleVariants {
    [key: string]: Attribute[]
}

// Extracts all possible attributes and their values from the product variants.
export function parseVariants(variantArg: Variant | Variant[], allowed: string[]): PossibleVariants {
    // grab all attributes from current product
    // and filter with whitelist (from project settings or tastic override)
    const filteredAttrs = Object.keys((variantArg[0] || variantArg).attributes).filter((key) => allowed.includes(key))

    // create an object with a key per whitelisted attribute
    // and then all the possible attributes there are from all the variantArg
    // checks also uniqueness, used to render the select boxes, etc
    // Note: attributes can be either strings or objects
    // it also assumes that one attribute (size, color, etc) of all the variantArg has always the same structure.
    return filteredAttrs.reduce((acc, attr) => {
        return {
            ...acc,
            [attr]: Array.isArray(variantArg)
                ? uniqArrayOfObjects(variantArg.map((v) => v.attributes[attr]))
                : variantArg.attributes[attr],
        }
    }, {})
}

// as the name says, takes an array of objects and filters out all duplicates
function uniqArrayOfObjects(arr: Attribute[]) {
    return arr.filter((v, i, a) => a.findIndex((t) => JSON.stringify(t) === JSON.stringify(v)) === i)
}

// Finds the corresponding product variant based on all currently selected attributes.
export function getVariantFromSelectedAttributes(variants: Variant[], attributes: Attribute[], current: Variant) {
    return variants.findIndex((v) => {
        const isMatch = (attr: string) => {
            return JSON.stringify(v.attributes[attr]) === JSON.stringify(current[attr])
        }
        return Object.keys(attributes).every(isMatch)
    })
}
