import { useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

import usePeopleStore from './stores/usePeopleStore';
import useSettingsStore from './stores/useSettingsStore';

function App() {
  const people = usePeopleStore((state) => state.people);
  const darkMode = useSettingsStore((state) => state.darkMode);
  const fetchPeople = usePeopleStore((state) => state.fetchPeople);
  const loading = usePeopleStore((state) => state.loading);
  const toggleDarkMode = useSettingsStore((state) => state.toggleDarkMode);

  console.log({ loading, people, darkMode });

  useEffect(() => {
    if (people.length === 0) {
      fetchPeople();
    }
  }, [people, fetchPeople]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => toggleDarkMode()}>toggle dark mode</button>
        <button onClick={() => fetchPeople()}>fetch people</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
