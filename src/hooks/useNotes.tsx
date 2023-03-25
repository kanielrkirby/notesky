import { useQuery } from "react-query";
import supabase from "../utils/supabase";

export default function useNotes(id: string) {
  const { data, isLoading, error } = useQuery(["note"], async () => {
    const { data: notes } = await supabase
      .from("notes")
      .select("title")
      .filter("owner", "eq", id);
    console.log(notes);
    return notes;
  });

  return { data, isLoading, error };
}
