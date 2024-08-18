import React from 'react';
import Logo from './Logo';

const FormHeader = ({ title, description, img } : { title: string; description: string; img: string; }) => {
  return (
    <div
    style={{
        backgroundImage: img != "" ? `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${img})` : "",
        backgroundSize: "cover",
        backgroundPosition: "center",
    }}
    >
        <div className='container max-w-2xl mx-auto px-4 py-8'>
            {/* 3D Logo */}
            <div className="">
                <Logo />
            </div>

            {/* Form Title */}
            <h1 className='font-bold font-[ubuntu] text-white text-3xl mb-6'>{title}</h1>

            {/* Form Description */}
            <div className="container text-sm text-white md:text-lg leading-0" dangerouslySetInnerHTML={{ __html: description }} />
        </div>
    </div>
  )
}

export default FormHeader