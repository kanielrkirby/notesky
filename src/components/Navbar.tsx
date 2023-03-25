import { Link } from "react-router-dom";
import SettingsWheel from "../assets/SettingsWheel";

export default function Navbar() {
  return (
    <div className="flex items-center justify-end p-4">
      <Link to="/signin">Sign In!</Link>
      <Link to="/signup">Sign Up!</Link>
      <SettingsWheel />
    </div>
  );
}
