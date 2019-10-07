import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'

const MoleculesColorsFilter = ({colors, className}) => {
    const selectedColor = '#000'

    return (
        <ul className={`${className} o-list-inline filter-colors`}>
            {colors.map((c, i) => {
                return <li className="o-list-inline__item">
                    <button
                        className={classnames({
                            'c-colorswatch__item': true,
                            'is-active': c === selectedColor,
                        })}
                        style={{background: `${c}`}}
                    >
                    </button>
                </li>
            })}
        </ul>
    );
};

MoleculesColorsFilter.defaultProps = {
    colors: ['#98E076', '#3A42F1', '#000', 'gray', '#FFCE18', '#FCEA46', 'brown', 'beige'],
    className: ''
}

MoleculesColorsFilter.propTypes = {
    colors: PropTypes.array.isRequired,
    className: PropTypes.string
};

export default MoleculesColorsFilter;