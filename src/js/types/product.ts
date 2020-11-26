export interface Product {
    _type: string
    productId: string
    changed: Date
    version: string
    name: string
    slug: string
    description: string
    categories: string[]
    variants: Variant[]
    _url: string
}

export interface Variant {
    _type: string
    id: string
    sku: string
    groupId: string
    price: number
    discountedPrice?: any
    discounts: any[]
    currency: string
    attributes: Attributes
    images: string[]
    isOnStock: boolean
}
// very generic yes, but they can technically be anything.
// It would be great to have something like io-ts for these things
export interface Attributes {
    [key: string]: unknown
}
