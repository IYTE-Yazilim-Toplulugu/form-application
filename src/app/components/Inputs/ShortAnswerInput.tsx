"use client"
import React, { useState } from 'react';
import { Icon } from '@iconify/react';

interface ShortAnswerProps {
  question: string;
  nameAttribute: string;
  isRequired: Boolean;
  description: string;
}
const ShortAnswerInput = ({ question, nameAttribute, isRequired, description } : ShortAnswerProps) => {
  const [isError, setIsError] = useState<Boolean>(false);

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

      <input
        name={nameAttribute}
        type='text'
        placeholder='Your Answer'
        className='sm:w-3/4 w-full py-1 border-b-2 bg-white focus:outline-none focus:border-blue-700 hover:border-black/60 mt-6
      transition-all duration-300'
      />

        {isRequired ? isError && (
          <div className="flex justify-start items-center gap-4 mt-4">
            <Icon icon="carbon:warning" width="30" height="30"  style={{color: "red"}} />
            <p className="font-light text-sm text-red-700">This is a required question</p>
          </div>
        ) : null} 
    </div>
  )
}

export default ShortAnswerInput
