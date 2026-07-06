export const LinksCard = () => {
  return (
    <div className="w-3/5 h-3/5 mt-10 mr-auto ml-auto mb-10 flex justify-evenly flex-col">
          <h1 className="lobster text-8xl text-sky-400 dark:text-violet-400 mb-10">Links</h1>
          <p className="ml-5">Email me at:
          <a href="mailto:cnbevevino@gmail.com" target="_blank" className="hover:text-sky-400 hover:dark:text-violet-400 font-bold ml-1">cnbevevino@gmail.com</a>
          </p>
          <p className="ml-5">Check out my Github:
          <a href="https://github.com/cbevs" target="_blank" className="hover:text-sky-400 hover:dark:text-violet-400 font-bold ml-1">https://github.com/cbevs</a>
          </p>
        </div>
  )
}