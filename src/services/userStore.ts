import { create } from 'zustand';

interface UserState {
  mood: 'calm' | 'energized' | 'neutral' | 'uncertain';
  moodIntensity: number;
  setMood: (mood: 'calm' | 'energized' | 'neutral' | 'uncertain', intensity: number) => void;
}

export const useUserStore = create<UserState>((set) => ({
  mood: 'calm',
  moodIntensity: 5,
  setMood: (mood, intensity) =>
    set({
      mood,
      moodIntensity: intensity,
    }),
}));
