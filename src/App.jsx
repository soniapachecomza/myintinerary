import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayout from './layouts/MainLayout';
import './App.css'
import Home from './pages/home/home';
import Cities from './pages/cities/cities';
import Components404 from './pages/Components404/components404.jsx';
import CitiDetail from './pages/citiDetail/citiDetail';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Link as Anchor, NavLink } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children:[
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cities',
        element: <Cities/>,
      },
      {
        path: '/cities/:id',
        element: <CitiDetail/>,
      },  
      {
        path: '*',
        element: <Components404 />
      }

    ] 
  }
])


function App() {
    return (
    <>          
      <RouterProvider router={router} />
    </>
  )
}
export default App
