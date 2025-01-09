import { Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navabar from './components/Navabar';
import BookingForm from '../src/pages/BookingFrom/BookingForm';
import HotelList from '../src/pages/HotelBooking/HotelBooking';
import FlightList from '../src/pages/FlightBooking/FlightBooking';
import Login from '../src/pages/LoginPopup/LoginPopup'

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
