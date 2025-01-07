import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    destination: '',
    checkInDate: '',
    checkOutDate: '',
    travelers: 1,
    flightNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Booking submitted successfully!');
  };

  return (
    <Form onSubmit={handleSubmit} className="p-4 border rounded">
      <h2 className="mb-4">Hotel and Flight Booking</h2>
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="destination">
            <Form.Label>Destination</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group controlId="checkInDate">
            <Form.Label>Check-In Date</Form.Label>
            <Form.Control
              type="date"
              name="checkInDate"
              value={formData.checkInDate}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group controlId="checkOutDate">
            <Form.Label>Check-Out Date</Form.Label>
            <Form.Control
              type="date"
              name="checkOutDate"
              value={formData.checkOutDate}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="travelers">
            <Form.Label>Number of Travelers</Form.Label>
            <Form.Control
              type="number"
              name="travelers"
              value={formData.travelers}
              onChange={handleChange}
              min="1"
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="flightNumber">
            <Form.Label>Flight Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter flight number (optional)"
              name="flightNumber"
              value={formData.flightNumber}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Button variant="primary" type="submit">
        Submit Booking
      </Button>
    </Form>
  );
};

export default BookingForm;
