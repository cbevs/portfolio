import personalPic from '../../assets/personalPic.png'

export const LeftPartition = () => {
 return (
  <div className="h-full w-full lg:w-1/2 text-center p-4 overflow-auto">
    <h1 className="text-4xl p-4 color-green">Hi there!</h1>
      <div className="flex flex-col pl-20 pr-20 2xl:flex-row lg:p-0 items-center">
        <img src={personalPic} className="personal-img " />
        <div className="color-red dark:text-white text-left pl-4">
        <p>Thanks for checking my site out! I am an aspiring web developer who is currently based in Salt Lake City, Utah. I have experience in Javascript, HTML, and CSS, and am constantly working to up my skills.</p>
        <p>When I’m not working on coding projects, you can find me playing in the great outdoors. I love rock climbing, mountain biking, road biking, trail running, hiking, snowboarding and most recently, splitboarding.</p>
        <p className="text-4xl color-green text-center 2xl:text-left">Contact</p>
        <p className="text-center 2xl:text-left">cnbevevino@gmail.com</p>
        </div>
      </div>
   </div>
 ) 
}