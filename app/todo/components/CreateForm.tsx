"use client";
import { SubmitButton } from "@/app/login/submit-button";
import submit from "../actions/submit";
import { useRef } from "react";

export default function CreateForm({ param }: { param: String }) {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <div>
      <form ref={formRef} className="shadow-md rounded px-8 pt-6 pb-8 mb-4" id="myForm">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            name="title"
            required
            placeholder="Enter title"
          />
        </div>
        <SubmitButton
          className="border w-full border-slate-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          pendingText="Loading.."
          formAction={async (formData) => {
            await submit(formData);
            formRef.current?.reset();
          }}
        >
          Submit
        </SubmitButton>
        {param ? <div className="">{param}</div> : null}
      </form>
    </div>
  );
}
