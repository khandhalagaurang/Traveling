import 'bootstrap/dist/css/bootstrap.min.css';
import './HotelList.css'
import React, { useState } from 'react';
import { Card, Button, Row, Col, Form } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import room1 from '../assets/room1.jpeg'
import room2 from '../assets/room2.jpeg'
import room3 from '../assets/room3.jpeg'
import room4 from '../assets/room4.jpeg'
import room5 from '../assets/room5.jpeg'
import room6 from '../assets/room6.jpeg'
import room7 from '../assets/room7.jpeg'
import room8 from '../assets/room8.jpeg'


const hotels = [
  {
    id: 1,
    name: "Bay Mountain Inn",
    price: "$85 / Per Night",
    image: room1,
    reviews: 0,
  },
  {
    id: 2,
    name: "Cherokee Grand Hotel",
    price: "$95 / Per Night",
    image: room2,
    reviews: 0,
  },
  {
    id: 3,
    name: "Shangri-La Hotel, Washington",
    price: "$105 / Per Night",
    image: room3,
    reviews: 0,
  },
  {
    id: 4,
    name: "Cherokee Inn",
    price: "$36 / Per Night",
    image: room4,
    reviews: 0,
  },
  {
    id: 5,
    name: "Luxury Downtown Apartment",
    price: "$120 / Per Night",
    image: room5,
    reviews: 0,
  },
  {
    id: 6,
    name: "Cozy Countryside Bed",
    price: "$55 / Per Night",
    image: room6,
    reviews: 0,
  },
  {
    id: 7,
    name: "Modern Loft in NYC",
    price: "$200 / Per Night",
    image: room7,
    reviews: 0,
  },
  {
    id: 8,
    name: "Beachside Resort",
    price: "$150 / Per Night",
    image: room8,
    reviews: 0,
  },
];

const HotelList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const displayHotels = hotels.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="container">
      <h1 className="my-4">Hotel Booking</h1>
      <Form className="mb-4">
        <Row>
          <Col>
            <Form.Control type="text" placeholder="Search" />
          </Col>
          <Col>
            <Form.Select>
              <option>Num of Beds</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Select>
              <option>Room Type</option>
              <option>King</option>
              <option>Queen</option>
              <option>Single</option>
            </Form.Select>
          </Col>
        </Row>
      </Form>
      <Row>
        {displayHotels.map((hotel) => (
          <Col md={3} key={hotel.id}>
            <Card className="mb-4">
              <Card.Img variant="top" className='image' src={hotel.image} />
              <Card.Body>
                <Card.Title>{hotel.name}</Card.Title>
                <Card.Text>{hotel.price}</Card.Text>
                <Card.Text>
                  <small>{hotel.reviews} Reviews</small>
                </Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        pageCount={Math.ceil(hotels.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default HotelList
