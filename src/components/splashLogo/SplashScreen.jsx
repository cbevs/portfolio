import portfolioLogo from '../../assets/portfolioLogo.png'
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
        <img src={portfolioLogo} className={`splash-logo ${hide}`} />
        <p className={`greeting-text text-5xl font-extralight ${hide}`}>Hiya!</p>
    </>
  )
}