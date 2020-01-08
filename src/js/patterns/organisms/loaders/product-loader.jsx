import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
// import './product-loader.module.scss'
import ContentLoader from 'react-content-loader'

class ProductLoader extends Component {
    render () {
        return (<div>
           <ContentLoader
            height={400}
            width={800}
            speed={2}
            primaryColor="#d9d9d9"
            secondaryColor="#ecebeb"
            // {...props}
            >
            <rect x="450" y="300" rx="5" ry="5" width="220" height="10" />  {/* bullet list */}
            <rect x="54" y="18" rx="20" ry="20" width="346" height="250" />   {/* big photo */}
            <rect x="111" y="340" rx="10" ry="10" width="0" height="0" />
            <rect x="121" y="322" rx="10" ry="10" width="0" height="0" />
            <rect x="194" y="329" rx="10" ry="10" width="0" height="0" />
            <rect x="192" y="323" rx="10" ry="10" width="0" height="0" />
            <rect x="185" y="323" rx="10" ry="10" width="0" height="0" />
            <rect x="450" y="18" rx="10" ry="10" width="300" height="35" />   {/* header txt */}
            <rect x="450" y="62" rx="10" ry="10" width="300" height="6" />    {/* text */}
            <rect x="450" y="72" rx="10" ry="10" width="300" height="6" />    {/* text */}
            <rect x="450" y="82" rx="10" ry="10" width="300" height="6" />    {/* text */}
            <rect x="798" y="135" rx="10" ry="10" width="0" height="0" />
            <rect x="731" y="132" rx="10" ry="10" width="0" height="0" />
            <rect x="450" y="110" rx="10" ry="10" width="50" height="60" />    {/* text box */}
            <rect x="530" y="110" rx="10" ry="10" width="50" height="60" />    {/* text box */}
            <rect x="610" y="110" rx="10" ry="10" width="50" height="60" />    {/* text box */}
            <rect x="450" y="185" rx="10" ry="10" width="300" height="35" />    {/* text box */}
            <rect x="450" y="240" rx="10" ry="10" width="240" height="40" />    
            <rect x="710" y="240" rx="10" ry="10" width="40" height="40" />    
            </ContentLoader>
        </div>)
    }
}

ProductLoader.propTypes = {
}

ProductLoader.defaultProps = {
}

export default ComponentInjector.return('ProductLoader', ProductLoader)
