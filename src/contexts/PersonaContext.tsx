import React, { createContext, useContext, useState, ReactNode } from "react";

export type Persona = "freelancer" | "tutor" | null;

interface PersonaContextType {
  persona: Persona;
  setPersona: (persona: Persona) => void;
  isSelected: boolean;
}

const PersonaContext = createContext<PersonaContextType | undefined>(undefined);

export const PersonaProvider = ({ children }: { children: ReactNode }) => {
  const [persona, setPersona] = useState<Persona>(null);

  return (
    <PersonaContext.Provider value={{ persona, setPersona, isSelected: persona !== null }}>
      {children}
    </PersonaContext.Provider>
  );
};

export const usePersona = () => {
  const context = useContext(PersonaContext);
  if (!context) {
    throw new Error("usePersona must be used within a PersonaProvider");
  }
  return context;
};
