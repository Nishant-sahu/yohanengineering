
import React from 'react';

const SendSVG = ({ color = 'currentColor', strokeWidth = '0', strokeColor = 'currentColor', size = '64', ...rest }) => {
    return (
        <svg

            xmlns="http://www.w3.org/2000/svg"

            width={size}
            height={size}
            fill={color}
            stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
            {...rest}

            viewBox="0 0 24 24" >
            <path d="M21.5 2.5L14.85 21.5L11.05 12.95L2.5 9.15L21.5 2.5Z" stroke="#666666" stroke-width="1.5" stroke-linejoin="round" />
            <path d="M21.5008 2.5L11.0508 12.95" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    );
};
// https://github.com/SRAKIB17/ReactCustomIconsLibrary.git

export default SendSVG;

