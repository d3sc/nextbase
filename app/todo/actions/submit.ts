// ada baiknya memberikan use server dibagian paling atas
"use server";
import { redirect } from "next/navigation";
import { createTask } from ".";

export default async function submit(formData: FormData) {
  const title = formData.get("title") as string;
  const result = await createTask(title);
  const { error } = JSON.parse(result);

  if (!error?.message) {
    return redirect("/todo?message=berhasil dibuat");
  }
}
