import React, { useState } from 'react';
import { setDoc, doc } from 'firebase/firestore';
import db from './firebase';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any necessary actions with the form data, such as sending it to a server or displaying it on the page
    console.log(formData);
  };

  const handleNew = async () => {
    const docRef = doc(db, "contacts", "001");
    const payload = { name: "test", email:"test@gmail.com", message:"you rock!"}
    await setDoc(docRef, payload);
  }

  return (
    <div className="contact">
      <h1>Contact Me!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>

        <button type="submit" onClick={handleNew}>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
