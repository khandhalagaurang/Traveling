import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navabar from './components/Navabar';
import BookingForm from './components/BookingForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import HotelList from './components/HotelList';
import FlightList from './components/FlightList';
import Login from './LoginPopup/LoginPopup'

function App() {

  return (
    <>
      <Navabar />
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/' element={<BookingForm />} />
        <Route path='/HotelList' element={<HotelList />} />
        <Route path='/FlightList' element={<FlightList />} />
      </Routes>
    </>
  )
}

export default App
