import { useState, useEffect } from 'react'

export const SplashScreen = () => {

  const [hide, setHide] = useState("")

  useEffect(() => {
    const setHidden = setTimeout(() => {
      setHide("hidden")
    }, 2000)

    return () => clearTimeout(setHidden)
  }, [])


  return (
    <>
        <div className={`outer-circle ${hide}`}>
          
        </div>
        <p className={`greeting-text text-5xl font-extralight ${hide}`}>Hiya!</p>
    </>
  )
}