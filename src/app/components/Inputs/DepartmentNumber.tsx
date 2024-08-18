"use client"
import React, { useState } from "react";
import { Icon } from '@iconify/react';

interface DepartmentProps {
  question: string;
  nameAttribute: string;
  isRequired: Boolean;
  description: string;
}
const DepartmentInput = ({ question, nameAttribute, isRequired, description } : DepartmentProps) => {
  
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isError, setIsError] = useState<Boolean>(false);

  const departmentList = [
    "Fizik",
    "Fotonik",
    "Kimya",
    "Matematik",
    "Moleküler Biyoloji ve Genetik",
    "Bilgisayar Mühendisliği",
    "Biyomühendislik",
    "Çevre Mühendisliği",
    "Enerji Sistemleri Mühendisliği",
    "Elektronik ve Haberleşme Mühendisliği",
    "Gıda Mühendisliği",
    "İnşaat Mühendisliği",
    "Kimya Mühendisliği",
    "Makina Mühendisliği",
    "Malzeme Bilimi ve Mühendisliği",
    "Endüstriyel Tasarım",
    "Mimarlık",
    "Şehir ve Bölge Planlama",
  ];

  

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
            departmentList.map((d, idx) => {
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
  );
};

export default DepartmentInput;
