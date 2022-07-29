import './App.css'
import Navbar from './layout/Navbar'
import SideBar from './layout/SideBar'
import Index from './layout/dashboard/Index'

function App() {
  return (
    <div className='App container mx-auto flex justify-between'>
      <SideBar />
      <div className='container w-4/6 px-50'>
        <Navbar />
        <Index />
      </div>
    </div>
  )
}

export default App
