import React from 'react'

import { withKnobs } from '@storybook/addon-knobs'

import OrderBilling from '../../patterns/templates/order/order-billing'
import EmptyCart from '../../patterns/templates/cart/empty-cart'
import FullCart from '../../patterns/templates/cart/full-cart'
import EmptyWishlist from '../../patterns/templates/cart/empty-wishlist'
import FullWishlist from '../../patterns/templates/cart/full-wishlist'
import PassworResetAddMail from '../../patterns/templates/passwort-reset/passwort-reset-add-mail'
import NewPassword from '../../patterns/templates/passwort-reset/new-password'
import PasswordResetConfirmation from '../../patterns/templates/passwort-reset/password-reset-confirmation'
import Login from '../../patterns/templates/login'
import Register from '../../patterns/templates/register'
import OrderConfirmation from '../../patterns/templates/order-confirmation'
import Order from '../../patterns/templates/order'
import MyOrders from '../../patterns/templates/my-account/my-orders'
import MyOrderDetails from '../../patterns/templates/my-account/my-order-details'
import MyAddresses from '../../patterns/templates/my-account/my-addresses'
import MyAddressChange from '../../patterns/templates/my-account/my-address-change'
import MyUserData from '../../patterns/templates/my-account/my-user-data'
import MyEmailChange from '../../patterns/templates/my-account/my-email-change'
import MyPasswordChange from '../../patterns/templates/my-account/my-password-change'
import CheckoutLogin from '../../patterns/templates/checkout-login'
import CheckoutRegister from '../../patterns/templates/checkout-register'
import Home from '../../patterns/templates/home'
import Help from '../../patterns/templates/help'
import HelpDetail from '../../patterns/templates/help-detail'
import ProductDetail from '../../patterns/templates/detail'
import Filter from '../../patterns/templates/filter'

export default {
    title: '5.Templates|All',
    decorators: [withKnobs],
}

export const orderBilling = () => {
    return <OrderBilling />
}

orderBilling.story = {
    name: 'Order Billing',
}

export const templateEmptyCart = () => {
    return <EmptyCart />
}

templateEmptyCart.story = {
    name: 'Cart Empty',
}

export const templateFullCart = () => {
    return <FullCart />
}

templateFullCart.story = {
    name: 'Full Cart',
}

export const templateEmptyWishlist = () => {
    return <EmptyWishlist />
}

templateEmptyWishlist.story = {
    name: 'Wishlist Empty',
}

export const templateFullWishlist = () => {
    return <FullWishlist />
}

templateFullWishlist.story = {
    name: 'Full Wishlist',
}

export const templatePasswortResetAddMail = () => {
    return <PassworResetAddMail />
}

templatePasswortResetAddMail.story = {
    name: 'Passwort Reset Add Mail',
}

export const templateNewPassword = () => {
    return <NewPassword />
}

templateNewPassword.story = {
    name: 'New Passwort Setup',
}

export const templatePasswordResetConfirmation = () => {
    return <PasswordResetConfirmation />
}

templatePasswordResetConfirmation.story = {
    name: 'Password Reset Confirmation',
}

export const templateLogin = () => {
    return <Login />
}

templateLogin.story = {
    name: 'Login',
}

export const templatesRegister = () => {
    return <Register />
}

templatesRegister.story = {
    name: 'Register',
}

export const templatesOrderConfirmation = () => {
    return <OrderConfirmation />
}

templatesOrderConfirmation.story = {
    name: 'Order Confirmation',
}

export const templatesOrder = () => {
    return <Order />
}

templatesOrder.story = {
    name: 'Order Overview',
}

export const myOrders = () => {
    return (
        <div className='fit-view'>
            <MyOrders />
        </div>
    )
}

myOrders.story = {
    name: 'My Orders',
}

export const templatesMyOrderDetails = () => {
    return <MyOrderDetails />
}

templatesMyOrderDetails.story = {
    name: 'My Order Detailview',
}

export const templatesMyAddresses = () => {
    return <MyAddresses />
}

templatesMyAddresses.story = {
    name: 'My Addresses',
}

export const templatesMyAddressChange = () => {
    return <MyAddressChange />
}

templatesMyAddressChange.story = {
    name: 'Address Change',
}

export const templatesMyUserData = () => {
    return <MyUserData />
}

templatesMyUserData.story = {
    name: 'User Data',
}

export const templatesMyEmailChange = () => {
    return <MyEmailChange />
}

templatesMyEmailChange.story = {
    name: 'Email Change',
}

export const templatesMyPasswordChange = () => {
    return <MyPasswordChange />
}

templatesMyPasswordChange.story = {
    name: 'Password Change',
}

export const templatesCheckoutLogin = () => {
    return <CheckoutLogin />
}

templatesCheckoutLogin.story = {
    name: 'Checkout Login',
}
export const templatesCheckoutRegister = () => {
    return <CheckoutRegister />
}

templatesCheckoutRegister.story = {
    name: 'Checkout Register',
}

export const templatesHome = () => {
    return <Home />
}

templatesHome.story = {
    name: 'Home',
}

export const templatesHelp = () => {
    return <Help />
}

templatesHelp.story = {
    name: 'Help',
}

export const templatesHelpDetail = () => {
    return <HelpDetail />
}

templatesHelpDetail.story = {
    name: 'Help Detail',
}

export const templatesProductDetail = () => {
    return <ProductDetail />
}

templatesProductDetail.story = {
    name: 'Product Detail',
}

export const templatesFilter = () => {
    return <Filter />
}

templatesFilter.story = {
    name: 'Filter',
}

// export const home = () => { return <TemplatesHome /> }

// home.story = {
//     name: 'Home',
// }

// export const bestsellerSwipeVertical = () => {
//     return (
//         <div>
//             <MoleculesHeading />
//             <VerticalSwipe sliderId='swipe-content'>
//                 <div style={{ display: 'grid', gridGap: '8px', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
//                     <MoleculesProduct width='150px' />
//                     <MoleculesProduct width='150px' />
//                     <MoleculesProduct width='150px' />
//                     <MoleculesProduct width='150px' />
//                 </div>
//             </VerticalSwipe>
//         </div>
//     )
// }

// bestsellerSwipeVertical.story = {
//     name: 'Bestseller Swipe Vertical',
// }

// export const leererWarenkorb = () => { return <EmptyCart /> }

// leererWarenkorb.story = {
//     name: 'Leerer Warenkorb',
// }

// export const meinWarenkorb = () => {
//     return (
//         <div>
//             <FullCart />
//         </div>
//     )
// }

// meinWarenkorb.story = {
//     name: 'Mein Warenkorb',
// }

// export const interactiveCart = () => {
//     const emptyCart = boolean('Empty cart', true)

//     if (emptyCart) { return <EmptyCart /> } else { return <FullCart /> }
// }

// interactiveCart.story = {
//     name: 'Interactive Cart',
// }

// export const cartSlideIn = () => {
//     const [isOpen, setIsOpen] = useState(false) // eslint-disable-line react-hooks/rules-of-hooks
//     const emptyCart = boolean('Empty cart', false)

//     return [
//         <div
//             key='cart-icon'
//             onClick={() => {
//                 setIsOpen(true)
//             }}
//             >
//             <MoleculesCart />
//         </div>,
//         <SlideIn
//             key='slide-in-content'
//             isOpen={isOpen}
//             header={<OrganismsHeaderSlideIn setIsOpen={setIsOpen} title='Main Warenkorb' />}
//             >
//             {emptyCart ? (
//                 <EmptyCart setIsOpen={setIsOpen} />
//             ) : (
//                 <FullCart setIsOpen={setIsOpen} />
//             )}
//         </TemplatesSlideIn>,
//     ]
// }

// cartSlideIn.story = {
//     name: 'Cart Slide In',
// }

// export const cartSlideUp = () => {
//     const [isOpen, setIsOpen] = useState(false) // eslint-disable-line react-hooks/rules-of-hooks
//     const emptyCart = boolean('Empty cart', false)

//     return [
//         <div
//             key='cart-icon'
//             onClick={() => {
//         setIsOpen(true)
//       }}
//             >
//             <MoleculesCart />
//         </div>,
//         <SlideInPanel
//             key='slide-in-content'
//             isOpen={isOpen}
//             setIsOpen={setIsOpen}
//             header={<OrganismsHeaderSlideIn setIsOpen={setIsOpen} title='Main Warenkorb' />}
//             >
//             {emptyCart ? (
//                 <EmptyCart setIsOpen={setIsOpen} />
//       ) : (
//           <FullCart setIsOpen={setIsOpen} />
//       )}
//         </TemplatesSlideInPanel>,
//     ]
// }

// cartSlideUp.story = {
//     name: 'Cart Slide Up',
// }

// export const filter = () => {
//     return (
//         <div className='fit-view'>
//             <Filter />
//         </div>
//     )
// }

// filter.story = {
//     name: 'Filter',
// }

// export const help = () => { return <Help /> }

// help.story = {
//     name: 'Help',
// }

// export const deliveryFeatrues = () => { return <OrganismsDeliveryFeatures /> }

// deliveryFeatrues.story = {
//     name: 'Delivery featrues',
// }

// export const moreInfoProduct = () => { return <OrganismsMoreInfoProduct /> }

// moreInfoProduct.story = {
//     name: 'More info product',
// }

// export const myOrdersDetails = () => {
//     return (
//         <div className='fit-view'>
//             <MyOrderDetails products={[{}, {}]} />
//         </div>
//     )
// }

// myOrdersDetails.story = {
//     name: 'My Orders - Details',
// }

// export const productReturnView = () => {
//     return (
//         <div className='fit-view'>
//             <ProductReturn />
//         </div>
//     )
// }

// productReturnView.story = {
//     name: 'Product return - view',
// }

// export const orderSuccess = () => { return <OrderSuccess /> }

// orderSuccess.story = {
//     name: 'Order Success',
// }
