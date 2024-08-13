import { ProjectTile } from "./ProjectTile";
import { projects } from "../../data/projects";

export const ProjectList = () => {

  const projectArray = projects.map((project) => {
    return <ProjectTile key={project.id} project={project} />
  })

  return (
    <>
    {projectArray}
    </>
  )
}