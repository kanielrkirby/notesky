import { useQuery } from "react-query";
import Note from "../types/Note";
import supabase from "../utils/supabase";

export default function useNotes(userId?: string) {
  async function fetchNotes(): Promise<{ title: string; id: string }[] | null> {
    const { data: notes } = await supabase
      .from("notes")
      .select("title, id, owner");
    return notes;
  }

  const {
    data: notes,
    isLoading,
    error,
  } = useQuery(["note"], fetchNotes, { enabled: !!userId });

  return { notes, isLoading, error };
}
