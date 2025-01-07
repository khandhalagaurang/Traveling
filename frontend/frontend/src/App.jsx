import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navabar from './components/Navabar';
import BookingForm from './components/BookingForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import HotelList from './components/HotelList';
import FlightList from './components/FlightList';
import Login from './Pages/Login';
import Register from './Pages/Register';


function App() {

  return (
    <>
    <Navabar/>
    <Routes>
      <Route path='/Login' element={<Login/>}>Login</Route>
      <Route path='/Register' element={<Register/>}>Register</Route>
      <Route path='/' element={<BookingForm/>}>BookingForm</Route>
      <Route path='/HotelList' element={<HotelList/>}>HotelList</Route>
      <Route path='/FlightList' element={<FlightList/>}>FlightList</Route>
    </Routes>
    </>
  )
}

export default App
