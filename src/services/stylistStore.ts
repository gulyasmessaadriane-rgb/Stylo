import { create } from 'zustand';

interface Outfit {
  id: string;
  name: string;
  items: string[];
  occasion?: string;
  confidence: number;
  explanation: string;
}

interface StylistState {
  suggestedOutfit: Outfit | null;
  outfitHistory: Outfit[];
  setSuggestedOutfit: (outfit: Outfit) => void;
  acceptOutfit: (outfit: Outfit) => void;
  rejectOutfit: () => void;
}

export const useStylistStore = create<StylistState>((set) => ({
  suggestedOutfit: null,
  outfitHistory: [],
  setSuggestedOutfit: (outfit) =>
    set({
      suggestedOutfit: outfit,
    }),
  acceptOutfit: (outfit) =>
    set((state) => ({
      suggestedOutfit: outfit,
      outfitHistory: [...state.outfitHistory, outfit],
    })),
  rejectOutfit: () =>
    set({
      suggestedOutfit: null,
    }),
}));
