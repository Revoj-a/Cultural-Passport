export interface ActiveSelection {
  native: string;
  translation: string;
  language: string;
  type: "dining" | "emergency" | "navigation" | "favorites" | "general";
  info: string;
}

export interface PhraseModalProps {
  phrase: ActiveSelection;
  onClose: () => void;
}
