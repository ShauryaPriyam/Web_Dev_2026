import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Layout from './Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import EditPage from './pages/EditPage.jsx'
import QuestionPage from './pages/QuestionPage.jsx'
import PostPage from './pages/PostPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<HomePage />} />
      <Route path='profile/:id/' element={<ProfilePage />} />
      <Route path='profile/:id/edit' element={<EditPage/>} />
      <Route path='post/' element={<PostPage/>}/>
      <Route path='post/:id' element={<QuestionPage/>}/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
