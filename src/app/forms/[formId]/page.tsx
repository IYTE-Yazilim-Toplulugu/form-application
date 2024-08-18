"use client"
import React, { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import DepartmentInput from '@/app/components/Inputs/DepartmentNumber';
import EmailInput from '@/app/components/Inputs/EmailInput';
import LongAnswerInput from '@/app/components/Inputs/LongAnswerInput';
import ShortAnswerInput from '@/app/components/Inputs/ShortAnswerInput';
import FullName from '@/app/components/Inputs/FullName';
import StudentNumberInput from '@/app/components/Inputs/StudentNumber';
import PhoneNumberInput from '@/app/components/Inputs/PhoneNumberInput';
import MultipleChoiceInput from '@/app/components/Inputs/MultipleChoiceInput';
import DropDownInput from '@/app/components/Inputs/DropDownInput';
import { FormInterface, QuestionInterface } from '@/interfaces/interfaces';
import FormHeader from '@/app/components/FormHeader';

import { MdClose } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa';
import { BeatLoader } from 'react-spinners';


const Form = ({ params }: { params: { formId: string } }) => {
    const formId = params.formId;
    const [form, setForm] = useState<FormInterface>();
    const [questions, setQuestions] = useState<QuestionInterface[]>();

    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(0);

    useEffect(() => {
      setTimeout(() => {
          setSuccess(0);
      }, 3000);
    }, [success]);

    useEffect(() => {
        const getFormAndQuestions = async () => {
            await axios.get(`../api/form/${formId}`).then((res) => {
                console.log(res.data);
                setForm(res.data.form)
                setQuestions(res.data.questions);
              }).catch((err) => {
                  console.log(err.message);
              });
        }
        getFormAndQuestions();
    }, []);


    const submit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
    
        let responses : string[] = []
        questions?.map((d, idx) => {
          responses.push(formData.get(d.nameAttribute)!.toString())
        });
        const requestData = {
          formId: "2312312312",
          responses: responses,
        }
    
        await axios.post("../api/submit-application", requestData).then((res) => {
          console.log(res.data);
        }).catch((err) => {
            console.log(err.message);
        });
      }

  return (
    <div className="">
      <FormHeader title={form ? form.formName : ""} description={form ? form.description : ""} img={form ? form.image : ""} />
      <form onSubmit={submit} className='container max-w-2xl mx-auto'>
        {
          questions?.map((d, idx) => {
            switch (d.type) {
              case "department":
                return (
                  <DepartmentInput key={idx} question={d.question} nameAttribute={d.nameAttribute} isRequired={d.isRequired} description={d.description} />
                );
              case "email":
                return (
                  <EmailInput key={idx} question={d.question} nameAttribute={d.nameAttribute} isRequired={d.isRequired} description={d.description} />
                );
              case "long":
                return (
                  <LongAnswerInput key={idx} question={d.question} nameAttribute={d.nameAttribute} isRequired={d.isRequired} description={d.description} />
                );
              case "short":
                return (
                  <ShortAnswerInput key={idx} question={d.question} nameAttribute={d.nameAttribute} isRequired={d.isRequired} description={d.description} />
                );
              case "fullName":
                return (
                  <FullName key={idx} question={d.question} nameAttribute={d.nameAttribute} isRequired={d.isRequired} description={d.description} />
                );
              case "studentNumber":
                return (
                  <StudentNumberInput key={idx} question={d.question} nameAttribute={d.nameAttribute} isRequired={d.isRequired} description={d.description} />
                );
              case "phone":
                return (
                  <PhoneNumberInput key={idx} question={d.question} nameAttribute={d.nameAttribute} isRequired={d.isRequired} description={d.description} />
                );
              case "multipleChoice":
                return (
                  <MultipleChoiceInput key={idx} question={d.question} nameAttribute={d.nameAttribute} isRequired={d.isRequired} description={d.description} options={d.options} />
                );
              case "dropdown":
                return (
                  <DropDownInput key={idx} question={d.question} nameAttribute={d.nameAttribute} isRequired={d.isRequired} description={d.description} options={d.options} />
                );
              default:
                return;
            }
          })
        }

        {/* <DepartmentInput question={"Okuduğunuz / Bitirdiğiniz Bölüm"} nameAttribute="department" isRequired={true} description={""} />
        <EmailInput question="Your Email" nameAttribute="email" description="" isRequired={true} />
        <LongAnswerInput question="Write Your Idea" nameAttribute="longAnswer" description="" isRequired={true} />
        <ShortAnswerInput question="Short Answer Question" nameAttribute="short" description="" isRequired={true} />
        <FullName question="Full Name" nameAttribute="short" description="" isRequired={true} />
        <StudentNumberInput question="Student Number" nameAttribute="short" description="" isRequired={true} />
        <PhoneNumberInput question="Your Phone Number" nameAttribute="short" description="" isRequired={true} />
        <MultipleChoiceInput question="Select One" nameAttribute="attribute" description="" isRequired={true} options={["a", "b", "c"]} />
        <DropDownInput question="Select One" nameAttribute="attribute" description="" isRequired={true} options={["a", "b", "c"]} /> */}

        <div className='w-full p-4'>
        <button type="submit"
        className='w-full py-2 text-center bg-blue-500 text-white rounded-full'
        >
          {isLoading ? <BeatLoader /> : success == 1 ? <FaCheck /> : success == 2 ? <MdClose /> : "Gönder"}
        </button>
        </div>
      </form>
    </div>
  )
}

export default Form




// const data = [
//     {
//       type: "department",
//       question: "Bölümünüz",
//       nameAttribute: "department",
//       isRequired: true,
//       description: "Okuduğunuz ya da bitirdiğiniz bölümünüzü seçiniz.",
//       options: []
//     },
//     {
//       type: "email",
//       question: "Emailinizi Giriniz",
//       nameAttribute: "email",
//       isRequired: true,
//       description: "Öğrenci emailinizi girmeniz önerilir",
//       options: []
//     },
//     {
//       type: "long",
//       question: "Topluluk Hakkındaki Düşünceleriniz Nelerdir",
//       nameAttribute: "long1",
//       isRequired: true,
//       description: "Lütfen kısaca açıklayınız",
//       options: []
//     },
//     {
//       type: "short",
//       question: "En sevdiğiniz etkinliğimiz hangisiydi?",
//       nameAttribute: "short1",
//       isRequired: true,
//       description: "",
//       options: []
//     },
//     {
//       type: "short",
//       question: "En beğenmediğimiz etkinliğimiz hangisiydi?",
//       nameAttribute: "short2",
//       isRequired: true,
//       description: "",
//       options: []
//     },
//     {
//       type: "fullName",
//       question: "İsminiz Nedir?",
//       nameAttribute: "name",
//       isRequired: true,
//       description: "Lütfen tam isminizi giriniz",
//       options: []
//     },
//     {
//       type: "studentNumber",
//       question: "Öğrenci Numaranız Nedir?",
//       nameAttribute: "studentNumber",
//       isRequired: true,
//       description: "Yalnızca iyte öğrenci numarası kabul edilmektedir",
//       options: []
//     },
//     {
//       type: "phone",
//       question: "Telefon Numaranız Nedir?",
//       nameAttribute: "phone",
//       isRequired: true,
//       description: "",
//       options: []
//     },
//     {
//       type: "multipleChoice",
//       question: "Hangisi etkinliğimiz daha iyidir?",
//       nameAttribute: "multiple1",
//       isRequired: true,
//       description: "",
//       options: ["Code Night", "Soft Talks", "Sosyal Sorumluluk Projelerimiz"]
//     },
//     {
//       type: "dropdown",
//       question: "Hangi Şehirden Geldiniz?",
//       nameAttribute: "dropdown1",
//       isRequired: true,
//       description: "",
//       options: ["İstanbul", "Ankara", "İzmir", "Diğer"]
//     },
    
//   ];