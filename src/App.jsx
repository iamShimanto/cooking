import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import LayoutOne from './Layout/LayoutOne'
import Home from './Pages/Home/Home'
import Blog from './Pages/Blog/Blog'

function App() {
  const MyRoute  = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LayoutOne />} />
        <Route index element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Route>
    )
  )

  return (
    <>
      





      <RouterProvider router={MyRoute}/>
    </>
  )
}

export default App
