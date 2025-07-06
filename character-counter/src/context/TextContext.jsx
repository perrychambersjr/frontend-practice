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
    const [inputText, setInputText] = useState('');
    const [excludeSpaces, setExcludeSpaces] = useState(false);
    const [useCharLimit, setUseCharLimit] = useState(false);
    const [charLimit, setCharLimit] = useState(300);

    const processedText = useMemo(() => {
    let text = inputText;

    if (excludeSpaces) {
        text = text.replace(/\s/g, '');
    }

    if (useCharLimit && charLimit > 0) {
        text = text.slice(0, charLimit);
    }

    return text;
    }, [inputText, excludeSpaces, useCharLimit, charLimit]);

    const charCount = useMemo(() => {
        let text = inputText;
        if (excludeSpaces) {
            text = text.replace(/\s/g, '');
        }
        if (useCharLimit && charLimit > 0) {
            text = text.slice(0, charLimit);
        }
    return text.length;
    }, [inputText, excludeSpaces, useCharLimit, charLimit]);

    const wordCount = useMemo(() => {
        if (processedText.trim().length === 0) return 0;
        return processedText.trim().split(/\s+/).length;
    }, [processedText]);

    const sentenceCount = useMemo(() => {
    return processedText
        .split(/(?<=[.!?])\s+/)
        .filter(sentence => sentence.trim().length > 0)
        .length;
    }, [processedText]);

    const resetText = () => setInputText('');

    const toggleExcludeSpaces = () => setExcludeSpaces(prevState => !prevState);

    const toggleCharLimit = () => 
    {
        setUseCharLimit(prevState => !prevState);
        setCharLimit(300);
    }

    const approxReadingTime = useMemo(() => {
        if (wordCount === 0) return 'Less than 1 min';

        const readingSpeedWpm = 200;
        const minutes = wordCount / readingSpeedWpm;
        if (minutes < 1) return 'Less than 1 min';
    return `${Math.ceil(minutes)} min`;
    }, [wordCount]);

    const letterStats = useMemo(() => {
    if (!inputText) return [];

    const counts = {};
    const lettersOnly = inputText.toLowerCase().replace(/[^a-z]/g, '');
    for (const char of lettersOnly) {
        counts[char] = (counts[char] || 0) + 1;
    }

    const totalLetters = Object.values(counts).reduce((sum, count) => sum + count, 0);

    return Object.entries(counts)
        .map(([letter, count]) => ({
        letter,
        count,
        percentage: totalLetters > 0 ? (count / totalLetters) * 100 : 0,
        }))
        .sort((a, b) => b.count - a.count);

    }, [inputText]);

    return (
        <TextContext.Provider 
            value={{ inputText, 
                setInputText, 
                charCount,
                 wordCount, 
                 sentenceCount, 
                 resetText, 
                 toggleExcludeSpaces, 
                 excludeSpaces, 
                 toggleCharLimit, 
                 useCharLimit, 
                 setCharLimit,
                 charLimit,
                 approxReadingTime,
                 letterStats
                 }}
        >
        {children}
        </TextContext.Provider>
    )
}