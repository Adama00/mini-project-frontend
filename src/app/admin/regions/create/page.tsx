"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";


let addregions = async (body: { name: string }) => {
    let res = await fetch("https://localhost:7104/api/Regions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: 'Basic ' + btoa(`11182204:60-dayfreetrial`)
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    return undefined;
  }
  let data = await res.json();
  return data
};

const Createregion =() => {
  const router= useRouter()
  return (
    <main>
      <div className=" py-16 flex gap-16 justify-center">
        <p className="text-center">Add region To Store</p>
      </div>
      <Formik
        initialValues ={{ name: ""}}
        validate={(values) => {
          const errors: {
            name?: string }  = {};
          if (!values.name) {
            errors.name = "Required";
          }
        
          return errors;
        }}
        onSubmit={async (values, {setSubmitting }) => {
            let data = await addregions(values)
            alert("regions added successfully")
            router.replace('/admin')
            setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form
          
            className="max-w-[500px] relative left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col gap-2 mb-6">
              <label htmlFor="name">Region name</label>
              <Field className="border-[1px] outline-none border-gray-400 p-2 focus:border-primary" type="name" name="name" />
              <ErrorMessage name="name" component="small" className="text-red-400"/>
            </div>

            <button className="bg-primary text-white p-2 px-4 text-sm rounded-lg relative left-1/2 -translate-x-1/2"  type="submit" disabled={isSubmitting}>
              Add Region
            </button>
          </Form>
        )}
      </Formik>
      
    </main>
  );
};

export default Createregion;
