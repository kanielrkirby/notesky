import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainCard from "../components/CardComponents";
import useNotes from "../hooks/useNotes";
import supabase from "../utils/supabase";
import NoteEditor from "../components/NoteEditor";
import { RawDraftContentState } from "draft-js";

export default function Note() {
  const { id } = useParams<{ id: string }>();
  const notes = useNotes();
  const note = notes.notes?.find((note) => note.id === id)!;
  if (!note) return null;

  async function saveContent(content: RawDraftContentState) {
    console.log(content);
    try {
      const notes = supabase.from("notes");
      const res = await notes
        .update({ content: JSON.stringify(content) })
        .eq("id", id);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <MainCard>
      <h1 className="self-center">{note.title}</h1>
      <p className="self-center opacity-50">{note.subtitle}</p>
      <NoteEditor
        content={
          typeof note?.content === "string"
            ? (JSON.parse(note.content) as RawDraftContentState)
            : undefined
        }
        saveContent={saveContent}
      />
    </MainCard>
  );
}
