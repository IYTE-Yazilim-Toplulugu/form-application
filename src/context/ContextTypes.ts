import { Dispatch, SetStateAction } from "react";

export type TypeFormCreatorContext = {
  title: string,
  setTitle: Dispatch<SetStateAction<string>>,

  description: string,
  setDescription: Dispatch<SetStateAction<string>>,

  textColor: string,
  setTextColor: Dispatch<SetStateAction<string>>,

  img: string,
  setImg: Dispatch<SetStateAction<string>>,

  bgColor: string,
  setBgColor: Dispatch<SetStateAction<string>>,

  button: string,
  setButton: Dispatch<SetStateAction<string>>,

  btnColor: string,
  setBtnColor: Dispatch<SetStateAction<string>>,

  isActive: Boolean,
  setIsActive: Dispatch<SetStateAction<Boolean>>,


  questions: QuestionsType,
  // setQuestions: DispatchQuestionsType,
  setQuestions: Dispatch<SetStateAction<QuestionsType>>,
};


export type QuestionsType = {
  question: string,
  type: number,
  description: string,
  isRequired: boolean,
  nameAttribute: string,
  options: string[],
}[];

export type DispatchQuestionsType = {
  question: Dispatch<SetStateAction<string>>,
  type: Dispatch<SetStateAction<Number>>,
  description: Dispatch<SetStateAction<string>>,
  isRequired: Dispatch<SetStateAction<Boolean>>,
  nameAttribute: Dispatch<SetStateAction<string>>,
  options: Dispatch<SetStateAction<string[]>>,
}[];