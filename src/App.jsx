import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './component/Navhct'
import Navhct from './component/Navhct'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carosalhct from './component/Carosalhct'
import Certificationhct from './component/Certificationhct'
import Footerhct from './component/Footerhct'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from './component/About'
import Home from './component/Home'
import Contactus from './component/Contactus'
import Cources from './component/Cources'
import MADetails from './component/MADetails'
import AwdDetails from './component/AwdDetails'
import GcloudDetails from './component/GcloudDetails'
import JavaDetails from './component/JavaDetails'
import Pythondetails from './component/Pythondetails'
import Devopsdetails from './component/Devopsdetails'
import Teraformdetails from './component/Teraformdetails'
import Kubernetsdetails from './component/Kubernetsdetails'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navhct/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contactus' element={<Contactus/>}></Route>
      <Route path='/courses' element={<Cources/>}></Route>
      <Route path='/azure' element={<MADetails/>}></Route>
      <Route path='/amazon' element={<AwdDetails/>}></Route>
      <Route path='/google' element={<GcloudDetails/>}></Route>
      <Route path='/java' element={<JavaDetails/>}></Route>
      <Route path='/python' element={<Pythondetails/>}></Route>
      <Route path='/devops' element={<Devopsdetails/>}></Route>
      <Route path='/teraform' element={<Teraformdetails/>}></Route>
      <Route path='/kuber' element={<Kubernetsdetails/>}></Route>



    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
