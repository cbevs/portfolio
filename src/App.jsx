import { SplashScreen } from "./components/splashLogo/SplashScreen.jsx"
import { MainScreen } from "./components/landingPage/MainScreen.jsx"

const App = () => {

  return (
    <div className="bg">
      <SplashScreen />
      <MainScreen />
    </div>
  )
}

export default App