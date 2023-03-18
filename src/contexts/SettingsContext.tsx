import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import chroma from "chroma-js";

// Types

interface Options {
  theme?: "light" | "dark" | "system" | "auto";
  colorOverrides?: {
    primaryLight?: string | undefined;
    primaryDark?: string | undefined;
    secondaryLight?: string | undefined;
    secondaryDark?: string | undefined;
  };
  [key: string]: any;
}

// Default options

const defaultOptions: Options = {
  theme: "system",
  colorOverrides: {
    primaryLight: undefined,
    primaryDark: undefined,
    secondaryLight: undefined,
    secondaryDark: undefined,
  },
};

// Context

const SettingsContext = createContext(defaultOptions);

// Provider

const SettingsProvider = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) => {
  // Options
  const [options, setOptions] = useState<Options>(pull());

  // Sets the option specified
  function set(key: string, value: any) {
    setOptions({
      ...options,
      [key]: value,
    });
    localStorage.setItem("settings", JSON.stringify(options));
  }

  // Gets the option specified
  function get(key: string) {
    return options[key];
  }

  // Pulls the options from local storage
  function pull() {
    const stored = localStorage.getItem("settings");
    if (stored) return JSON.parse(stored);
    localStorage.setItem("settings", JSON.stringify(defaultOptions));
    return {};
  }

  // Use effect hook to update everything when the options change

  useEffect(handleSettings, [options]);

  function handleSettings() {
    // Local variables

    const html = document.documentElement;
    const root = getComputedStyle(html);

    // Theme

    const theme = get("theme");

    if (theme === "system") {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches)
        html.classList.add("dark");
      else html.classList.remove("dark");
    } else if (theme === "light") html.classList.remove("dark");
    else html.classList.add("dark");

    // Color overrides

    const colorOverrides = get("colorOverrides");

    if (colorOverrides) {
      const { primaryLight, primaryDark, secondaryLight, secondaryDark } =
        colorOverrides as Options;
      if (primaryLight) {
        if (!chroma.valid(primaryLight))
          set("colorOverrides.primaryLight", undefined);
        else root.setProperty("--primary-light", primaryLight);
      }
      if (primaryDark) {
        if (!chroma.valid(primaryDark))
          set("colorOverrides.primaryDark", undefined);
        else root.setProperty("--primary-dark", primaryDark);
      }
      if (secondaryLight) {
        if (!chroma.valid(secondaryLight))
          set("colorOverrides.secondaryLight", undefined);
        else root.setProperty("--secondary-light", secondaryLight);
      }
      if (secondaryDark) {
        if (!chroma.valid(secondaryDark))
          set("colorOverrides.secondaryDark", undefined);
        else root.setProperty("--secondary-dark", secondaryDark);
      }
    }
  }

  return (
    <SettingsContext.Provider value={{ set, get }}>
      {children}
    </SettingsContext.Provider>
  );
};

// Easy-to-use hook

function useSettings() {
  return useContext(SettingsContext);
}

export { SettingsProvider, useSettings };
