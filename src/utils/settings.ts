interface Options {
  theme?: "light" | "dark" | "system" | "auto";
  colorOverrides?: {
    primary?: string;
    primaryDark?: string;
    secondary?: string;
    secondaryDark?: string;
  };
  [key: string]: any;
}

const defaultSettings: Options = {
  theme: "auto",
  colorOverrides: {},
};

export default class Settings {
  settings: Options;
  constructor() {
    const local = this.pull();
    this.settings = {
      ...defaultSettings,
      ...local,
    };
    this.push();
    this.update();
  }

  get = (key: string) => this.settings[key];
  set = (key: string, value: any) => (this.settings[key] = value);
  pull = () => JSON.parse(localStorage.getItem("settings") || "{}");
  push = () => localStorage.setItem("settings", JSON.stringify(this.settings));

  save(options: Options) {
    localStorage.setItem("settings", JSON.stringify(options));
    this.settings = options;
  }

  update() {
    const { theme } = this.settings;
    const html = document.documentElement;
    if (["dark", "auto"].includes(theme ?? "auto")) html.classList.add("dark");
  }
}
