import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
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

  const handleSubmit = async (event) => {
    event.preventDefault();  
    // Clear the form input fields by resetting the formData state to its initial values
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  

  const handleNew = async () => {
    const CollectionRef = collection(db, "contacts")
    const payload = {
      name: formData.name,
      email: formData.email,
      message: formData.message
    }
    await addDoc(CollectionRef, payload);
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
