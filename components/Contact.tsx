'use client';

import React, { useState } from 'react';

interface ContactMethods {
  email: boolean;
  phone: boolean;
  sms: boolean;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  contactTime: string;
  contactMethods: ContactMethods;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    contactTime: '',
    contactMethods: {
      email: false,
      phone: false,
      sms: false,
    },
  });

  // Narrowing event target for checked property
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const target = e.target;

    if (target instanceof HTMLInputElement && target.type === 'checkbox') {
      const { name, checked } = target;
      setFormData(prev => ({
        ...prev,
        contactMethods: {
          ...prev.contactMethods,
          [name]: checked,
        },
      }));
    } else {
      const { name, value } = target;
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Do your submission logic here
    console.log('Form submitted:', formData);
  }

  return (
    <section
      style={{
        maxWidth: 600,
        margin: '40px auto',
        padding: 20,
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2 style={{ fontSize: '2rem', marginBottom: 10, color: '#007acc' }}>Contact Us</h2>
      <p style={{ marginBottom: 20, color: '#555' }}>
        Have questions or want to work together? Fill out the form below and we will get back to you shortly.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <label style={{ display: 'block', marginBottom: 6, fontWeight: 'bold' }} htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: 10,
            marginBottom: 15,
            borderRadius: 5,
            border: '1px solid #ccc',
          }}
        />

        {/* Email */}
        <label style={{ display: 'block', marginBottom: 6, fontWeight: 'bold' }} htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: 10,
            marginBottom: 15,
            borderRadius: 5,
            border: '1px solid #ccc',
          }}
        />

        {/* Phone */}
        <label style={{ display: 'block', marginBottom: 6, fontWeight: 'bold' }} htmlFor="phone">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: 10,
            marginBottom: 15,
            borderRadius: 5,
            border: '1px solid #ccc',
          }}
        />

        {/* Message */}
        <label style={{ display: 'block', marginBottom: 6, fontWeight: 'bold' }} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4} 
          value={formData.message}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: 10,
            marginBottom: 15,
            borderRadius: 5,
            border: '1px solid #ccc',
            resize: 'vertical',
          }}
        ></textarea>

        {/* Preferred Contact Time */}
        <label style={{ display: 'block', marginBottom: 6, fontWeight: 'bold' }} htmlFor="contactTime">
          Preferred Contact Time
        </label>
        <select
          id="contactTime"
          name="contactTime"
          value={formData.contactTime}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: 10,
            marginBottom: 20,
            borderRadius: 5,
            border: '1px solid #ccc',
          }}
        >
          <option value="">Select a time</option>
          <option value="morning">Morning (8am - 12pm)</option>
          <option value="afternoon">Afternoon (12pm - 5pm)</option>
          <option value="evening">Evening (5pm - 9pm)</option>
        </select>

        {/* Preferred Contact Method */}
        <fieldset style={{ marginBottom: 20 }}>
          <legend style={{ fontWeight: 'bold', marginBottom: 8 }}>Preferred Contact Method</legend>

          <label style={{ display: 'block', marginBottom: 6 }}>
            <input
              type="checkbox"
              name="email"
              checked={formData.contactMethods.email}
              onChange={handleChange}
              style={{ marginRight: 8 }}
            />
            Email
          </label>

          <label style={{ display: 'block', marginBottom: 6 }}>
            <input
              type="checkbox"
              name="phone"
              checked={formData.contactMethods.phone}
              onChange={handleChange}
              style={{ marginRight: 8 }}
            />
            Phone
          </label>

          <label style={{ display: 'block', marginBottom: 6 }}>
            <input
              type="checkbox"
              name="sms"
              checked={formData.contactMethods.sms}
              onChange={handleChange}
              style={{ marginRight: 8 }}
            />
            SMS
          </label>
        </fieldset>

        <button
          type="submit"
          style={{
            backgroundColor: '#007acc',
            color: '#fff',
            padding: '12px 25px',
            border: 'none',
            borderRadius: 5,
            cursor: 'pointer',
            fontSize: '1rem',
          }}
        >
          Submit
        </button>
      </form>
    </section>
  );
}
