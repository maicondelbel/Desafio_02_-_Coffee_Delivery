import { Outlet } from 'react-router-dom'
import { Navbar } from './../components/Navbar/index'

export function DefaultLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
