"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FormInterface } from "@/interfaces/interfaces";
import DataTable from "react-data-table-component";
import CreateFormButton from "../components/CreateFormButton";

const AdminHome = () => {
    const [forms, setForms] = useState<FormInterface[]>([]);
    const columns = [
        {
            name: "buttons",
            width: "300px",
            selector: (form: FormInterface) => {
                
                return (
                    <div className="flex justify-center items-center gap-2">
                        <button className="px-4 py-3 rounded-lg bg-blue-400" type="button">Activate</button>
                        <button className="px-4 py-3 rounded-lg bg-yellow-400" type="button">Edit</button>
                        <button className="px-4 py-3 rounded-lg bg-red-400" type="button">Remove</button>
                    </div>
                )
            }
        },
        {
            name: "name",
            selector: (form : FormInterface) => form.formName,
        },
        {
            name: "id",
            width: "150px",
            selector: (form : FormInterface) => form._id.toString(),
        },
        {
            name: "description",
            width: "150px",
            selector: (form : FormInterface) => form.description,
        },
        {
            name: "image",
            width: "150px",
            selector: (form : FormInterface) => (
                <div
                    style={{
                        backgroundImage: `url(${form.image})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        width: "100px",
                        height: "100px",
                        margin: "5px"
                    }}
                />
            ),
        },
    ]

  useEffect(() => {
    const getAllForms = async () => {
      axios.get("../api/form").then((res) =>{
        setForms(res.data.forms);
        console.log(res.data);
      }).catch((error) => console.log(error.message));
    }

    getAllForms();
  }, []);


  return (
    <div className="container max-w-7xl mx-auto">
        <DataTable
        pagination
        fixedHeader
        className="flex"
        columns={columns} data={forms} /> 

        <CreateFormButton />
    </div>
  )
}

export default AdminHome