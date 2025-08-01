import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Body from './components/Body'
import Feed from './components/Feed';
import Login from './components/login';
import Profile from './components/Profile';
import {Provider} from 'react-redux';
import appStore from './utils/appStore';
function App() {

  return (
    <>
    <Provider store = {appStore}>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path = '/' element = {<Body/>}>
            <Route path = '/feed' element = {<Feed/>}></Route>
            <Route path = '/login' element = {<Login/>}> </Route>
            <Route path = '/Profile' element ={< Profile/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
    
    </>
  )
}

export default App
