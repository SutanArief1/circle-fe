import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Login from './pages/Login'
import Register from './pages/Register'
import DetailThread from './pages/DetailThread'
import Home from './pages/Home'
import Search from './pages/Search'
import Profile from './pages/Profile'
import Follow from './pages/Follow'
import MyProfile from './pages/MyProfile'

const App = () => {
  return <>
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/follow" element={<Follow />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/detail/:threadId" element={<DetailThread />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App