import useNotes from "../hooks/useNotes";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

export default function NotesList() {
  const { user } = useAuth();
  const { notes, isLoading } = useNotes();
  if (!user) return null;
  return (
    <div>
      {(isLoading && <p>Loading...</p>) || (
        <ul>
          {notes &&
            notes.map(({ id, title, content: baseContent }) => {
              const cleanContent = baseContent.replace(/<[^>]*>?/gm, "");
              const content =
                cleanContent.length > 50
                  ? cleanContent.slice(0, 50) + "..."
                  : cleanContent;
              return (
                <Link key={id} to={`/note/${id}`}>
                  <li className="cursor-pointer rounded-lg bg-black bg-opacity-10 p-2 hover:bg-opacity-20 dark:bg-white dark:bg-opacity-10 dark:hover:bg-opacity-20">
                    <h2 className="opacity-90">{title}</h2>
                    <p className="text-sm opacity-50">{content}</p>
                  </li>
                </Link>
              );
            })}
        </ul>
      )}
    </div>
  );
}
