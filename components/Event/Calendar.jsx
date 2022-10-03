
import React from 'react';

const Calendar = ({ color = 'currentColor', strokeWidth = '0', strokeColor = 'currentColor', size = '64', ...rest }) => {
    return (
        <svg

            xmlns="http://www.w3.org/2000/svg"

            width={size}
            height={size}
            fill={color}
            stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
            {...rest}

            viewBox="0 0 128 128">
            <g>
                <g>
                    <path d="M108,8h-8V4c0-2.211-1.789-4-4-4s-4,1.789-4,4v4h-8V4c0-2.211-1.789-4-4-4s-4,1.789-4,4v4h-8V4
			c0-2.211-1.789-4-4-4s-4,1.789-4,4v4h-8V4c0-2.211-1.789-4-4-4s-4,1.789-4,4v4h-8V4c0-2.211-1.789-4-4-4s-4,1.789-4,4v4h-8
			C11.164,8,4,15.164,4,24v88c0,8.836,7.164,16,16,16h88c8.836,0,16-7.164,16-16V24C124,15.164,116.836,8,108,8z M116,112
			c0,4.414-3.59,8-8,8H20c-4.412,0-8-3.586-8-8V24c0-4.416,3.588-8,8-8h8v4c0,2.211,1.789,4,4,4s4-1.789,4-4v-4h8v4
			c0,2.211,1.789,4,4,4s4-1.789,4-4v-4h8v4c0,2.211,1.789,4,4,4s4-1.789,4-4v-4h8v4c0,2.211,1.789,4,4,4s4-1.789,4-4v-4h8v4
			c0,2.211,1.789,4,4,4s4-1.789,4-4v-4h8c4.41,0,8,3.584,8,8V112z"/>
                </g>
            </g>
            <path d="M20,40v72h88V40H20z M84,48v8h-8v-8H84z M52,72h-8v-8h8V72z M60,64h8v8h-8V64z M52,80v8h-8v-8H52z M60,80h8
	v8h-8V80z M76,80h8v8h-8V80z M76,72v-8h8v8H76z M68,48v8h-8v-8H68z M52,48v8h-8v-8H52z M28,48h8v8h-8V48z M28,64h8v8h-8V64z M28,80
	h8v8h-8V80z M28,104v-8h8v8H28z M44,104v-8h8v8H44z M60,104v-8h8v8H60z M76,104v-8h8v8H76z M100,104h-8v-8h8V104z M100,88h-8v-8h8
	V88z M100,72h-8v-8h8V72z M100,56h-8v-8h8V56z"/>
        </svg>

    );
};
// https://github.com/SRAKIB17/ReactCustomIconsLibrary.git

export default Calendar;

