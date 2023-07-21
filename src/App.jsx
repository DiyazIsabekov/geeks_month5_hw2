import { Route, Routes } from 'react-router-dom'
import './App.css'
import PostList from './Components/PostList/PostList'
import Layout from './Layout/Layout'
import CreatePost from './Components/CreatePost/CreatePost'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/posts' element={<PostList />} />
          <Route path='/create' element={<CreatePost />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
