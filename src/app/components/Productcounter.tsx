"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa6";

const Productcounter = ({ id }: { id: number }) => {
  const router = useRouter()
  const [count, setcount] = useState(1);

  const addcount = () => {
    if (count < 10) {
      setcount((prev) => prev + 1);
    } else {
      setcount(10);
    }
  };

  const subtractcount = () => {
    if (count > 1) {
      setcount((prev) => prev - 1);
    } else {
      setcount(1);
    }
  };

  const addtocart = async (body: { productId: number; stockQuantity: number }) => {
    let res = await fetch("https://localhost:7104/api/Cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        'Authorization': 'Basic ' + btoa(`11182204:60-dayfreetrial`)
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      return undefined;
    }
    let data = await res.json();
    return data;
  };

  const submitform = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // alert("id "+id+"count "+count)
    addtocart({ productId: id, stockQuantity: count });
    setcount(1);
    alert("Product Added To Cart");
    router.refresh()
  };

  return (
    <form
      onSubmit={submitform}
      className="flex flex-row-reverse justify-between items-center"
    >
      <button className="bg-primary text-white h-fit text-xl p-3 rounded-full">
        <FaCartPlus />
      </button>

      <div className="flex gap-1 my-4">
        <button
          className="text-white bg-gray-700 px-3 rounded-md h-min py-1"
          type="button"
          onClick={addcount}
        >
          {" "}
          +{" "}
        </button>
        <input
          type="text"
          name="value"
          id="value"
          readOnly
          value={count}
          className="text-center p-2 w-6 px-0 text-[.8rem]"
        />
        <button
          type="button"
          className="text-white bg-gray-700 px-[.9rem] rounded-md  h-min py-1"
          onClick={subtractcount}
        >
          -
        </button>
      </div>
    </form>
  );
};

export default Productcounter;
