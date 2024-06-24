import React from "react";
import { getTasks } from "../actions";

export default async function ListTask() {
  const result = await getTasks();
  const { error, data } = JSON.parse(result);

  if (error) return <div className="">{error?.message}</div>;
  return (
    <div className="mt-4 p-1 bg-gray-200 rounded-lg border border-gray-300">
      <ul className="bg-black text-white p-4 rounded-lg">
        {data.map((item: any, i: number) => (
          <li className="flex items-center justify-between mb-2 gap-4 border p-6 rounded-md" key={i}>
            <span>{item.title}</span>
            <span>{item.completed ? "sudah" : "belum"}</span>
            <div>
              <button className="bg-white text-black px-2 py-1 mr-2">Edit</button>
              <button className="bg-white text-black px-2 py-1">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
