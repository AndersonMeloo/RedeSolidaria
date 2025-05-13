import { Route, Routes, Outlet } from 'react-router-dom'

import './assets/sass/global.scss'

import Menu from './components/Menu'
import PaginaPrincipal from './components/PaginaPrincipal'

function Layout() {

  return (
    <>
      <Menu />
      <Outlet />
    </>
  )
}

function App() {

  return (

    <Routes>

      <Route path='/' element={<Layout />}>
        <Route index element={<PaginaPrincipal />} />
      </Route>
    </Routes>

  )
}

export default App
