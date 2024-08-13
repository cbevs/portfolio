import { LeftPartition } from "./LeftPartition"
import { RightPartition } from "./RightPartition"

export const MainScreen = () => {
  return (
    <div className="flex h-screen p-2">
      <div className="flex flex-col p-3 lg:flex-row lg:w-9/12 lg:h-4/6 fade-in bg-white dark:bg-gray-800 rounded-md m-auto">
        <LeftPartition />
        <RightPartition />
      </div>
    </div>
  )
}