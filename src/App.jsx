import './App.css'
import content from './content'
import Sidebar from './components/Sidebar'
import { Experience, Education, Skills, Clearance } from './components/Sections'

export default function App() {
  const { name, experience, education, skills, clearance, resumePDF, location } = content
  const fullName = `${name.first} ${name.last}`

  return (
    <div className="shell">
      <Sidebar data={content} />
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
  )
}
