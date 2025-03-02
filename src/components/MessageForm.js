import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const MessageForm = () => {
  const APP_URL = process.env.REACT_APP_PRODUCTION_URL;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    optIn: true,
  });
  const [status, setStatus] = useState({ submitted: false, error: "" });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitted: false, error: "" });

    try {
      const response = await fetch(`${APP_URL}/api/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus({ submitted: true, error: "" });
        setFormData({ name: "", email: "", message: "", optIn: true });
      } else {
        const errData = await response.json();
        setStatus({
          submitted: false,
          error: errData.error || "Submission failed.",
        });
      }
    } catch (error) {
      setStatus({ submitted: false, error: error.message });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {status.submitted && (
        <Alert variant="success">Message sent successfully!</Alert>
      )}
      {status.error && <Alert variant="danger">{status.error}</Alert>}
      <Form.Group controlId="formName" className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="formEmail" className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="formMessage" className="mb-3">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          required
        />
      </Form.Group>
      <Form.Group controlId="formOptIn" className="mb-3">
        <Form.Check
          type="checkbox"
          name="optIn"
          label="I agree to receive messages via Twilio"
          checked={formData.optIn}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Send Message
      </Button>
    </Form>
  );
};

export default MessageForm;
