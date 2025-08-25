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
import MessagePage from './pages/MessagePage';
import { SearchExhibitions } from './pages/SearchExhibitions';
import MyExhibitionList from './pages/MyExhibitionList';
import { UserProfile } from './pages/UserProfile';
import { useState } from 'react';

function App() {

  const IsUserInfo = localStorage.getItem("userId");
  console.log(IsUserInfo);



  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />}/>
          {IsUserInfo ? (<>
          <Route path='aiChat' element={<AiChat/> }/>
          <Route path='myPage' element={<MyPage/>}></Route>
          <Route path='/exhibitionList' element={<ExhibitionList />} />
          <Route path='/exhibitionDetail/:id' element={<ExhibitionDetail />} />
          <Route path='/exhibitionDetailConfirm' element={<ExhibitionDetailConfirm/>} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path='/login' element={<Login />}></Route>
          <Route path='/rent' element={<RentPage />} />
          <Route path='/userprofile' element={<UserProfile />}></Route>
          <Route path='/message' element={<MessagePage />} />
          <Route path='/searchExhibitions' element={<SearchExhibitions/>}></Route>
          <Route path='/myexhibition' element={<MyExhibitionList />} />
          </>) : (
            <Route path='/login' element={<Login />}></Route>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;