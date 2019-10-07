import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ComponentInjector from '../../../app/injector'

class OrganismsPromoboxWithPositioning extends Component {
    render() {
        const { children, vertical, horizontal, width, height } = this.props

        let style = {}
        if(typeof width !== undefined) style = {width}
        if(typeof height !== undefined) style = { ...style, height}

        // TODO "o-grid  o-region" here?
        return (<div style={style}>
            <div className="c-promobox t-spotlight u-aspect-ratio-16x9">
                <img
                    src="https://images.unsplash.com/photo-1510598969022-c4c6c5d05769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                    alt="" class="c-promobox__backdrop"/>
                <div className={`c-promobox__overlay c-promobox__overlay--${vertical}-${horizontal}`}>
                    <div className="c-promobox__overlay__inner">
                        {children}
                    </div>
                </div>
            </div>
        </div>)
    }
}

OrganismsPromoboxWithPositioning.propTypes = {
    vertical: 'middle',
    horizontal: 'center',
}

OrganismsPromoboxWithPositioning.defaultProps = {
    children: PropTypes.node.isRequired,
    vertical: PropTypes.string,
    horizontal: PropTypes.string
}

export default ComponentInjector.return('OrganismsPromoboxWithPositioning', OrganismsPromoboxWithPositioning)
