// AuthProvider.js
import React, { createContext, useContext, useState, useEffect } from "react";
import User from "../types/User";
import supabase from "../utils/supabase";

interface AuthContextType {
  signUp: (email: string, password: string) => Promise<any>;
  signIn: (email: string, password: string) => Promise<any>;
  signOut: () => Promise<any>;
  user?: User;
}

export const AuthContext: React.Context<AuthContextType> = createContext(
  undefined as any,
);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    (async () => {
      const { session } = (await supabase.auth.getSession()).data;
      setUser(session?.user);

      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((e, session) =>
        setUser(session?.user),
      );

      return subscription?.unsubscribe;
    })();
  }, []);

  const value = {
    signUp: (email: string, password: string) =>
      supabase.auth.signUp({ email, password }),
    signIn: (email: string, password: string) =>
      supabase.auth.signInWithPassword({ email, password }),
    signOut: () => supabase.auth.signOut(),
    user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
