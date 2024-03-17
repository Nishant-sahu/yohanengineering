
import React from 'react';

const ReactionSVG = ({ color = 'currentColor', strokeWidth = '0', strokeColor = 'currentColor', size = '64', ...rest }) => {
    return (
        <svg

            xmlns="http://www.w3.org/2000/svg"

            width={size}
            height={size}
            fill={color}
            stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
            {...rest}

            viewBox="0 0 24 24" >
            <path d="M12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5229 6.47715 22 12 22Z" stroke="#666666" stroke-width="1.5" stroke-linejoin="round" />
            <path d="M15.5 9V9.5" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.5 9V9.5" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15.5 15.5C15.5 15.5 14.5 17.5 12 17.5C9.5 17.5 8.5 15.5 8.5 15.5" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
};
// https://github.com/SRAKIB17/ReactCustomIconsLibrary.git

export default ReactionSVG;

