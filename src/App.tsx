import { Route, Routes, Outlet } from 'react-router-dom'

import './assets/sass/global.scss'

import Menu from './components/Menu'
import PaginaPrincipal from './components/PaginaPrincipal'
import Doacoes from './components/Doacoes'
import Sobre from './components/Sobre'
import Contato from './components/Contato'
import Login from './components/Login'
import Cadastro from './components/Cadastro'

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
        <Route path='sobre' element={<Sobre />} />
        <Route path='doacoes' element={<Doacoes />} />
        <Route path='contato' element={<Contato />} />
        <Route path='login' element={<Login />} />
        <Route path='cadastro' element={<Cadastro />} />
      </Route>

    </Routes>

  )
}

export default App
