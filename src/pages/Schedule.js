import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "react-calendar/dist/Calendar.css";
// import "./Schedule.css"; // Add custom styles

const Schedule = () => {
  const APP_URL = process.env.REACT_APP_PRODUCTION_URL;
  const [date, setDate] = useState(new Date());
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    calendarType: "google",
  });

  useEffect(() => {
    axios
      .get(`${APP_URL}/api/availability/google`, {
        params: { date: date.toISOString().split("T")[0] },
        headers: {
          "Access-Control-Allow-Origin": "www.qualitysites.pro",
        },
      })
      .then((res) => {
        setAvailableSlots(res.data.availableSlots);
      });
  }, [date, APP_URL]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleBooking = async (e) => {
  //   e.preventDefault();
  //   if (!selectedTime) {
  //     alert("Please select a time slot.");
  //     return;
  //   }
  //   const bookingData = { ...formData, date, time: selectedTime };

  //   try {
  //     await axios.post(`${APP_URL}/api/schedule`, bookingData);
  //     alert(`Appointment booked for ${date.toDateString()} at ${selectedTime}`);
  //     setFormData({
  //       firstName: "",
  //       lastName: "",
  //       phone: "",
  //       email: "",
  //       message: "",
  //       calendarType: "google",
  //     });
  //   } catch (error) {
  //     alert("Failed to book appointment.");
  //     console.error(error);
  //   }
  // };
  const handleBooking = async (e) => {
    e.preventDefault();
    if (!selectedTime) {
      alert("Please select a time slot.");
      return;
    }

    const formattedDate = date.toISOString().split("T")[0]; // Convert Date object to YYYY-MM-DD

    const bookingData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
      date: formattedDate,
      time: selectedTime,
      calendarType: formData.calendarType, // google or microsoft
    };

    try {
      await axios.post(`${APP_URL}/api/schedule`, bookingData);
      alert(`Appointment booked for ${formattedDate} at ${selectedTime}`);
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
        calendarType: "google",
      });
    } catch (error) {
      alert("Failed to book appointment.");
      console.error(error);
    }
  };

  return (
    <Container
      lg={12}
      md={6}
      style={{ paddingTop: "100px", paddingBottom: "50px" }}
    >
      <h2 className="text-center">Schedule an Appointment</h2>
      <Row>
        <Col lg={7} md={6} className="text-center">
          <h4>Available Times</h4>
          {availableSlots.map((time) => (
            <Button
              key={time}
              className="m-2 available-time"
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </Button>
          ))}
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={6} className="text-center">
          <Calendar onChange={setDate} value={date} />
        </Col>
      </Row>

      <Row>
        <Col lg={12} md={6} className="text-center">
          <Form onSubmit={handleBooking} className="booking-form">
            <Form.Control
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <Form.Control
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Form.Control
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <Form.Control
              as="textarea"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
            />
            <Button type="submit">Confirm Appointment</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Schedule;
