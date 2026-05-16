import { useRoutes } from 'react-router-dom'
import Landing from './pages/Landing'
import ShowCreators from './pages/ShowCreators'
import ViewCreator from './pages/ViewCreator'
import AddCreator from './pages/AddCreator'
import EditCreator from './pages/EditCreator'
import './App.css'

export default function App() {
  const element = useRoutes([
    { path: '/', element: <Landing /> },
    { path: '/creators', element: <ShowCreators /> },
    { path: '/new', element: <AddCreator /> },
    { path: '/creator/:id', element: <ViewCreator /> },
    { path: '/edit/:id', element: <EditCreator /> },
  ])
  return element
}
