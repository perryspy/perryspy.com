import { useState, useEffect } from 'react';
import './App.css';
import content from './content';
import Sidebar from './components/Sidebar';
import {
  Experience,
  Education,
  Skills,
  Clearance,
} from './components/Sections';

export default function App() {
  const {
    name,
    experience,
    education,
    skills,
    clearance,
    resumePDF,
    location,
  } = content;
  const fullName = `${name.first} ${name.last}`;

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('perryspy-theme') ?? 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('perryspy-theme', theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  }

  return (
    <div className="shell">
      <Sidebar data={content} theme={theme} onToggle={toggleTheme} />
      <main className="main">
        <Experience jobs={experience} />
        <Education entries={education} />
        <Skills groups={skills} />
        <Clearance
          text={clearance}
          resumePDF={resumePDF}
          location={location}
          fullName={fullName}
        />
      </main>
    </div>
  );
}
