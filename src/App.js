import { useState } from 'react'
import HrApp from '../src/dashboard/HrApp'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='App'>
      <HrApp/>

    </div>
  )
}

export default App
