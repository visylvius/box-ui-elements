// @flow
import * as React from 'react';

import AccessibleSVG from '../accessible-svg';

type Props = {
    className?: string,
    color?: string,
    height?: number,
    /** A text-only string describing the icon if it's not purely decorative for accessibility */
    title?: string | React.Element<any>,
    width?: number,
};

const IconAlertCircle = ({ className = '', color = '#FFFFFF', height = 20, title, width = 20 }: Props) => (
    <AccessibleSVG
        className={`icon-alert-circle ${className}`}
        height={height}
        title={title}
        viewBox="0 0 20 20"
        width={width}
    >
        <g fill="none" fillRule="evenodd" transform="translate(1 1)">
            <circle className="stroke-color" cx="9" cy="9" r="9" stroke={color} />
            <rect className="fill-color" fill={color} height="6" rx="1" width="2" x="8" y="4" />
            <circle className="fill-color" cx="9" cy="13" fill={color} r="1" />
        </g>
    </AccessibleSVG>
);

export default IconAlertCircle;
