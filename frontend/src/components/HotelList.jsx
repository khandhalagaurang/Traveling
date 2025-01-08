import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col, Pagination, Form } from "react-bootstrap";
import room1 from '../assets/room1.jpeg'
import room2 from '../assets/room2.jpeg'
import room3 from '../assets/room3.jpeg'
import room4 from '../assets/room4.jpeg'
import room5 from '../assets/room5.jpeg'
import room6 from '../assets/room6.jpeg'
import room7 from '../assets/room7.jpeg'
import room8 from '../assets/room8.jpeg'
import './HotelList.css'

const itemsPerPage = 4;

const HotelCards = () => {
  const [hotelData, setHotelData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [numBeds, setNumBeds] = useState("");
  const [roomType, setRoomType] = useState("");

  useEffect(() => {
    const dynamicData = [
      { id: 1, title: "Bay Mountain Inn", price: "$85 / Per Night", reviews: "0 Reviews", image: room1, beds: 1, type: "King" },
      { id: 2, title: "Cherokee Grand Hotel", price: "$95 / Per Night", reviews: "0 Reviews", image: room2, beds: 2, type: "Queen" },
      { id: 3, title: "Shangri-La Hotel, Washington", price: "$105 / Per Night", reviews: "0 Reviews", image: room3, beds: 1, type: "Single" },
      { id: 4, title: "Cherokee Inn", price: "$36 / Per Night", reviews: "0 Reviews", image: room4, beds: 3, type: "King" },
      { id: 5, title: "Lakeside Resort", price: "$75 / Per Night", reviews: "0 Reviews", image: room5, beds: 2, type: "Queen" },
      { id: 6, title: "Mountain View Hotel", price: "$95 / Per Night", reviews: "0 Reviews", image: room6, beds: 1, type: "Single" },
      { id: 7, title: "Ocean Breeze Inn", price: "$120 / Per Night", reviews: "0 Reviews", image: room7, beds: 2, type: "King" },
      { id: 8, title: "Hilltop Retreat", price: "$60 / Per Night", reviews: "0 Reviews", image: room8, beds: 3, type: "Queen" },
    ];

    setHotelData(dynamicData);
  }, []);

  useEffect(() => {
    const filtered = hotelData.filter(hotel => {
      const matchesSearch = hotel.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBeds = numBeds ? hotel.beds === parseInt(numBeds) : true;
      const matchesType = roomType ? hotel.type === roomType : true;
      return matchesSearch && matchesBeds && matchesType;
    });
    setFilteredData(filtered);
    setCurrentPage(1);  // Reset to first page when filtering
  }, [searchQuery, numBeds, roomType, hotelData]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container">
      <h1 className="my-4">Hotel Booking</h1>
      <Form className="mb-4">
        <Row>
          <Col>
            <Form.Control 
              type="text" 
              placeholder="Search" 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)} 
            />
          </Col>
          <Col>
            <Form.Select value={numBeds} onChange={(e) => setNumBeds(e.target.value)}>
              <option>Num of Beds</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
              <option>Room Type</option>
              <option value="King">King</option>
              <option value="Queen">Queen</option>
              <option value="Single">Single</option>
            </Form.Select>
          </Col>
        </Row>
      </Form>
      <div className="container mt-4">
        <Row>
          {currentItems.map((hotel) => (
            <Col lg={3} md={6} sm={12} className="mb-4" key={hotel.id}>
              <Card>
                <Card.Img src={hotel.image} alt={hotel.title} className="image" />
                <Card.Body>
                  <Card.Title>{hotel.title}</Card.Title>
                  <Card.Text>{hotel.price}</Card.Text>
                  <Card.Text>{hotel.reviews}</Card.Text>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Pagination className="justify-content-center">
          <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </Pagination.Prev>
          {[...Array(totalPages).keys()].map((page) => (
            <Pagination.Item key={page + 1} active={page + 1 === currentPage} onClick={() => handlePageChange(page + 1)}>
              {page + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            Next
          </Pagination.Next>
        </Pagination>
      </div>
    </div>
  );
};

export default HotelCards;
