
import {BrowserRouter,Route,Routes} from "react-router-dom"

import "./components/signIned/styles/tailwind.css"

import Signup from "./Pages/Signup"
import Signin from "./Pages/Signin"
import { Dashboard } from  "./Pages/Dashboard"
import { SendMoney } from './components/signIned/sendMoney'


function App() {
   return (
    <>
    <BrowserRouter>
    <Routes>

      <Route path="/Signup" element={<Signup></Signup>}></Route>
      <Route path="/Signin" element={<Signin></Signin>}></Route>
      <Route path="/send" element={<SendMoney></SendMoney>}></Route>
      <Route path="/Dashboard" element={<Dashboard></Dashboard>}></Route>



    </Routes>
</BrowserRouter>
     
    </>
  )
}

export default App
