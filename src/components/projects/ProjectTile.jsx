export const ProjectTile = ({ project }) => {
  
  const skillsList = project.technologies.map((skill) => {
      return  <li key={skill} className="inline-block rounded-lg m-1 p-2 bg-blue-200 text-sm">{skill}</li>
  })

  return (
    <div className="p-10 mb-5 shadow-md rounded-md">
      <a href={project.url} target="_blank" className="font-semibold text-2xl hover:text-sky-400">{project.name}</a>
      <p className="mt-4 dark:text-white color-red">{project.description}</p>
      <ul className="pt-5">
        {skillsList}
      </ul>
    </div>
  )
}