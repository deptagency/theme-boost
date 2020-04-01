import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Translatable from '@frontastic/catwalk/src/js/component/translatable'
import getTranslation from '@frontastic/catwalk/src/js/getTranslation'
import Reference from '@frontastic/catwalk/src/js/component/reference'
import MoleculesHero from '@frontastic/catwalk/src/js/patterns/molecules/heros/hero'

const Tile = ({
    image,
    topic,
    title,
    verticalPosition,
    horizontalPosition,
    buttonLabel,
    reference,
    isClickable,
    caption
}) => {
    if (!image || !image.media) {
        return null
    }

    const selfAlign = {
        'self-start': horizontalPosition === 'left',
        'self-center': horizontalPosition === 'center',
        'self-end': horizontalPosition === 'right',
    }

    const justifyContent = {
        'justify-start': verticalPosition === 'top',
        'justify-center': verticalPosition === 'middle',
        'justify-end': verticalPosition === 'bottom',
    }

    const Component = isClickable ? Reference : 'div'

    return (
        <Component
            className='grid grid-cols-1 grid-rows-1 rounded-lg max-h-288px lg:max-h-456px lg:h-full overflow-hidden py-2'
            reference={reference || {
                type: null,
                target: null,
            }}
            >
            <MoleculesHero
                className='row-start-1 row-end-2 col-start-1 col-end-2'
                media={image}
                caption={caption}
            />
            <div
                className={classnames({
                    'row-start-1 row-end-2 col-start-1 col-end-2 tile-image-gradient': true,
                    'flex flex-col rounded-lg h-full w-full md:p-8 p-4 ': true,
                    'items-center top-0 bottom-0': verticalPosition === 'middle',
                    'justify-center left-0 right-0': horizontalPosition === 'center',
                    [`text-${horizontalPosition}`]: true,
                    [`${verticalPosition}-0 ${horizontalPosition}-0`]: true,
                    ...justifyContent,
                })}
            >

                {topic && <p
                    className={classnames({
                        'text-white text-sm md:text-lg mb-2': true,
                        ...selfAlign,
                    })}
                >
                    <Translatable value={topic} />
                </p>}

                {title && <h1
                    className={classnames({
                            'text-3xl text-white md:text-5xl font-bold mb-2 leading-tight': true,
                            ...selfAlign,
                        })}
                    >
                    <Translatable value={title} />
                    </h1>}

                {buttonLabel && reference && <Reference
                    reference={reference || {
                        type: null,
                        target: null,
                    }}
                    className={classnames({
                        'bg-indigo-500 text-base font-semibold hover:bg-indigo-700 text-white py-3 px-4 rounded': true,
                        ...selfAlign,
                    })}

                >
                    <Translatable value={buttonLabel} />
                </Reference>}
            </div>
        </Component>
    )
}

Tile.propTypes = {
    tastic: PropTypes.object.isRequired,
    context: PropTypes.object.isRequired,
    image: PropTypes.object.isRequired,
    topic: PropTypes.object.isRequired,
    title: PropTypes.object.isRequired,
    verticalPosition: PropTypes.string.isRequired,
    horizontalPosition: PropTypes.string.isRequired,
    buttonLabel: PropTypes.object.isRequired,
    reference: PropTypes.object.isRequired,
    isClickable: PropTypes.bool.isRequired,
}

export default Tile
