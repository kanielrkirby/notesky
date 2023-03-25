import useNotes from "../hooks/useNotes";
import useAuth from "../hooks/useAuth";

export default function NotesList() {
  const { user } = useAuth();
  // const notes = useNotes(user.id);
  return <h1>NotesList</h1>;
}
