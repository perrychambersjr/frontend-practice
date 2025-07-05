import { createContext, useContext, useMemo, useState } from "react";

export const TextContext = createContext();

export const useTextContext = () => {
    const context = useContext(TextContext);
    if(!context) {
        throw new Error('useTextContext must be used within a TextContextProvider');
    }
    return context;
}

export const TextContextProvider = ({children}) => {
    const[inputText, setInputText] = useState('');

    const charCount = useMemo(() => inputText.length, [inputText]);
    const wordCount = useMemo(() => {
        return inputText.trim().length === 0
        ? 0
        : inputText.trim().split(/\s+/).length;
    }, [inputText]);

    const sentenceCount = useMemo(() => {
        return inputText
        .split(/(?<=[.!?])\s+/) // split after punctuation followed by space
        .filter(sentence => sentence.trim().length > 0)
        .length;
    }, [inputText]);

    const resetText = () => setInputText('');

    return (
        <TextContext.Provider 
            value={{ inputText, setInputText, charCount, wordCount, sentenceCount, resetText }}
        >
        {children}
        </TextContext.Provider>
    )
}