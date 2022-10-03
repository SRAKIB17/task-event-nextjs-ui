
import React from 'react';

const Chevron_right = ({ color = 'grey',strokeWidth='0', strokeColor='currentColor', size = '64', ...rest }) => {
    return (
        <svg

            xmlns="http://www.w3.org/2000/svg"

            width={size}
            height={size}
            fill={color}
            stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" 
            {...rest}

            viewBox="0 0 64 64">
            <g>
	<path d="M19,62.8c-0.4,0-0.9-0.2-1.2-0.5c-0.7-0.7-0.7-1.8-0.1-2.5L42.9,33c0.5-0.5,0.5-1.4,0-2L17.7,4.2c-0.7-0.7-0.6-1.8,0.1-2.5
		c0.7-0.7,1.8-0.6,2.5,0.1l25.2,26.8c1.7,1.9,1.7,4.9,0,6.7L20.3,62.2C19.9,62.6,19.5,62.8,19,62.8z"/>
</g>
        </svg>

    );
};
// https://github.com/SRAKIB17/ReactCustomIconsLibrary.git

export default Chevron_right;
    
    