import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const AddContact = ({ addContact }) => {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "male",
    profession: "",
    image: "",
    dateOfBirth: new Date(),
    bio: "",
  });

  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    profession: "",
    image: "",
    dateOfBirth: new Date(),
    bio: "",
  });

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
    setError({
      ...error,
      [e.target.name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // checking validation
    const { firstName, lastName, email, profession, image, dateOfBirth, bio } =
      contact;

    const inputErrors = {
      firstName: "",
      lastName: "",
      email: "",
      profession: "",
      image: "",
      dateOfBirth: "",
      bio: "",
    };

    let isError = false;

    if (firstName === "") {
      isError = true;
      inputErrors.firstName = "First name is required";
    }

    if (lastName === "") {
      isError = true;
      inputErrors.lastName = "Last name is required";
    }

    if (email === "") {
      isError = true;
      inputErrors.email = "Email is required";
    }

    if (profession === "") {
      isError = true;
      inputErrors.profession = "Profession is required";
    }

    if (image === "") {
      isError = true;
      inputErrors.image = "Image is required";
    }

    if (dateOfBirth === "") {
      isError = true;
      inputErrors.dateOfBirth = "Date of Birth is required";
    }

    if (bio === "") {
      isError = true;
      inputErrors.bio = "Bio is required";
    }

    setError(inputErrors);
    if (isError) return;

    // submission form
    addContact(contact);
  };

  const {
    firstName,
    lastName,
    email,
    gender,
    profession,
    image,
    dateOfBirth,
    bio,
  } = contact;

  return (
    <div className="mt-5">
      <h2>Add Contact</h2>
      <Form className="mt-5" onSubmit={handleSubmit} noValidate>
        <Row>
          <Col lg="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                className="shadow-none"
                type="text"
                onChange={handleChange}
                name="firstName"
                value={firstName}
                placeholder="Enter your first name"
              />
              <span className="text-danger">{error.firstName}</span>
            </Form.Group>
          </Col>

          <Col lg="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                className="shadow-none"
                type="text"
                onChange={handleChange}
                name="lastName"
                value={lastName}
                placeholder="Enter your last name"
              />
              <span className="text-danger">{error.lastName}</span>
            </Form.Group>
          </Col>

          <Col lg="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                className="shadow-none"
                type="email"
                onChange={handleChange}
                name="email"
                value={email}
                placeholder="Enter your email"
              />
              <span className="text-danger">{error.email}</span>
            </Form.Group>
          </Col>

          <Col lg="6">
            <Form.Label>Select Gender</Form.Label>
            <div className="check-box">
              <Form.Check
                className="shadow-none"
                inline
                name="gender"
                type="radio"
                onChange={handleChange}
                value="male"
                checked={gender === "male"}
                id="male"
              />
              <Form.Label htmlFor="male">Male</Form.Label>

              <Form.Check
                className="ms-4 shadow-none"
                inline
                name="gender"
                type="radio"
                onChange={handleChange}
                value="female"
                checked={gender === "female"}
                id="female"
              />
              <Form.Label htmlFor="female">Female</Form.Label>
            </div>
          </Col>

          <Col lg="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Profile picture</Form.Label>
              <Form.Control
                className="shadow-none"
                type="text"
                onChange={handleChange}
                name="image"
                value={image}
                placeholder="Link of your profile image"
              />
              <span className="text-danger">{error.image}</span>
            </Form.Group>
          </Col>

          <Col lg="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Profession</Form.Label>
              <Form.Control
                className="shadow-none"
                type="text"
                onChange={handleChange}
                name="profession"
                value={profession}
                placeholder="Enter your profession"
              />
              <span className="text-danger">{error.profession}</span>
            </Form.Group>
          </Col>

          <Col lg="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                className="shadow-none"
                type="date"
                onChange={handleChange}
                name="dateOfBirth"
                value={dateOfBirth}
                placeholder="Select your date of Birth"
              />
              {/* <span className="text-danger">{error.dateOfBirth}</span> */}
            </Form.Group>
          </Col>

          <Col lg="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Bio</Form.Label>
              <Form.Control
                as="textarea"
                onChange={handleChange}
                name="bio"
                value={bio}
                placeholder="Enter your Bio"
              />
              <span className="text-danger">{error.bio}</span>
            </Form.Group>
          </Col>
        </Row>
        <Button onClick={addContact} variant="primary" type="submit">
          Add Contact
        </Button>
      </Form>
    </div>
  );
};

export default AddContact;
