import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import useNotes from "../hooks/useNotes";
import supabase from "../utils/supabase";

export default function Note() {
  const { id } = useParams<{ id: string }>();
  const notes = useNotes();
  const note = notes.notes?.find((note) => note.id === id);
  const { title, subtitle, content, created_at, updated_at } = note!;

  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <p>{content}</p>
      <p>{created_at}</p>
      <p>{updated_at}</p>
    </div>
  );
}
