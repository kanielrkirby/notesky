import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainCard from "../components/CardComponents";
import useNotes from "../hooks/useNotes";
import supabase from "../utils/supabase";
import NoteEditor from "../components/NoteEditor";

export default function Note() {
  const { id } = useParams<{ id: string }>();
  const [noteContent, setNoteContent] = useState("");
  const notes = useNotes();
  const note = notes.notes?.find((note) => note.id === id)!;
  console.log(note);
  useEffect(() => {
    if (!note) return;
    setNoteContent(note.content);
  }, [note]);
  if (!note) return null;

  async function saveContent() {
    try {
      await supabase
        .from("notes")
        .update({ content: noteContent })
        .eq("id", id);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <MainCard>
      <h1 className="self-center">{note.title}</h1>
      <p className="self-center opacity-50">{note.subtitle}</p>
      <NoteEditor content={note.content} />
      {/* <p>{note.created_at}</p> */}
      {/* <p>{note.updated_at}</p> */}
    </MainCard>
  );
}
