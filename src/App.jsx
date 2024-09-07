import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import List from "./pages/List"
import Single from "./pages/Single"
import New from "./pages/New"
import { useContext } from "react"
import { DarkModeContext } from "./context/darkModeContext"

const App = () => {
  const {darkMode} = useContext(DarkModeContext);

  
  return (
    <div className={darkMode ? "app dark" : "app"}>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/list" element={<List />} />
        <Route path="/single" element={<Single />} />
        <Route path="/new" element={<New />} />
      </Routes>
    </div>
  )
}

export default App