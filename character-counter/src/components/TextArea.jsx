import React, { useContext, useRef, useState } from 'react';
import CharacterCount from '../assets/images/pattern-character-count.svg';
import SentenceCount from '../assets/images/pattern-sentence-count.svg';
import WordCountImg from '../assets/images/pattern-word-count.svg';
import { useTextContext } from '../context/TextContext';
import { themeContext } from '../context/ThemeContext';
import StatCard from './StatCard';

const TextArea = () => {
    const { inputText, setInputText, charCount, wordCount, sentenceCount } = useTextContext();
    const { theme } = useContext(themeContext);

    const handleInput = (e) => {
        e.preventDefault();
        //console.log(e);
        setInputText(e.target.value);
    }

    return (
        <div className={theme}>
            {/* Text area with controls */}
            <textarea name="text" id="text" rows="4" placeholder="Begin Typing here..." value={inputText} onChange={e => handleInput(e)} className=" mt-10 block p-2.5 w-full text-m text-gray-900 bg-gray-50 rounded-lg border border-grey-300 resize-none focus:shadow-lg font-bold dark:bg-gray-800
            dark:text-gray-100
            dark:placeholder-gray-500
            dark:border-gray-600
            dark:focus:ring-blue-400"></textarea>

            <div className="flex flex-row justify-between mt-20">
                <StatCard background={CharacterCount} text={"Total Characters"} value={charCount} color={"bg-purple-300"}/>
                <StatCard background={WordCountImg} text={"Word Count"} value={wordCount} color={"bg-orange-400"}/>
                <StatCard background={SentenceCount} text={"Sentence Count"} value={sentenceCount} color={"bg-orange-600"}/>
            </div>
        </div>
    )
}

export default TextArea