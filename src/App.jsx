import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutOne from './assets/Layout/LayoutOne'
import Home from './assets/Pages/Home'
import About from './assets/Pages/About'
import Contact from './assets/Pages/Contact'
import Projects from './assets/Pages/Projects'
import FAQ from './assets/Pages/FAQ'
import Blog from './assets/Pages/Blog'

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LayoutOne/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/faq' element={<FAQ/>}/>
          <Route path='/blog' element={<Blog/>}/>
        </Route>
      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={route}/>
    </>
  )
}

export default App
