import { createContext, useContext, useState } from "react";
import translations from "../i18n/translations";

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    return localStorage.getItem("lang") || "ES";
  });

  function setLang(newLang) {
    localStorage.setItem("lang", newLang);
    setLangState(newLang);
  }

  function t(path) {
    const keys = path.split(".");
    let value = translations;
    for (const key of keys) {
      value = value?.[key];
    }
    return value?.[lang] ?? path;
  }

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}