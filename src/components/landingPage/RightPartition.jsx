import { ProjectList } from "../projects/ProjectList"

export const RightPartition = () => {
  return (
   <div className="h-full w-full 2xl:w-1/2 text-center p-4 overflow-auto">
    <h1 className="text-4xl p-4 color-pink font-semibold">What I've been working on!</h1>
   <ProjectList />
   </div>
  ) 
 }