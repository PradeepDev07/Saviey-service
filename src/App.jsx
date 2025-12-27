
import './App.css'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import RewardsPage from './pages/RewardsPage'


function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<RewardsPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
