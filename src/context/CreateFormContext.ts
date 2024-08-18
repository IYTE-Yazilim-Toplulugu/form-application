"use client"
import { TypeFormCreatorContext } from "./ContextTypes";
import { createContext } from "react";


const TypeFormCreatorContextState = {
  title: "",
  setTitle: () => "",

  description: "",
  setDescription: () => "",

  textColor: "",
  setTextColor: () => "",

  img: "",
  setImg: () => "",

  bgColor: "",
  setBgColor: () => "",

  button: "",
  setButton: () => "",

  btnColor: "",
  setBtnColor: () => "",

  isActive: true,
  setIsActive: () => true,


  questions: [
    {
        question: "",
        type: 0,
        description: "",
        isRequired: true,
        nameAttribute: "",
        options: [""],
    },
  ],
  setQuestions: () => [{
    question: () => "",
    type: () => 0,
    description: () => "",
    isRequired: () => true,
    nameAttribute: () => "",
    options: () => [""],
  }],
};

export const FormCreatorContext = createContext<TypeFormCreatorContext>(TypeFormCreatorContextState);
