
import React from 'react';

const Refresh = ({ color = 'currentColor',strokeWidth='0', strokeColor='currentColor', size = '64', ...rest }) => {
    return (
        <svg

            xmlns="http://www.w3.org/2000/svg"

            width={size}
            height={size}
            fill={color}
            stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" 
            {...rest}

            viewBox="0 0 64 64">
            <title/><path d="M43,54.92a27,27,0,0,1-15.54,4.89,27.81,27.81,0,0,1,0-55.62,27.62,27.62,0,0,1,27.3,25.16l4.87-4.94L64,28.75,51.5,41.81,38.25,28.75l4.4-4.34,6,6.06a21.43,21.43,0,0,0-21.19-20.1A21.46,21.46,0,0,0,6.18,32,21.46,21.46,0,0,0,27.43,53.63a20.88,20.88,0,0,0,12-3.78Zm8-13.11" data-name="&lt;Compound Path&gt;" id="_Compound_Path_"/>
        </svg>

    );
};
// https://github.com/SRAKIB17/ReactCustomIconsLibrary.git

export default Refresh;
    
    