import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

let store = (set) => ({
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
});

store = devtools(store, 'SettingsStore');
store = persist(store, { name: 'settings_store' });

const useSettingsStore = create(store);

export default useSettingsStore;
