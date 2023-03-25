import useNotes from "../hooks/useNotes";
import useAuth from "../hooks/useAuth";

export default function NotesList() {
  const { user } = useAuth();
  const { notes, isLoading, error } = useNotes(user?.id);
  if (!user) return null;
  console.log(notes);
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes && notes.map((note) => <li key={note.id}>{note.title}</li>)}
      </ul>
    </div>
  );
}
