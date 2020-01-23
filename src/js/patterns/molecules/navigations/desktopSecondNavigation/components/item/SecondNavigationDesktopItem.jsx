import React from 'react'
import PropTypes from 'prop-types'

import NodeLink from 'frontastic-catwalk/src/js/app/nodeLink.jsx'
import categoryTreeType from '../../../mobileNavigation'
import topCategories from '../../../mobileNavigation/topCategories.json'
import { SecondNavigationDesktopTree } from '../tree'

import { 
    listNavStyle, 
    listItemNav, 
    anchorNav, 
    anchorNavRed, 
    dropdown, 
    dropdownContent, 
    secNavDesktop, gridItemColumn, 
    boldText
} from './second-navigation-desktop-item.module.scss'

export function SecondNavigationDesktopItem ({ item, level, navPath, onClick }) {
    // helper to see if the current item is part of the path.
    const isItemInPath = (item) => {
        return navPath.find((item) => {
            return item.nodeId === item.nodeId

        })
    }
    const hasSubLevel = (item) => {
        return item && item.length > 0
    }
    console.log('top', topCategories);
    console.log('item', item)

        return (
            <nav className={secNavDesktop}>
                <ul className={listNavStyle, dropdown}>
                    <li className={`c-navigation__item${isItemInPath(item) ? ' c-navigation__item--active' : ''}`}> 
                     {/* className= {listItemNav} */}
                        <NodeLink className={anchorNav}
                            node={item}
                            onClick={(e) => {
                                if (onClick && item && item.length > 0) {
                                    e.preventDefault()
                                    return onClick(item, level)
                                }
                            }}
                            title='Startseite'
                            >
                            {item.name}
                            <ul className={dropdownContent}>
                                <li>
                                <div className={gridItemColumn}>
                                    <div className={boldText}>   
                                    {topCategories[0].tree.children[1].children[0].configuration.path}
                                    </div>
                                     <a>T-shirts</a>
                                     <a>Blouses</a>
                                     <a>Jeans</a>
                                     <a>Skirts</a>
                                     <a>Pullover</a>
                                     <a>Jackets</a>
                                     <a>Trousers</a>
                                     <a>Shorts</a>
                                     <a>Dresses</a>
                                     <a>Basics</a>
                                     <a>Sportswear</a>
                                 </div>
                                </li>
                                <li>
                                <div className={gridItemColumn}>
                                     <div className={boldText}>
                                         Special sizes
                                    </div>
                                    <a>28</a>
                                    <a>30</a>
                                     <a>32</a>
                                     <a>44</a>
                                     <a>46</a>
                                     <a>48</a>
                                     <a>50</a>
                                     <a>52</a>
                                 </div>
                             </li>
                            </ul>
                        </NodeLink>
                        {hasSubLevel(item) && (
                            <SecondNavigationDesktopTree items={item} navPath={navPath} level={level + 1} onSelectItem={onClick} />
                        )}
                    </li>
                </ul>
            </nav>
            // <nav className={secNavDesktop}>
            //     <ul className={listNavStyle, dropdown}>
            //         <li className={listItemNav}>
            //             <a href='' title='' className={anchorNav}>
            //                 <span><FormattedMessage id='secondNav.homepage' /></span>
            //             </a>
            //         </li>
            //         <li className={listItemNav}>
            //             <a href='' title='' className={anchorNav}>
            //                 <FormattedMessage id='secondNav.new' />
            //             </a>
            //             <ul className={dropdownContent}>
            //                 <li>
            //                     <div className={gridItemColumn}>
            //                         <div className={boldText}>   
                                        
            //                         </div>
            //                         <a>T-shirts</a>
            //                         <a>Blouses</a>
            //                         <a>Jeans</a>
            //                         <a>Skirts</a>
            //                         <a>Pullover</a>
            //                         <a>Jackets</a>
            //                         <a>Trousers</a>
            //                         <a>Shorts</a>
            //                         <a>Dresses</a>
            //                         <a>Basics</a>
            //                         <a>Sportswear</a>
            //                     </div>
            //                 </li>
            //                 <li>
            //                     <div className={gridItemColumn}>
            //                         <div className={boldText}>
            //                             Special sizes
            //                         </div>
            //                         <a>28</a>
            //                         <a>30</a>
            //                         <a>32</a>
            //                         <a>44</a>
            //                         <a>46</a>
            //                         <a>48</a>
            //                         <a>50</a>
            //                         <a>52</a>
            //                     </div>
            //                 </li>
            //                 <li>
            //                     <div className={gridItemColumn}>
            //                         <div className={boldText}>
            //                             Underwear
            //                         </div>
            //                         <a>Panties</a>
            //                         <a>Shapewear</a>
            //                         <a>Multipack</a>
            //                     </div>
            //                 </li>
            //                 <li className={gridItemColumn}>
            //                 <img
                                
            //                     src="https://images.unsplash.com/photo-1484327973588-c31f829103fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3452&q=80"
            //                     alt={name}
            //                 />
            //                 </li>
            //             </ul>
            //         </li>
            //         <li className={listItemNav}>
            //             <a href='' title='' className={anchorNav}>
            //                 <FormattedMessage id='secondNav.clothing' />
            //             </a>
            //             <ul className={dropdownContent}>
            //                 <li>
            //                     <div className={gridItemColumn}>
            //                         <div className={boldText}>   
            //                             Anchor
            //                         </div>
            //                         <a>Anchor</a>
            //                         <a>Anchor</a>
            //                         <a>Anchor</a>
            //                     </div>
            //                 </li>
            //                 <li>
            //                     <div className={gridItemColumn}>
            //                         <div className={boldText}>   
            //                             Anchor
            //                         </div>
            //                         <a>Anchor</a>
            //                         <a>Anchor</a>
            //                         <a>Anchor</a>
            //                     </div>
            //                 </li>
            //                 <li>
            //                     <div className={gridItemColumn}>
            //                         <div className={boldText}>   
            //                             Anchor
            //                         </div>
            //                         <a>Anchor</a>
            //                         <a>Anchor</a>
            //                         <a>Anchor</a>
            //                     </div>
            //                 </li>
            //                 <li className={gridItemColumn}>
            //                 <svg className='c-icon c-icon--m' version='1.1' width='24' height='24' viewBox='0 0 24 24'>
            //                     <path d='M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z' />
            //                 </svg>
            //                 </li>
            //             </ul>
            //         </li>
            //         <li className={listItemNav}>
            //             <a href='' title='' className={anchorNav}>
            //                 <FormattedMessage id='secondNav.shoes' />
            //             </a>
            //             <ul className={dropdownContent}>
            //                 <li>
            //                     <div className={gridItemColumn}>
            //                         <div className={boldText}>   
            //                             Anchor
            //                         </div>
            //                         <a>Anchor</a>
            //                         <a>Anchor</a>
            //                         <a>Anchor</a>
            //                     </div>
            //                 </li>
            //                 <li>
            //                     <div className={gridItemColumn}>
            //                         <div className={boldText}>   
            //                             Anchor
            //                         </div>
            //                         <a>Anchor</a>
            //                         <a>Anchor</a>
            //                         <a>Anchor</a>
            //                     </div>
            //                 </li>
            //                 <li>
            //                     <div className={gridItemColumn}>
            //                         <div className={boldText}>   
            //                             Anchor
            //                         </div>
            //                         <a>Anchor</a>
            //                         <a>Anchor</a>
            //                         <a>Anchor</a>
            //                     </div>
            //                 </li>
            //                 <li className={gridItemColumn}>
            //                 <svg className='c-icon c-icon--m' version='1.1' width='24' height='24' viewBox='0 0 24 24'>
            //                     <path d='M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z' />
            //                 </svg>
            //                 </li>
            //             </ul>
            //         </li>
            //         <li className={listItemNav}>
            //             <a href='' title='' className={anchorNav}>
            //                 <FormattedMessage id='secondNav.sport' />
            //             </a>
            //             <ul className={dropdownContent}>
            //                 <li>
            //                     <div className={gridItemColumn}>
            //                         <div className={boldText}>   
            //                             Anchor
            //                         </div>
            //                         <a>Anchor</a>
            //                         <a>Anchor</a>
            //                         <a>Anchor</a>
            //                     </div>
            //                 </li>
            //                 <li>
            //                     <div className={gridItemColumn}>
            //                         <div className={boldText}>   
            //                             Anchor
            //                         </div>
            //                         <a>Anchor</a>
            //                         <a>Anchor</a>
            //                         <a>Anchor</a>
            //                     </div>
            //                 </li>
            //                 <li>
            //                     <div className={gridItemColumn}>
            //                         <div className={boldText}>   
            //                             Anchor
            //                         </div>
            //                         <a>Anchor</a>
            //                         <a>Anchor</a>
            //                         <a>Anchor</a>
            //                     </div>
            //                 </li>
            //                 <li className={gridItemColumn}>
            //                 <svg className='c-icon c-icon--m' version='1.1' width='24' height='24' viewBox='0 0 24 24'>
            //                     <path d='M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z' />
            //                 </svg>
            //                 </li>
            //             </ul>
            //         </li>
            //         <li className={listItemNav}>
            //             <a href='' title='' className={anchorNav}>
            //                 <FormattedMessage id='secondNav.accessoires' />
            //             </a>
            //             <ul className={dropdownContent}>
            //                 <li>
            //                     <div className={gridItemColumn}>
            //                         <div className={boldText}>   
            //                             Anchor
            //                         </div>
            //                         <a>Anchor</a>
            //                         <a>Anchor</a>
            //                         <a>Anchor</a>
            //                     </div>
            //                 </li>
            //                 <li>
            //                     <div className={gridItemColumn}>
            //                         <div className={boldText}>   
            //                             Anchor
            //                         </div>
            //                         <a>Anchor</a>
            //                         <a>Anchor</a>
            //                         <a>Anchor</a>
            //                     </div>
            //                 </li>
            //                 <li>
            //                     <div className={gridItemColumn}>
            //                         <div className={boldText}>   
            //                             Anchor
            //                         </div>
            //                         <a>Anchor</a>
            //                         <a>Anchor</a>
            //                         <a>Anchor</a>
            //                     </div>
            //                 </li>
            //                 <li className={gridItemColumn}>
            //                 <svg className='c-icon c-icon--m' version='1.1' width='24' height='24' viewBox='0 0 24 24'>
            //                     <path d='M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z' />
            //                 </svg>
            //                 </li>
            //             </ul>
            //         </li>
            //         <li className={listItemNav}>
            //             <a href='' title='' className={anchorNavRed}>
            //                 <FormattedMessage id='secondNav.sale' />
            //             </a>
            //             <ul className={dropdownContent}>
            //                 <li>
            //                     <div className={gridItemColumn}>
            //                         <div className={boldText}>   
            //                             Anchor
            //                         </div>
            //                         <a>Anchor</a>
            //                         <a>Anchor</a>
            //                         <a>Anchor</a>
            //                     </div>
            //                 </li>
            //                 <li>
            //                     <div className={gridItemColumn}>
            //                         <div className={boldText}>   
            //                             Anchor
            //                         </div>
            //                         <a>Anchor</a>
            //                         <a>Anchor</a>
            //                         <a>Anchor</a>
            //                     </div>
            //                 </li>
            //                 <li>
            //                     <div className={gridItemColumn}>
            //                         <div className={boldText}>   
            //                             Anchor
            //                         </div>
            //                         <a>Anchor</a>
            //                         <a>Anchor</a>
            //                         <a>Anchor</a>
            //                     </div>
            //                 </li>
            //                 <li className={gridItemColumn}>
            //                 <svg className='c-icon c-icon--m' version='1.1' width='24' height='24' viewBox='0 0 24 24'>
            //                     <path d='M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z' />
            //                 </svg>
            //                 </li>
            //             </ul>
            //         </li>
            //     </ul>
            // </nav>
        )
    }

    SecondNavigationDesktopItem.propTypes = {
        item: categoryTreeType,
        level: PropTypes.number,
        navPath: PropTypes.arrayOf(categoryTreeType),
        onClick: PropTypes.func,
    }
    




