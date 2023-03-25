import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../utils/supabase";

export default function SignIn() {
  const [error, setError] = useState<string>();
  const navigate = useNavigate();

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: "monogram1036@runbox.com",
        password: "passwordDude",
      });
      if (error) throw error;
      setError(undefined);
      navigate("/");
    } catch (error: any) {
      setError(error.message);
    }
  }

  return (
    <div>
      <h1>Sign In</h1>
      {error && <p>{error}</p>}
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button type="submit">Sign Up</button>
      </form>
      <button>
        <Link to="/">Back</Link>
      </button>
    </div>
  );
}
