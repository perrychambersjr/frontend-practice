import React, { useState } from 'react';

const TextArea = () => {
 const [input, setinput] = useState('')
 const [characters, setCharacters] = useState(0);

 const handleInput = (e) => {
    e.preventDefault();
    //console.log(e);

    setinput(e.target.value);
    setCharacters(e.target.value.length);
 }

  return (
    <div>
        {/* Text area with controls */}
        <textarea name="text" id="text" rows="4" placeholder="Begin Typing here..." value={input} onChange={e => handleInput(e)} className=" mt-10 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-grey-300 resize-none focus:shadow-lg"></textarea>
        <div className="flex flex-row justify-between">
            <p>Exclude Spaces</p>
            <p>Set Character Limit</p>
            <p>"Approx. Reading Time 1 minute</p>
        </div>

        <div className="flex flex-row justify-between mt-5">
            <div className="bg-[url('/pattern-character-count.svg')] bg-no-repeat bg-cover flex flex-col justify-start h-40 w-60">
                <h2>{characters}</h2>
                <p>Total Characters</p>
            </div>
            <div className="flex flex-col justify-start h-40 w-60">
                <h2>{characters}</h2>
                <p>Total Characters</p>
            </div>
            <div  className="flex flex-col justify-start h-40 w-60">
                <h2>{characters}</h2>
                <p>Total Characters</p>
            </div>
        </div>
    </div>
  )
}

export default TextArea