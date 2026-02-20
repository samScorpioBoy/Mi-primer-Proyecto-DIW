import { createContext, useContext, useState } from "react";
import translations from "../i18n/translations";

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState("ES");

  // Función helper: t("home.hero") devuelve el texto en el idioma actual
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