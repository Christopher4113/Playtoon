
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from './pages/Main.tsx';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/main" />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
