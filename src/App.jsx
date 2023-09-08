import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import UserCreate from './components/UserCreate'
import UserDetails from './components/UserDetails'
import UserEdit from './components/UserEdit'
import UserListing from './components/UserListing'

function App() {
  return (
    <div className='App'>
      <h1>User - Management Application</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserListing/>}/>
        <Route path='/user/create' element={<UserCreate />} />
        <Route path='/user/detail/:userid' element={<UserDetails/>}/>
        <Route path='/user/edit/:userid' element={<UserEdit/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  ) 
}

export default App
