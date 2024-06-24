import React from "react";
import CreateForm from "./components/CreateForm";
import ListTask from "./components/ListTask";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function page({ searchParams }: { searchParams: { message: string } }) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <CreateForm param={searchParams.message} />
      <ListTask />
    </div>
  );
}
