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
            <rect x="470" y="300" rx="5" ry="5" width="220" height="10" />  {/* bullet list */}
            <rect x="64" y="18" rx="0" ry="0" width="346" height="300" />   {/* big photo */}
            <rect x="111" y="340" rx="0" ry="0" width="0" height="0" />
            <rect x="121" y="342" rx="0" ry="0" width="0" height="0" />
            <rect x="194" y="329" rx="0" ry="0" width="0" height="0" />
            <rect x="192" y="323" rx="0" ry="0" width="0" height="0" />
            <rect x="185" y="323" rx="0" ry="0" width="0" height="0" />
            <rect x="470" y="18" rx="0" ry="0" width="300" height="35" />   {/* header txt */}
            <rect x="470" y="62" rx="0" ry="0" width="300" height="6" />    {/* text */}
            <rect x="470" y="72" rx="0" ry="0" width="300" height="6" />    {/* text */}
            <rect x="470" y="82" rx="0" ry="0" width="300" height="6" />    {/* text */}
            <rect x="470" y="92" rx="0" ry="0" width="300" height="6" />    {/* text */}
            <rect x="798" y="135" rx="0" ry="0" width="0" height="0" />
            <rect x="731" y="132" rx="0" ry="0" width="0" height="0" />
            <rect x="470" y="110" rx="0" ry="0" width="50" height="60" />    {/* text box */}
            <rect x="540" y="110" rx="0" ry="0" width="50" height="60" />    {/* text box */}
            <rect x="610" y="110" rx="0" ry="0" width="50" height="60" />    {/* text box */}
            <rect x="470" y="180" rx="0" ry="0" width="300" height="40" />    {/* text box */}
            <rect x="470" y="240" rx="0" ry="0" width="240" height="40" />    
            <rect x="730" y="240" rx="0" ry="0" width="40" height="40" />    
            </ContentLoader>
        </div>)
    }
}

ProductLoader.propTypes = {
}

ProductLoader.defaultProps = {
}

export default ComponentInjector.return('ProductLoader', ProductLoader)
