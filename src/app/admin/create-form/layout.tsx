"use client"
import { QuestionsType } from '@/context/ContextTypes';
import { FormCreatorContext } from '@/context/CreateFormContext'
import React, { useState } from 'react'

const CreateFormLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [textColor, setTextColor] = useState<string>("");
    const [img, setImg] = useState<string>("");
    const [bgColor, setBgColor] = useState<string>("");
    const [button, setButton] = useState<string>("");
    const [btnColor, setBtnColor] = useState<string>("");
    const [isActive, setIsActive] = useState<Boolean>(true);
    const [questions, setQuestions] = useState<QuestionsType>([{
        question: "",
        description: "",
        isRequired: false,
        nameAttribute: "",
        options: [""],
        type: 0
    }]);

    const contextValue = {
        title, setTitle,
        description, setDescription,
        textColor, setTextColor,
        img, setImg,
        bgColor, setBgColor,
        button, setButton,
        btnColor, setBtnColor,
        isActive, setIsActive,
        questions, setQuestions
    }
  return (
    <FormCreatorContext.Provider value={contextValue}>
        {children}
    </FormCreatorContext.Provider>
  )
}

export default CreateFormLayout