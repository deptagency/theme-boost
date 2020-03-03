import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Hammer from 'hammerjs'

const getMarginValue = (container) => {
    if (!container || !container.current || !container.current.style || container.current.style.marginLeft === '') { return 0 }
    return parseInt(container.current.style.marginLeft)
}

class VerticalPan extends Component {
    constructor (props) {
        super(props)

        this.globalMarginValue = React.createRef()
        this.swipeContent = React.createRef()
        this.childrenRef = React.createRef()
        this.gestureManager = React.createRef()

        this.state = {
            currentPosition: {
                value: getMarginValue(this.swipeContent),
                doEase: false,
            },
            lastChildPosition: null,
        }
    }

    componentDidMount () {
        this.globalMarginValue.current = 0

        this.gestureManager.current = new Hammer(this.swipeContent.current)
        this.gestureManager.current.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL, threshold: 0.01 })

        this.gestureManager.current.on('panend panleft panright panstart', (ev) => {
            if (['panstart', 'panleft', 'panright'].includes(ev.type)) { this.onMove(ev) }
            if (ev.type === 'panend') { this.onMoveEnd(ev) }
        })

        this.setState({
            lastChildPosition: this.childrenRef.current.lastElementChild.getBoundingClientRect(),
        })
    }

    onMove = (e) => {
        const nextPosition = this.globalMarginValue.current + e.deltaX

        this.setState({
            currentPosition: {
                value: nextPosition,
                doEase: false,
            },
        })
    }

    onMoveEnd = (e) => {
        const swipeContentRight = this.swipeContent.current.getBoundingClientRect().right
        const shouldSnapToLeft = getMarginValue(this.swipeContent) > 0
        const shouldSnapToRight = ((swipeContentRight - getMarginValue(this.swipeContent)) > this.state.lastChildPosition.right)

        if (shouldSnapToLeft) {
            this.setState({
                currentPosition: {
                    value: 0,
                    doEase: true,
                },
            })
        } else if (shouldSnapToRight) {
            this.setState({
                currentPosition: {
                    value: swipeContentRight - this.state.lastChildPosition.right,
                    doEase: true,
                },
            })
        }

        this.globalMarginValue.current = getMarginValue(this.swipeContent)
    }

    render () {
        const { childrenClassName, children } = this.props
        const { currentPosition: { value, doEase } } = this.state
        const delay = doEase ? 1 : 0

        return (
            <div
                className='swipeContent'
                ref={this.swipeContent}
                style={{
                    overflow: 'hidden',
                    marginLeft: `${value}px`,
                    transition: `margin-left ${delay}s ease`,
                }}
                >
                <div className={childrenClassName} ref={this.childrenRef}>
                    {children}
                </div>

            </div>
        )
    }
}

VerticalPan.propTypes = {
    childrenClassName: PropTypes.string,
    children: PropTypes.any.isRequired,
}

export default VerticalPan
