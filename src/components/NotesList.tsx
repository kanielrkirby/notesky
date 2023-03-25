import useNotes from "../hooks/useNotes";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

export default function NotesList() {
  const { user } = useAuth();
  const { notes, isLoading, error } = useNotes();
  if (!user) return null;
  return (
    <div>
      <ul>
        {notes &&
          notes.map(({ id, title }) => (
            <Link key={id} to={`/note/${id}`}>
              <li className="cursor-pointer bg-black bg-opacity-10 hover:bg-opacity-20 dark:bg-white dark:bg-opacity-10 dark:hover:bg-opacity-20">
                {title}
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
}
