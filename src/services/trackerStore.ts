import { create } from 'zustand';

interface DailyLog {
  id: string;
  date: Date;
  mood: number;
  moodNote?: string;
  outfitWorn?: string;
  habits: { [habitName: string]: boolean };
  notes?: string;
}

interface TrackerState {
  logs: DailyLog[];
  addLog: (log: DailyLog) => void;
  getTodayLog: () => DailyLog | undefined;
  getMoodTrend: () => number[];
}

export const useTrackerStore = create<TrackerState>((set, get) => ({
  logs: [
    {
      id: '1',
      date: new Date(),
      mood: 8,
      outfitWorn: 'Soft coral blazer',
      habits: { exercise: true, journaled: true },
    },
  ],
  addLog: (log) =>
    set((state) => ({
      logs: [...state.logs, log],
    })),
  getTodayLog: () => {
    const logs = get().logs;
    const today = new Date().toDateString();
    return logs.find((log) => log.date.toDateString() === today);
  },
  getMoodTrend: () => {
    const logs = get().logs;
    return logs.slice(-7).map((log) => log.mood);
  },
}));
