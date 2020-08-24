import { useSelector } from 'react-redux'

const useWishlistFlaggedProducts = (products) => {
    const { wishlist } = useSelector((state) => {
        return {
            wishlist: state.wishlist.wishlist,
        }
    })

    if (!wishlist.isComplete()) {
        return {
            wishlistedProducts: products,
            loading: true,
        }
    }

    products.map((product) => {
        const wishlisted = wishlist.data.lineItems.find((item) => {
            // For the time being we're using only first variant throughout the Boost theme
            return item.variant.sku === product.variants[0].sku
        })

        product.wishlisted = !!wishlisted
        product.wishlistItemId = wishlisted ? wishlisted.lineItemId : null

        return product
    })

    return {
        wishlistedProducts: products,
        wishlistId: wishlist.data.wishlistId,
    }
}

useWishlistFlaggedProducts.propTypes = {

}

export default useWishlistFlaggedProducts
