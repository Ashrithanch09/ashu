import { Route, Routes } from "react-router-dom"
import Layout from "./layout"
import Home from "./components/home"
import DefaultPage from "./components/default"

const App = () => {
   return (
      <Routes>
         <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/:other" element={<DefaultPage />}/>
         </Route>
      </Routes>
   )
}

export default App
