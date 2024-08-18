"use client"
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FormInterface } from "@/interfaces/interfaces";
import FormsCard from "./components/FormsCard";

export default function Home() {
  const [forms, setForms] = useState<FormInterface[]>();

  useEffect(() => {
    const getAllForms = async () => {
      axios.get("../api/form").then((res) =>{
        setForms(res.data.forms);
        console.log(res.data);
      }).catch((error) => console.log(error.message));
    }

    getAllForms();
  }, [])
  return (
    <div className="container max-w-2xl mx-auto my-20">
      <div>
      {
        forms?.map((f, idx) => {
          return (
            <FormsCard formDesc={f.description} formId={f._id} formImg={f.image} formName={f.formName} formColor={f.bgColor} />
          )
        })
      }
      </div>

    </div>
  );
}
