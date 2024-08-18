"use client"
import React, { useState } from 'react'
import { Icon } from '@iconify/react';

interface DropDownProps {
  question: string;
  nameAttribute: string;
  description: string;
  isRequired: Boolean;
  options: string[];
}
const DropDownInput = ({ question, nameAttribute, description, isRequired, options } : DropDownProps) => {
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

    <select name={nameAttribute} defaultValue="--Choose--" required 
      className='p-4 border-2 rounded-lg bg-white cursor-pointer hover:border-black/60 mt-6
      sm:w-3/4 w-full
      transition-all duration-300'>
          <option disabled hidden className="text-black/70">Choose</option>
          {
            options.map((d, idx) => {
              return (
                <option key={idx} className="font-sans" value={d}>{d}</option>
              )
            })
          }
    </select>
        
        {isRequired ? isError && (
          <div className="flex justify-start items-center gap-4 mt-4">
            <Icon icon="carbon:warning" width="30" height="30"  style={{color: "red"}} />
            <p className="font-light text-sm text-red-700">This is a required question</p>
          </div>
        ) : null} 
    </div>
  )
}

export default DropDownInput