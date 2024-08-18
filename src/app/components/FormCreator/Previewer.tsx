"use client"
import React, { useContext } from 'react';
import FormHeader from '../FormHeader';
import { FormCreatorContext } from '@/context/CreateFormContext';

const Previewer = () => {
  const { title, description, img } = useContext(FormCreatorContext);
  return (
    <div className='w-full h-screen min-h-screen max-h-screen overflow-y-auto overflow-x-hidden'>
            {/* Header */}
            <div className='text-center w-1/2 py-4 bg-black text-white fixed'>
                <p>Previewer</p>
            </div>

        {/* Auto Generated Content */}
        <div className='pt-20 bg-gradient-to-b from-[#21153a] to-[#3d636f] h-full'>
          <FormHeader description={description} title={title} img={img} />
        </div>

        
    </div>
  )
}

export default Previewer