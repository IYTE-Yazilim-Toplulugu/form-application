"use client"
import React, { useEffect, useRef, useState } from "react";
import { Icon } from '@iconify/react';

// LongAnswerInput component
interface LongAnswerInputProps {
  question: string;
  nameAttribute: string;
  description: string;
  isRequired: Boolean;
}

const LongAnswerInput = ({ question, nameAttribute, description, isRequired } : LongAnswerInputProps ) => {
  const [isError, setIsError] = useState<Boolean>(false);
  
  const [val, setVal] = useState<string>("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px"
    }
  }, [val])

  return (
    <div className={`border-2 rounded-xl bg-white
      ${isRequired ? isError && "border-red-500" : null} 
    m-4 p-6 flex flex-col items-start justify-center max-w-full
    gap-2`}>
      <label htmlFor={nameAttribute}>{question} 
        {isRequired && <span style={{color: "red"}}>&nbsp;*</span>}
      </label>
      {
        description != "" ? <desc className="font-light text-xs">{description}</desc> : null
      }

      <textarea
        ref={textAreaRef}
        onChange={(e) => setVal(e.target.value)}
        rows={1}
        style={{
          resize: "none"
        }}
        name={nameAttribute}
        placeholder='Your Answer'
        className='w-full py-1 border-b-2 bg-white focus:outline-none focus:border-blue-700 hover:border-black/60 mt-6
      transition-color duration-300'
      />

        {isRequired ? isError && (
          <div className="flex justify-start items-center gap-4 mt-4">
            <Icon icon="carbon:warning" width="30" height="30"  style={{color: "red"}} />
            <p className="font-light text-sm text-red-700">This is a required question</p>
          </div>
        ) : null} 
    </div>  
  );
};


export default LongAnswerInput;
