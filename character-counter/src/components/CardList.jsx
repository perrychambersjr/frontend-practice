import React, { useContext } from 'react';
import CharacterCount from '../assets/images/pattern-character-count.svg';
import SentenceCount from '../assets/images/pattern-sentence-count.svg';
import WordCountImg from '../assets/images/pattern-word-count.svg';
import { useTextContext } from '../context/TextContext';
import StatCard from './StatCard';

const CardList = () => {
    const { charCount, wordCount, sentenceCount } = useTextContext();

  return (
    <div className="flex flex-row justify-between mt-10">
        <StatCard background={CharacterCount} text={"Total Characters"} value={charCount} color={"bg-purple-300"}/>
        <StatCard background={WordCountImg} text={"Word Count"} value={wordCount} color={"bg-orange-400"}/>
        <StatCard background={SentenceCount} text={"Sentence Count"} value={sentenceCount} color={"bg-orange-600"}/>
    </div>
  )
}

export default CardList