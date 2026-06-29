import { ProjectList } from "./projects/ProjectList"

export const ProjectsCard = () => {
  return (
    <div className="w-3/5 h-3/5 mt-10 flex justify-evenly flex-col m-auto">
      <h1 className="lobster text-8xl text-sky-400 text-right mb-10">Projects</h1>
      <ProjectList />
    </div>
  )
}