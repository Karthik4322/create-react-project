import React, { useState } from "react";

const Contact = () => {
  let myCourses = ["1 star", "2 stars", "3 stars", "4 stars", "5 stars"];
  const [user, setUser] = useState({
    fname: "",
    email: "",
    contact: "",
    terms: false,
    courses: "",
    feedback: "",
  });

  const handleInputChange = (event) => {
    const { type, name, value, checked } = event.target;
    setUser({ ...user, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const contactRegex = /^[6-9]\d{9}$/;
    const nameRegex = /^[a-zA-Z ]{3,20}$/;

    // First Name Validation
    if (!user.fname.trim()) {
      alert("First Name is required");
      return;
    }
    if (!nameRegex.test(user.fname.trim())) {
      alert(
        "First Name must contain only letters and be 3-20 characters long"
      );
      return;
    }

    // Email Validation
    if (!user.email.trim()) {
      alert("Email is required");
      return;
    }
    if (!emailRegex.test(user.email.trim())) {
      alert("Please enter a valid email address");
      return;
    }

    // Contact Validation
    if (!user.contact.trim()) {
      alert("Contact number is required");
      return;
    }
    if (!contactRegex.test(user.contact.trim())) {
      alert("Please enter a valid 10-digit Indian contact number");
      return;
    }

    // Select type Validation
    if (user.courses === "") {
      alert("You must rate our services");
      return;
    }

    // Feedback Validation
    if (!user.feedback.trim()) {
      alert("Feedback is required");
      return;
    }

    // Successful submission
    alert(`Form submitted successfully!\n${JSON.stringify(user, null, 2)}`);
  };

  return (
    <div>
      <h3 style="text-align:center; padding :20px;">Feedback Form</h3>
      {/* <form style="padding :30px; justify: center;" onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label class="form-label">First Name:</label>
          <input
            type="text"
            name="fname"
            value={user.fname}
            onChange={handleInputChange}
            placeholder="Enter your first name"
            style={{ marginLeft: "10px", padding: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            style={{ marginLeft: "10px", padding: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Contact Number:</label>
          <input
            type="text"
            name="contact"
            value={user.contact}
            onChange={handleInputChange}
            placeholder="Enter your contact number"
            style={{ marginLeft: "10px", padding: "5px" }}
          />
        </div>
        <div>
          <label>Rate us: </label>
          <select name="courses" value={user.courses} onChange={handleInputChange}>
            <option value="">Ratings</option>
            {myCourses.map((val, index) => (
              <option value={val} key={index}>
                {val}
              </option>
            ))}
          </select>
        </div>
        <div style={{ marginTop: "15px" }}>
          <textarea
            placeholder="Feedback"
            name="feedback"
            value={user.feedback}
            onChange={handleInputChange}
            required
            style={{ width: "100%", height: "80px", padding: "5px" }}
          ></textarea>
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Submit
        </button>
      </form> */}
      <form style={{ padding: "30px", maxWidth: "500px", margin: "0 auto" }} onSubmit={handleSubmit}>
  <div className="mb-3">
    <label className="form-label">First Name:</label>
    <input
      type="text"
      name="fname"
      value={user.fname}
      onChange={handleInputChange}
      placeholder="Enter your first name"
      className="form-control"
      required
    />
  </div>
  <div className="mb-3">
    <label className="form-label">Email:</label>
    <input
      type="email"
      name="email"
      value={user.email}
      onChange={handleInputChange}
      placeholder="Enter your email"
      className="form-control"
      required
    />
  </div>
  <div className="mb-3">
    <label className="form-label">Contact Number:</label>
    <input
      type="text"
      name="contact"
      value={user.contact}
      onChange={handleInputChange}
      placeholder="Enter your contact number"
      className="form-control"
      required
    />
  </div>
  <div className="mb-3">
    <label className="form-label">Rate us:</label>
    <select
      name="courses"
      value={user.courses}
      onChange={handleInputChange}
      className="form-select"
      required
    >
      <option value="">Ratings</option>
      {myCourses.map((val, index) => (
        <option value={val} key={index}>
          {val}
        </option>
      ))}
    </select>
  </div>
  <div className="mb-3">
    <label className="form-label">Feedback:</label>
    <textarea
      name="feedback"
      value={user.feedback}
      onChange={handleInputChange}
      placeholder="Share your feedback"
      className="form-control"
      style={{ height: "100px" }}
      required
    ></textarea>
  </div>
  <button
    type="submit"
    className="btn btn-primary"
    style={{ width: "100%", marginTop: "10px" }}
  >
    Submit
  </button>
</form>

    </div>
  );
};

export default Contact;
