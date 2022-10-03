import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

let store = (set, get) => ({
  people: [],
  loading: false,
  addPerson: (person) => set((state) => ({ people: [...state.people, person] })),
  fetchPeople: async () => {
    // const state = get();
    const loading = get().loading;
    if (!loading) {
      set(() => ({ loading: true }));
    }
    const response = await fetch('https://randomuser.me/api/?results=10');
    const data = await response.json();
    set(() => ({ people: data.results, loading: false }));
  },
});

store = devtools(store, 'PeopleStore');
store = persist(store, { name: 'people_store' });
// getStorage: () => sessionStorage

const usePeopleStore = create(store);

export default usePeopleStore;
