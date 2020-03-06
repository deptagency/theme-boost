import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Translatable from '@frontastic/catwalk/src/js/component/translatable'
import getTranslation from '@frontastic/catwalk/src/js/getTranslation'
import Reference from '@frontastic/catwalk/src/js/component/reference'
import MoleculesHero from '@frontastic/catwalk/src/js/patterns/molecules/heros/hero'

const Tile = ({
    tastic,
    context,
    tileImage,
    topic,
    title,
    verticalPosition,
    horizontalPosition,
    buttonLabel,
    tileReference,
    wholeTileClickable,
}) => {
    if (!tileImage || !tileImage.media) {
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

    const Component = wholeTileClickable ? Reference : 'div'

    return (
        <div className='aspectRatioPromobox relative rounded-md select-none'>
            <Component
                reference={tileReference || {
                    type: null,
                    target: null,
                }}
            >
                <MoleculesHero
                    media={tileImage}
                    caption={getTranslation(
                        tastic.schema.get('caption'),
                        context.locale,
                        context.project.defaultLanguage
                    ).text}
                    className='aspectRatioPromoboxInside lock h-full w-full top-0 left-0 absolute opacity-75'
                />
                <div className='h-full w-full'>
                    <div
                        className={classnames({
                            'flex flex-col absolute rounded-lg md:p-8 p-4 ': true,
                            'items-center top-0 bottom-0': verticalPosition === 'middle',
                            'justify-center left-0 right-0': horizontalPosition === 'center',
                            [`text-${horizontalPosition}`]: true,
                            [`${verticalPosition}-0 ${horizontalPosition}-0`]: true,
                            ...justifyContent,
                        })}
                    >

                        {topic && <p
                            className={classnames({
                                'text-xl text-white sm:text-2xl md:text-3xl mb-2': true,
                                ...selfAlign,
                            })}
                        >
                            <Translatable value={topic} />
                        </p>}
                        {title && <h1
                            className={classnames({
                                'text-5xl text-white md:text-6xl font-bold mb-2 leading-tight': true,
                                ...selfAlign,
                            })}
                        >
                            <Translatable value={title} />
                        </h1>}

                        {buttonLabel && tileReference && <Reference
                            reference={tileReference || {
                                type: null,
                                target: null,
                            }}
                            className={classnames({
                                'bg-indigo-500 font-semibold hover:bg-indigo-700 text-2xl py-4 px-6 rounded-lg': true,
                                ...selfAlign,
                            })}

                        >
                            <Translatable value={buttonLabel} />
                        </Reference>}
                    </div>
                </div>
            </Component>
        </div>
    )
}

Tile.propTypes = {
    tileImage: PropTypes.object.isRequired,
    topic: PropTypes.object.isRequired,
    title: PropTypes.object.isRequired,
    verticalPosition: PropTypes.object.isRequired,
    horizontalPosition: PropTypes.object.isRequired,
    buttonLabel: PropTypes.object.isRequired,
    tileReference: PropTypes.object.isRequired,
    wholeTileClickable: PropTypes.object.isRequired,
    tastic: PropTypes.object.isRequired,
    context: PropTypes.object.isRequired,
}

export default Tile
