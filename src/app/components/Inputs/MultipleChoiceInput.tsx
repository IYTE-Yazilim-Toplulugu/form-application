"use client"
import React, { useState } from "react";
import { Icon } from '@iconify/react';

interface MultipleChoiceProps {
  question: string;
  nameAttribute: string;
  description: string;
  isRequired: Boolean;
  options: string[];
}

const MultipleChoiceInput = ({ question, nameAttribute, description, isRequired, options } : MultipleChoiceProps) => {
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

      <div className="flex flex-col gap-6
      sm:w-3/4 w-full py-1 mt-6">
        {
          options.map((o, idx) => {
            return (
              <label key={idx} className="flex gap-2">
                <input type="radio" name={nameAttribute} value={o} className="w-5 checked:bg-blue-500" />
                {o}
              </label>
            )
          })
        }
      </div>

      {isRequired ? isError && (
          <div className="flex justify-start items-center gap-4 mt-4">
            <Icon icon="carbon:warning" width="30" height="30"  style={{color: "red"}} />
            <p className="font-light text-sm text-red-700">This is a required question</p>
          </div>
        ) : null} 
    </div>
  );
};

export default MultipleChoiceInput;
