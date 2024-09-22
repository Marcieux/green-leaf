import React, { useState, useEffect, useRef } from 'react';

export default function Dropdown({ placeholder, options }) {
    const [showMenu, setShowMenu] = useState(false);
    const inputRef = useRef(null);
    const [selectedValue, setSelectedValue] = useState('');

    const getTitle = () => {
        return selectedValue || placeholder;
    };

    const handleClick = () => {
        setShowMenu(!showMenu);
    };

    const handleOptionClick = (value) => {
        setSelectedValue(value);
        setShowMenu(false);
    };

    useEffect(() => {
        const handler = (e) => {
            if (inputRef.current && !inputRef.current.contains(e.target)) {
                setShowMenu(false);
            }
        };

        window.addEventListener('click', handler);
        return () => {
            window.removeEventListener('click', handler);
        };
    }, []);

    return (
        <div className="relative max-mobile:flex-1">
            <div
                ref={inputRef}
                className="flex justify-between items-center border border-[#1e1e1e80] rounded-lg p-2 cursor-pointer w-72 max-mobile:w-full max-mobile:gap-[1rem] text-sm"
                onClick={handleClick}
            >
                {getTitle()}
                <i className={`fa-solid fa-caret-down transform transition-transform duration-200 ${showMenu ? 'rotate-180' : ''}`}></i>
            </div>
            {showMenu && (
                <div className="absolute w-72 border border-[#1e1e1e80] rounded-lg mt-2 z-10 bg-white overflow-hidden shadow-lg">
                    {options.map(option => (
                        <div
                            key={option.value}
                            onClick={() => handleOptionClick(option.label)}
                            className="font-normal text-sm leading-5 py-2 px-3 bg-white cursor-pointer hover:bg-[#c1dcdc]"
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
