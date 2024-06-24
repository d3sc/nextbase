// ada baiknya memberikan use server dibagian paling atas
"use server";
import { createClient } from "@/utils/supabase/server";

export async function createTask(title: string) {
  const supabase = createClient();

  const result = await supabase.from("tasks").insert({ title }).single();

  return JSON.stringify(result);
}

export async function getTasks() {
  const supabase = createClient();

  const result = await supabase.from("tasks").select();

  return JSON.stringify(result);
}
