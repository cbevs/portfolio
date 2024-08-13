export const ProjectTile = ({ project }) => {
  const progItems = ["Git Workflow", "OOP", "Agile"]
  const jsItems = ["Javascript", "Node", "Express", "Passport", "JSON Web Token", "D3"]
  const dbItems = ["Knex", "Objection", "PostgreSQL", "Prisma"]
  const frameworks = ["React"]
  const softSkills = ["Pair-Programming"]
  const markupLangs = ["HTML", "CSS", "SASS"]

  const skillsList = project.technologies.map((skill) => {
    if (progItems.includes(skill)) {
      return <li key={skill} className="prog-skill inline-block rounded-3xl m-1">{skill}</li>
    } else if (jsItems.includes(skill)) {
      return <li key={skill} className="js-skill inline-block rounded-3xl m-1">{skill}</li>
    } else if (dbItems.includes(skill)) {
      return <li key={skill} className="db-skill inline-block rounded-3xl m-1">{skill}</li>
    } else if (frameworks.includes(skill)) {
      return <li key={skill} className="fw-skill inline-block rounded-3xl m-1">{skill}</li>
    } else if (softSkills.includes(skill)) {
      return <li key={skill} className="soft-skill inline-block rounded-3xl m-1">{skill}</li>
    } else if (markupLangs.includes(skill)) {
      return <li key={skill} className="mk-skill inline-block rounded-3xl m-1">{skill}</li>
    } else {
      return  <li key={skill} className="unkwn-skill inline-block rounded-3xl m-1">{skill}</li>
    }
  })

  return (
    <div className="p-10 mb-5 shadow-md rounded-md">
      <a href={project.url} target="_blank" className="font-semibold text-2xl color-red hover:text-red-300">{project.name}</a>
      <p className="mt-4 color-red">{project.description}</p>
      <ul className="text-xs pt-5">
        {skillsList}
      </ul>
    </div>
  )
}