"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";

let addproducts = async (body : createproduct) => {
  let res = await fetch("https://localhost:7104/api/Products", {
    method: "POST",
    headers: {
      'Authorization': 'Basic ' + btoa(`11182204:60-dayfreetrial`),
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
  // const router = useRouter()
  
  return (
    <main>
      <div className=" py-16 flex gap-16 justify-center">
        <p className="text-center">Add Products In Store</p>
      </div>
      <Formik
        initialValues ={{ name: "", price: 0,description: "",regionId: 0, stockQuantity: 0,categoryId: 0}}
        validate={(values) => {
          const errors:producterrors  = {};
          if (!values.name) {
            errors.name = "Required";
          }
          if (!values.description) {
            errors.description = "Required";
          }
          if (values.stockQuantity<=0) {
            errors.stockQuantity = "Quantity Must be reater than 0";
          }
          if (values.price<=0) {
            errors.price = "Price Must be reater than 0";
          }
          if (values.categoryId<=0) {
            errors.categoryId = "Please select a category";
          }
          if (values.regionId<=0) {
            errors.regionId = "Please select a region";
          }
          return errors;
        }}
        onSubmit={async (values, {setSubmitting }) => {
          let data=await addproducts(values)
          addproducts(data)
          setSubmitting(false);
          alert("Product Added Successfully")
          // router.push('/admin/products')
        }}
      >
        {({ isSubmitting }) => (
          <Form
          
            className="max-w-[500px] relative left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col gap-2 mb-6">
              <label htmlFor="name">Product name</label>
              <Field className="border-[1px] outline-none border-gray-400 p-2 focus:border-primary" type="name" name="name" />
              <ErrorMessage name="name" component="small" className="text-red-400"/>
            </div>

            <div className="flex flex-col gap-2 mb-6">
              <label htmlFor="name">Product price</label>
              <Field className="border-[1px] outline-none border-gray-400 p-2 focus:border-primary" type="price" name="price" />
              <ErrorMessage name="price" component="small" className="text-red-400"/>
            </div>

            <div className="flex flex-col gap-2 mb-6">
              <label htmlFor="description">Product description</label>
              <Field className="border-[1px] outline-none border-gray-400 p-2 focus:border-primary" type="description" name="description" />
              <ErrorMessage name="description" component="small" className="text-red-400"/>
            </div>

            <div className="flex flex-col gap-2 mb-6">
              <label htmlFor="stockQuantity">Product Quantity</label>
              <Field className="border-[1px] outline-none border-gray-400 p-2 focus:border-primary" type="number" name="stockQuantity" />
              <ErrorMessage name="stockQuantity" component="small" className="text-red-400"/>
            </div>

            <div className="flex flex-col gap-2 mb-6">
              <label htmlFor="categoryId">Category</label>
              <Field className="border-[1px] outline-none border-gray-400 p-2 focus:border-primary" type="number" name="categoryId" />
              <ErrorMessage name="categoryId" component="small" className="text-red-400"/>
            </div>

            <div className="flex flex-col gap-2 mb-6">
              <label htmlFor="regionId">Region</label>
              <Field className="border-[1px] outline-none border-gray-400 p-2 focus:border-primary" type="number" name="regionId" />
              <ErrorMessage name="regionId" component="small" className="text-red-400"/>
            </div>

            <button className={` text-white p-2 px-4 text-sm rounded-lg relative left-1/2 -translate-x-1/2 ${isSubmitting? "bg-gray-": "bg-primary"}`}  type="submit" disabled={isSubmitting}>
              Add Product
            </button>
          </Form>
        )}
      </Formik>
      
    </main>
  );
};

export default page;