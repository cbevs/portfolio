import personalPic from '../assets/personalPic.png'

export const MainCard = () => {

  return (
      <div className="w-3/5 h-3/5 flex justify-evenly flex-col items-center md:flex-row m-auto">
        <img src={personalPic} className="w-full h-full object-scale-down" />
        <div className="h-auto w-auto p-5">
          <p>Thanks for checking my site out! My name is Chris and I am an aspiring web developer who is currently based in Salt Lake City, Utah. I have experience in Javascript, HTML, and CSS among others, and am constantly working to up my skills.</p>
          <p className="mt-2">When I’m not working on coding projects, you can find me playing in the great outdoors. I love rock climbing, mountain biking, road biking, trail running, hiking, snowboarding and most recently, splitboarding.</p>
        </div>
      </div>
  )
}