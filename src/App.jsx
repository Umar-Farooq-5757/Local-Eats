import './App.css'
import { useAppContext } from './context/AppContext'

function App() {
  const {user} = useAppContext();
  console.log(user)
  return (
    <>
      home page
    </>
  )
}

export default App
