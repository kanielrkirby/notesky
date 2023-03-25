import { useQuery } from "react-query";
import Note from "../types/Note";
import supabase from "../utils/supabase";
import useAuth from "./useAuth";

export default function useNotes() {
  const { user } = useAuth();
  async function fetchNotes(): Promise<Note[] | null> {
    const { data: notes } = await supabase.from("notes").select("*");
    return notes as Note[];
  }

  const {
    data: notes,
    isLoading,
    error,
  } = useQuery(["note"], fetchNotes, { enabled: !!user?.id });

  return { notes, isLoading, error };
}
