import { create } from 'zustand';

interface ClothingItem {
  id: string;
  name: string;
  image: string;
  colors: string[];
  category: string;
  occasions: string[];
  lastWorn?: Date;
  favorite?: boolean;
}

interface ClosetStore {
  items: ClothingItem[];
  addItem: (item: ClothingItem) => void;
  removeItem: (id: string) => void;
  toggleFavorite: (id: string) => void;
  updateLastWorn: (id: string) => void;
}

export const useClosetStore = create<ClosetStore>((set) => ({
  items: [
    {
      id: '1',
      name: 'Soft Coral Blazer',
      image: '🧥',
      colors: ['coral'],
      category: 'outerwear',
      occasions: ['work', 'formal'],
      favorite: true,
    },
    {
      id: '2',
      name: 'Cream Pants',
      image: '👖',
      colors: ['cream'],
      category: 'bottoms',
      occasions: ['work', 'casual'],
    },
    {
      id: '3',
      name: 'Mint Cardigan',
      image: '🧶',
      colors: ['mint'],
      category: 'tops',
      occasions: ['casual', 'cozy'],
    },
  ],
  addItem: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
  toggleFavorite: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, favorite: !item.favorite } : item
      ),
    })),
  updateLastWorn: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, lastWorn: new Date() } : item
      ),
    })),
}));
