import personalPic from '../assets/personalPic.png'

export const MainCard = () => {

  return (
      <div className="w-3/5 h-3/5 flex justify-evenly flex-col items-center md:flex-row m-auto">
        <img src={personalPic} className="w-full h-full object-scale-down" />
        <div className="h-auto w-auto p-5">
          <p>Thanks for visiting my site! My name is Chris and I have done a little bit of everything tech-wise, from general computer science to software development to data analysis. </p>
          <p className='mt-2'>I hold an Associate's degree in Computer Science and a Bachelor's degree in Data Analysis. Over the years, I’ve received a variety of industry certifications, including: CompTIA A+, Network+, Data+, Project+, and a Udacity Nanodegree in Data Analysis. Currently, I work at Northeast IS as a Cloud Systems Technician.</p>
          <p className="mt-2">When I’m not working on projects, you can find me playing in the great outdoors surrounding Salt Lake City, Utah. Some of my hobbies include: rock climbing, mountain biking, road biking, trail running, hiking, snowboarding, splitboarding, and disc golf.</p>
        </div>
      </div>
  )
}