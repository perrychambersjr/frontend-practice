import React, { useContext, useRef, useState } from 'react';
import { useTextContext } from '../context/TextContext';
import { themeContext } from '../context/ThemeContext';

const TextArea = () => {
    const { inputText, setInputText, charLimit } = useTextContext();
    const { theme } = useContext(themeContext);

    const handleInput = (e) => {
        e.preventDefault();
        //console.log(e);
        setInputText(e.target.value);
    }

    return (
        <div className={theme}>
            {/* Text area with controls */}
            <textarea name="text" id="text" rows="4" placeholder="Begin Typing here..." maxLength={charLimit} value={inputText} onChange={e => handleInput(e)} className=" mt-10 block p-2.5 w-full text-m text-gray-900 bg-gray-50 rounded-lg border border-grey-300 resize-none focus:shadow-lg font-bold dark:bg-gray-800
            dark:text-gray-100
            dark:placeholder-gray-500
            dark:border-gray-600
            dark:focus:ring-blue-400"></textarea>
        </div>
    )
}

export default TextArea