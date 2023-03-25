import Logo from "../assets/Logo";
import NotesList from "./NotesList";

export default function Sidebar() {
  return (
    <div className="h-full px-16 py-4">
      <Logo />
      <NotesList />
    </div>
  );
}
