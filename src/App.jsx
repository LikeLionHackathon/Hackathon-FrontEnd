import './App.css'
import { Layout } from './components/layout/Layout';
import AiChat from './pages/AiChat';
import { MainPage } from './pages/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ExhibitionList from "./pages/ExhibitionList";
import ExhibitionDetail from './pages/ExhibitonDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />}/>
          <Route path='aiChat' element={<AiChat/> }/>
          <Route path='/exhibitionList' element={<ExhibitionList />} />
          <Route path='/exhibitionDetail' element={<ExhibitionDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;