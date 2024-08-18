"use client"
import React, { useContext } from 'react'
import Editor from '../Editor';
import { FormCreatorContext } from '@/context/CreateFormContext';

const FormDetails = () => {
  const { setTitle } = useContext(FormCreatorContext);
  return (
    <div className='w-full min-h-screen border-r-2 border-black'>
        <div className='w-full text-center py-6 font-bold text-2xl font-[ubuntu] underline'>
          Form Creator
        </div>

        {/* Heading Part */}
        <div>
          <div className='w-full px-10'>
            <input onChange={(e) => setTitle(e.target.value)} placeholder='Form Başlığı'
            className='p-2 w-full'
            />
          </div>

          <div className='w-full px-10 mt-6'>
            <Editor />
          </div>
        </div>

        {/* Body Part */}
        <div></div>
    </div>
  )
}

export default FormDetails