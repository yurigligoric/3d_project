import './App.css'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
// import NavBar from './components/NavBar'
import Home from './components/Home'
import Project from './components/Project'
import About from './components/About'
import AppLayout from './components/AppLayout'
import Contact from './components/Contact'

function App() {
  
  const router = createBrowserRouter(createRoutesFromElements(
        
      <Route path="/" element={<AppLayout />}>
        
        <Route index element={<Home />}></Route>
        <Route path='/project' element={<Project />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Route>


  ))

  return (
    <div>
      {/* <NavBar /> */}
      {/* <h1 className='text-3xl font-bold underline text-red-800'>Hello World!</h1> */}
      <RouterProvider router={router} />
    </div>
  )
}

export default App
