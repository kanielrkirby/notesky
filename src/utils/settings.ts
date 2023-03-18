export default function init() {}

class Settings {
  settings: any;
  constructor() {
    this.settings = {};
  }

  get(key: string) {
    return this.settings[key];
  }
  set(key: string, value: any) {
    this.settings[key] = value;
  }
  clear() {
    this.settings = {};
  }
  save() {
    localStorage.setItem("settings", JSON.stringify(this.settings));
  }
}
