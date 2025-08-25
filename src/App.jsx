import './App.css'
import { Layout } from './components/layout/Layout';
import AiChat from './pages/AiChat';
import { MainPage } from './pages/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MyPage } from './pages/MyPage';
import ExhibitionList from "./pages/ExhibitionList";
import ExhibitionDetail from './pages/ExhibitonDetail';
import ExhibitionDetailConfirm from './pages/ExhibitionDetailConfirm';
import Onboarding from './pages/OnBoarding';
import { Login } from './pages/Login';
import RentPage from './pages/RentPage';
import { UserProfile } from './pages/UserProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />}/>
          <Route path='aiChat' element={<AiChat/> }/>
          <Route path='myPage' element={<MyPage/>}></Route>
          <Route path='/exhibitionList' element={<ExhibitionList />} />
          <Route path='/exhibitionDetail/:id' element={<ExhibitionDetail />} />
          <Route path='/exhibitionDetailConfirm' element={<ExhibitionDetailConfirm/>} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path='/login' element={<Login />}></Route>
          <Route path='/rent' element={<RentPage />} />
          <Route path='/userprofile' element={<UserProfile />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;