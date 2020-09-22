import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
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
    caption,
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
    const ButtonComponent = isClickable ? 'div' : Reference

    return (
        <Component
            className='grid grid-cols-1 grid-rows-1 overflow-hidden max-h-288px lg:max-h-456px lg:h-full'
            reference={
                reference || {
                    type: null,
                    target: null,
                }
            }
            >
            <MoleculesHero className='row-start-1 row-end-2 col-start-1 col-end-2' media={image} caption={caption} />
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
                {topic && (
                    <p
                        className={classnames({
                            'text-white text-sm md:text-lg mb-2': true,
                            ...selfAlign,
                        })}
                    >
                        {topic}
                    </p>
                )}

                {title && (
                    <h1
                        className={classnames({
                            'text-3xl text-white md:text-5xl font-bold mb-2 leading-tight': true,
                            ...selfAlign,
                        })}
                    >
                        {title}
                    </h1>
                )}

                {buttonLabel && reference && (
                    <ButtonComponent
                        reference={
                            reference || {
                                type: null,
                                target: null,
                            }
                        }
                        className={classnames({
                            'bg-primary-600 text-base font-semibold hover:bg-indigo-700 text-white py-3 px-4 rounded': true,
                            ...selfAlign,
                        })}
                    >
                        {buttonLabel}
                    </ButtonComponent>
                )}
            </div>
        </Component>
    )
}

Tile.propTypes = {
    image: PropTypes.object.isRequired,
    topic: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    verticalPosition: PropTypes.string.isRequired,
    horizontalPosition: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string.isRequired,
    reference: PropTypes.object,
    isClickable: PropTypes.bool.isRequired,
    caption: PropTypes.string,
}

Tile.defaultProps = {
    caption: null,
}

export default Tile
