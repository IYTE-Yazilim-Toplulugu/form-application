import { ObjectId } from 'mongoose';
import Link from 'next/link';
import React from 'react'


interface IFormCard {
    formName: string;
    formId: ObjectId;
    formDesc: string;
    formImg: string;
    formColor: string;
}
const FormsCard = ({ formName, formId, formDesc, formImg, formColor } : IFormCard) => {
  return (
    <div className={`w-full border-2 rounded-xl p-4 hover:shadow-xl
        bg-[${formColor}]
    transition-all duration-300 ease-out`}>
    <Link
        href={`/forms/${formId}`}
        className='w-full flex flex-col items-center justify-center gap-6'
    >
        <div 
        style={{
            backgroundImage: `url(${formImg})`,
            backgroundPosition: "center",
            backgroundSize: "cover"
        }}
        className='w-full h-64 border-2 rounded-lg' />
        <div className='w-full'>
            <h2 className='font-bold text-lg'>{formName}</h2>
            <desc className='font-light text-sm leading-6 text-black/80 text-ellipsis overflow-hidden'>{formDesc}</desc>
        </div>
    </Link>
    </div>
  )
}

export default FormsCard