"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";


let addcategory = async (body: { name: string }) => {
    let res = await fetch("http://adamasenam-001-site1.ctempurl.com/api/Categories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    return undefined;
  }
  let data = await res.json();
  return data
};

const page =() => {
  const router= useRouter()
  return (
    <main>
      <div className=" py-16 flex gap-16 justify-center">
        <p className="text-center">All Products In Store</p>
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
            let data = await addcategory(values)
            alert("Category added successfully")
            router.replace('/admin')
            setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form
          
            className="max-w-[500px] relative left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col gap-2 mb-6">
              <label htmlFor="name">Category name</label>
              <Field className="border-[1px] outline-none border-gray-400 p-2 focus:border-primary" type="name" name="name" />
              <ErrorMessage name="name" component="small" className="text-red-400"/>
            </div>

            <button className="bg-primary text-white p-2 px-4 text-sm rounded-lg relative left-1/2 -translate-x-1/2"  type="submit" disabled={isSubmitting}>
              Add Product
            </button>
          </Form>
        )}
      </Formik>
      
    </main>
  );
};

export default page;
