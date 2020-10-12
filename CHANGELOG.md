# boost Changelog

## `1.0.0-rc.8` (2020-10-12)

* Badge pasitioning fix
* Adds fullwidth render, fixes fully clickable tile
* Horizontal spacer fix
* Updates the tile with more features

## `1.0.0-rc.7` (2020-10-01)

* Fixed js errors in various components
* fix: Removes header and adjust pagination color
* feat: Adds a new notification component
* fix: Adds missing autofocus prop to standard input
* feat: Adds a search form component
* fix: Ensure even small images span their box
* fix: grid was missing
* A11y: Provide labels for all input elements
* A11y: Icrease contrast ratio for buttons
* A11y: Added aria-label to all buttons without a clear label
* A11y: CS & start providing translated labels to buttons

## `1.0.0-rc.7` (2020-09-15)

**@TODO:** Please adapt these raw commit messages since last release into CHANGELOG entries – they will be added to the package changelog.

* Merge pull request #421 from FrontasticGmbH/refactor/the-great-css-purge-1
* Merge pull request #317 from FrontasticGmbH/kore/typescript-types
* fix: also mind the catwalk styles when purging the CSS
* Merge branch 'master' into kore/typescript-types
* chore (a11y): CS & start providing translated labels to buttons
* misc: Tagged release 1.0.0-rc.6 for boost
* fix: Removed the fixed height & width solved already by RemoteImage
* fix: Allow anonymous access to wishlist
* fix: Position control buttons without overlay
* chore: CS
* chore: Fixed my changes to account Tastics to work again
* removes old imports
* refactor: boost theme css cleanup
* chore: Use tastify with translate for all Tastics
* chore: Converted TileTastic into typed TypeScript tastic
* fix: Pad remote images by default (no cropping)
* Merge pull request #408 from FrontasticGmbH/kore/tastify-translate
* fix: Use RemoteImage on PDP for optimized image delivery
* fix: Added lodash dependency to backstage
* feat: Implementd translations directly in `tastify`
* chore: Remove hidden statements from CSS, since we hide using state now
* chore: CS
* Merge branch 'master' into hco/boost-hide-navigation-with-js
* Merge branch 'master' into kore/lodash
* feat: Got rid of lodash in boost theme
* fix: added ts check to package.json for ci
* adds copy of client tsconfig to boost theme
* misc: removed unused server.js from theme
* feat: Only render mobile navigation on mobile
* Merge branch 'master' into kore/lodash
* Merge pull request #402 from FrontasticGmbH/refactor/color-cleanup
* feat: Switched to lodash-es instead of plain lodash
* feat: Configure tailwind CSS purging directly in boost theme
* refactor: changes secondary colors to 200/500/800
* refactor: changes primary colors to 200/500/800
* refactor: updates theme colors to convention
* fix: Temporarily disable packaging of Boost Theme to get a build.  #release
* chore: Disble ESLINT rule for tastics.js.
* feat: Split some tastics into asyncComponent
* Use image in navigation header and added TODO about DOM size
* fix: Duplicate project name.
* fix: Make Boost theme use global react.xml build targets.
* fix: There is no caption…
* fix: CS.
* chore: Coding Style
* fix: use remote image for optimal image delivery
* Merge pull request #396 from FrontasticGmbH/ssr-fix/uselayouteffect-warning
* Merge pull request #397 from FrontasticGmbH/refactor/full-bleed-elements
* fix: removes unused onChange prop
* fix: More resilient product stream handling in slider
* refactor: removes old MarginBreakout
* fix: slider cutoff, implements buttons via Sofia
* renames imports of FullPageWidthWrapper
* renames marginbreakout
* fix: updates react-redux to fix ssr errors
* fix: CS
* Merge branch 'master' into kore/theme-from-config
* fix: More occurrances of react_bootstrap.xml.
* fix(boost-theme): header refactored, removed: Grid and Cell components
* chore: CS.
* style fixes
* feat: Read Boost Theme theme prperties from project.yml
* product details page: add to watchlist icon position fixed
* Merge pull request #382 from FrontasticGmbH/empty-stories-refactored
* misc: Tagged release 1.0.0-rc.5 for boost
* fix: Do not hide SSR overlay
* misc: Tagged release 1.0.0-rc.4 for boost
* fix: partly reimplementation of spaces fixes
* eslint fix
* initial commit
* feat(boost-theme): themes adjustment and cleanup
* feat(boost-theme): adapted for pictures with the white background
* feat(boost-theme): added boilerplate theme file
* feat(boost-theme): themable Boost theme
* Merge branch 'master' into fix/layout-spacings
* fix: removes more outside spacings
* fix: removes resize event handlers from grid
* fix(boost-theme): using the default theme
* fix(boost-theme): product teaser - clickable
* feat(boost-theme): theming - next phase
* fix(boost-theme): custom hook and some photo scaling (solution for now, until we get more customized photos from commerce tools)
* feat(boost-theme): added ability to change the basic theme of the Boost theme
* fix(boost-theme): preventing extra border
* fix(boost-theme): getting back the height transition + some refactor
* Merge branch 'master' into wishlist-ui-brushups
* feat(boost): adding products on wishlist brushed
* fix(boost-theme): adjusting z-index so it doesn't overlap with mobile menu
* Merge branch 'master' into wishlist-ui-brushups
* feat(boost): brushups on wishlist, added borders
* refactor(boost-theme): error handling on wishlist page
* refactor(boost-theme): moving catwalk functions to the tastic level
* refactor(boost-theme): small code consistency
* Merge pull request #364 from FrontasticGmbH/fix_token_and_tree_depth
* change also resetPassword token to confirmationToken
* feat(boost): added transition to the layout
* Merge branch 'master' into wishlist-empty-state
* feat(boost-theme): functionality for empty state
* refactor(boost-theme): moving code from tastic to a organism component
* refactor(boost-theme): resolving conflicts
* Merge branch 'master' into boost-mobile-navigation-links-footer
* feat(boost-theme): wishlist functionality and some refactorings
* lint fix
* cleans spacings in other components
* cleans spacings in header components
* adds a page wrapper and cleans up the grid a bit
* feat(boost-theme): implemented footer links mobile
* fixed empty state story bug
* Merge pull request #355 from FrontasticGmbH/empty-state-orders-addresses-account
* fix: coding style
* feat(Nan): made component NoOrders
* feat(Nan): Empty state for orders and addresses
* fixed top menu icons
* fix(boost-theme): css adjustments
* fix(boost-theme): adding pointer
* feat(boost-theme): account links on mobile menu
* Merge branch 'sanja/scrollbars-swap'
* refactor(account): swapped react-scrollbars-custom with react-custom-scrollbars for consistency across the Boost theme
* fix: eslint warnings
* fix: coding style
* Merge pull request #351 from FrontasticGmbH/sanja/notifiy-fade-out
* Merge pull request #344 from FrontasticGmbH/refactor/empty-state
* Merge pull request #350 from FrontasticGmbH/andrius-account-addresses
* Merge pull request #349 from FrontasticGmbH/klaudija-selected-order-ui
* fix(account): height on the account menu for desktop
* feat(boost-theme): disappearing notifications
* removed unused api methods
* feat(BOOST-219): order detail UI finished
* addresses finished
* initial commit
* feat(account): layout for order preview
* fix: coding style
* Clean up - forgotten prop.
* refactor(account): using AccountMenu on different pages
* lint fixes
* Adds a story with a menu
* Merge branch 'master' into refactor/empty-state
* Some cleanup and more functionality for EmptyState
* Merge pull request #341 from FrontasticGmbH/sanja/read-only-email
* refactor(account): using `ButtonWithLoader` component for code consistency
* feat(account): user can't update email
* Merge pull request #336 from FrontasticGmbH/sanja/user-details-form
* feat(account): loaders and notifications in place
* feat(account): user details form validation
* feat(account): simple password requirement
* feat(account): Changing password by user
* Merge branch 'master' into refactor/empty-state
* Merge branch 'master' into bugfix/storybook-translations
* feat(account): responsive account ui
* Merge branch 'master' into bugfix/breakpoints
* work in progress
* removes a forgotten console.log
* removes IntlProvider which I just used for testing
* fixes react-intl in storybook
* prepares docs addon for 6.0 release and removes warning
* upgrades storybook to latest version
* upgrades storybook to latest version
* CS
* Merge pull request #316 from FrontasticGmbH/sanja/basic-password-reset
* added temporarly logout button
* Setting up basic password recovery.
* connected with profile tastic and style improvemed
* Merge branch 'master' into boost-221-account-overview-markup
* added translation
* BC: Rename confirmation token route parameter
* Merge branch 'master' into boost-221-account-overview-markup
* style brushups and added translations
* made accound overview markup
* Register and Login functionality.
* Eslint fixes.
* Merge remote-tracking branch 'origin/master' into account-login-signup-markup
* added login signup markup
* Checkout - error handling bug fix.
* Added noImage for product slider.
* Merge remote-tracking branch 'origin/master'
* Fixing image size on the product page.
* Merge pull request #310 from FrontasticGmbH/Checkout-success-error-integration
* Translation - order id.
* Error logic and refactor.
* code refactoring
* fixed errors constrast issue, js validation fixed
* Merge remote-tracking branch 'origin/master' into Checkout-success-error-integration
* added checkout success error components
* Refactor.
* Refactor.
* Merge branch 'master' into sanja/add-to-cart-loader
* LoaderButton on the product page.
* Setting button loaders on checkout panels.
* Classes tidy up.
* Merge pull request #306 from FrontasticGmbH/sanja/form-error-message-ui
* Tagged release 1.0.0-rc.3 for boost
* Moved boost theme webpack configurations to boost theme webpack plugin
* Classes tidy up.
* UI for form validation message.
* Console error - fix.
* Clean up and refactor.
* Clean up.
* Sticky footer.
* Clean up.
* Bug fix.
* Clean up.
* Loaders on cart and checkout pages.
* Merge remote-tracking branch 'origin/checkout-api' into checkout-api
* Clean up.
* removed comments
* Merge remote-tracking branch 'origin/master' into checkout-api
* removed loaded, loading, error stuff
* checkout api main functionality done
* fixed transition delay of main menu
* checkout form default values
* fixed js validation errors
* refactoring code
* Merge remote-tracking branch 'origin/master' into checkout-api
* theme-boost: fix failing tests because of eslint
* Work in progress.
* Merge pull request #294 from FrontasticGmbH/checkout-countries
* Work in progress.
* Fixed mobile menu UI
* added default countries
* Merge pull request #293 from FrontasticGmbH/boost-196-checkout-UI
* yarn fix
* Merge branch 'boost-194-error-page'
* Merge pull request #290 from FrontasticGmbH/boost-188-thank-you-page
* Merge pull request #292 from FrontasticGmbH/checkout-navigation-improvements
* imported fullCartLoader to checkout and cart
* navigation and design fixes
* Merge branch 'checkout-from-loaders' into boost-196-checkout-UI
* Tagged release 1.0.0-rc.2
* Translations and renamings.
* added width
* removed from newsletter component
* added fixed width
* made full cart loader in Storybook
* Work in progress.
* Tagged release 1.0.0-rc.1
* Added loader
* Merge branch 'master' into boost-188-thank-you-page
* Merge branch 'master' into boost-194-error-page
* added routing and translation
* added routing
* Adding translations
* Merge remote-tracking branch 'origin/master'
* Feature Service - small correction
* Merge branch 'master' of https://github.com/FrontasticGmbH/frontastic
* checkout footer breakpoint fixed
* Merge remote-tracking branch 'origin/master'
* Tailwind class typo fix
* Merge branch 'master' into boost-189-footer-checkout
* fixing height footer
* Merge pull request #280 from FrontasticGmbH/boost-182-header-checkout
* Footer position adjusting.
* renaming
* Merge branch 'master' into boost-189-footer-checkout
* fixed logo and storybook
* Using `cart.isComplete()`
* Merge remote-tracking branch 'origin/checkout-forms' into checkout-forms
* fixed height issue
* Translations and renamings.
* fixed height glich
* added MarginBreakout
* added propTypes
* adding MetaNav
* js validation fixes
* fixeed spacing and changed the Route
* finished checkout
* added footer checkout tastic and route to homepage
* basic checkout form validation
* testing
* checkout error page made in storybook
* Creating checkout header tastic
* made header checkout tastic
* styling adjustment
* removes css breakpoints
* refactoring done
* payment and overview panels done
* removed cart from checkout panels
* initial shipping panel done
* made Chekout Confirmation page in Storybook
* first changes
* Merge remote-tracking branch 'origin/master' into checkout-forms
* initial
* moving checkout footer to folder
* Merge pull request #258 from FrontasticGmbH/sanja/checkout-form-validation-with-panel-switches
* Merge branch 'master' into boost-191-config.js-cleaning
* added translations and button
* yarn fix
* added proptypes
* creating checkout footer in storybook
* changed color
* changed classname on logo
* made checkout header in storybook
* CS
* Fix merge problem
* Merge branch 'master' into kirill/BOOST-177-product-details-page-tech-debt
* Use correct new count when updating cart items
* Make designer, color and size of product optional
* fixed height in mobile main menu
* Only show one product image
* Show variant selector only when attributes are available
* Added popup alert for the presentational purposes.
* Go to next panel only if the current form is valid.
* boost-theme: fix failing test (again)
* boost-theme: fix failing test
* merged master
* Merge branch 'master' into boost-191-config.js-cleaning
* cleaning up classes
* Refactor all other comments from PR (excluding comment regarding horizontal spacer)
* Refactor setSelectedVariantIndex property name to onChange
* Make logo clickable
* fixed cart
* Merge branch 'master' into sanja/checkout-stepper-layout
* Merge pull request #235 from FrontasticGmbH/feature/product-listing
* Console warnings cleared.
* Merge pull request #251 from FrontasticGmbH/kirill/BOOST-151-quantitive-indicator-to-minicart
* Adjust styles for badge
* Viewport dimension bug fixed.
* Adjust styles
* removed classes from tailwind.config.js
* Fix eslint/prettier stuf
* Add Badge to storybook
* Finish with logic
* Implement design for badge, add usage to the MainMenu component
* Removed it from Stroybook as translations are not working.
* Console warnings cleanup.
* Checkout Stepper Layout
* Merge branch 'master' into feature/product-listing
* Various cleanups from PR Feedback + CSS updates
* Renames sticker component file
* Adds missing icon
* Move testing, storybook, webpack packages to devDepencencies
* Remove all unused dependencies, move all used dependencies from devDepencencies to normal dependencies
* Merge branch 'master' into feature/product-listing
* css, wishlist return value fix
* rename, cleanup, fixes
* rename, rework some of that tree logic
* Added margins to the icons.
* Putting back the margin.
* Storybook brush up.
* Code alignment.
* Refactor.
* Storybook listing.
* Abstracting layout for cart and checkout page.
* fixed cart summary
* fixed cart validation errors
* Padding fix on the FeatureService.
* Padding fix on the FeatureService.
* Merge pull request #234 from FrontasticGmbH/kirill/BOOST-172-horizontal-spacer-tastic
* theme-boost: fix failing test
* Tagged release 1.0.0-beta.91
* Title of Sidebar/CategoryNavigation optional
* Sidebar refactor - adds dynamic data - refactors to CategoryNavigation
* Merge branch 'master' into 165-markdown-storybook
* changes dummy text of filters
* adds aspect ratio spacing to tailwind
* sets proper category for listing page
* adds tailwind icons
* adds stickers and wishlist button
* Adds a product teaser component
* renames tastic, adds category
* adds product listings
* Refactor Horizontal Spacer to use more human-understandable size descriptions, but leave ability to have just space in px
* added Markdown in Storybook
* fixed body margins
* added tailwind styling
* remmoved shadow styles from tailwind.config
* fixed body layout
* CR fixes
* Merge branch 'master' into cart-tastics-rework
* Product page -adding divider.
* JS fixes
* CF fixes
* boost 174 - margin header alignment
* refactored cart story
* js fixes
* finished cart
* fixed cart select product
* Merge branch 'master' into cart-tastics-rework
* cart refactoring
* Removed old boost files. Added fixture file.
* Merge remote-tracking branch 'origin/master' into cart-tastics-rework
* initial commit

## `1.0.0-rc.6` (2020-09-11)

* Got rid of lodash in boost theme
* Only render mobile navigation on mobile
* Configure tailwind CSS purging directly in boost theme
* Split some tastics into asyncComponent
* Read Boost Theme theme prperties from project.yml
* Added transition to the layout
* Wishlist functionality and some refactorings
* Implemented footer links mobile
* Empty state for orders and addresses
* Account links on mobile menu
* Disappearing notifications
* Layout for order preview
* User can't update email
* Loaders and notifications in place
* User details form validation
* Simple password requirement
* Changing password by user
* Responsive account ui
* Setting up basic password recovery.
* Loaders on cart and checkout pages.
* Checkout api main functionality
* Adding translations
* Payment and overview panels
* Removed cart from checkout panels
* Implement design for badge, add usage to the MainMenu component

## `1.0.0-rc.5` (2020-08-11)

* fix: Do not hide SSR overlay

## `1.0.0-rc.4` (2020-08-05)

* Themable Boost theme
* Layout Spacings
* Wishlist UI Brushups
* Implemented footer links mobile
* Order Detail UI
* AccountMenu
* Responsive Account UI
* Password recovery
* Register and Login functionality
* Checkout
* Fixed mobile menu UI
* Translations and renamings
* Payment and overview panels
* Show variant selector only when attributes are available
* Viewport dimension bug fixed.
* Implement design for badge, add usage to the MainMenu component
* Adds stickers and wishlist button
* Adds a product teaser component
* Refactor Horizontal Spacer to use more human-understandable size descriptions, but leave ability to have just space in px
