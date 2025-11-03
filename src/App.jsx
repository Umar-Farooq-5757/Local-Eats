import './App.css'
import Header from './components/Header';
import { useAppContext } from './context/AppContext'

function App() {
  const {user} = useAppContext();
  console.log(user)
  return (
    <>
    <p className='bg-orange-500'></p>
      <Header />
    </>
  )
}

export default App
