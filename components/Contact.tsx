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
    console.log('Form submitted:', formData);
  }

  const inputStyle = {
          width: '100%',
          padding: '12px',
          marginBottom: '18px',
          borderRadius: '8px',
          border: '1px solid #D5DCDC',
          fontSize: '1rem',
          backgroundColor: '#fff',
          color: '#2D3E50'
        };

  return (
    <section
      style={{
        maxWidth: 650,
        margin: '60px auto',
        padding: '40px 30px',
        fontFamily: 'Georgia, serif',
        backgroundColor: '#F9FAF8',
        borderRadius: '12px',
        boxShadow: '0 6px 24px rgba(0, 0, 0, 0.05)',
      }}
    >
      <h2 style={{ fontSize: '2rem', marginBottom: 10, color: '#2D3E50' }}>
        Get in Touch
      </h2>
      <p style={{ marginBottom: 25, color: '#4A5B6A', fontSize: '1.05rem', lineHeight: '1.6' }}>
        I&#39;d love to hear from you. Whether you have questions, want to schedule a session, or just want to reach out — this is a safe place to begin.
      </p>

      <form onSubmit={handleSubmit}>
        

        
        <label htmlFor="name" style={{ fontWeight: 'bold', display: 'block', marginBottom: 6 }}>Name</label>
        <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required style={inputStyle} />
        <label htmlFor="email" style={{ fontWeight: 'bold', display: 'block', marginBottom: 6 }}>Email</label>
        <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required style={inputStyle} />
        <label htmlFor="phone" style={{ fontWeight: 'bold', display: 'block', marginBottom: 6 }}>Phone</label>
        <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} style={inputStyle} />

        <label htmlFor="message" style={{ fontWeight: 'bold', display: 'block', marginBottom: 6 }}>Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          style={{ ...inputStyle, resize: 'vertical' }}
        ></textarea>

      
        <label htmlFor="contactTime" style={{ fontWeight: 'bold', display: 'block', marginBottom: 6 }}>Preferred Contact Time</label>
        <select
          id="contactTime"
          name="contactTime"
          value={formData.contactTime}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Select a time</option>
          <option value="morning">Morning (8am - 12pm)</option>
          <option value="afternoon">Afternoon (12pm - 5pm)</option>
          <option value="evening">Evening (5pm - 9pm)</option>
        </select>

      
        <fieldset style={{ marginBottom: 20, border: 'none' }}>
          <legend style={{ fontWeight: 'bold', marginBottom: 10 }}>Preferred Contact Method</legend>

          {['email', 'phone', 'sms'].map(method => (
            <label key={method} style={{ display: 'block', marginBottom: 10, color: '#4A5B6A' }}>
              <input
                type="checkbox"
                name={method}
                checked={formData.contactMethods[method as keyof ContactMethods]}
                onChange={handleChange}
                style={{ marginRight: 8 }}
              />
              {method.toUpperCase()}
            </label>
          ))}
        </fieldset>

        <button
          type="submit"
          style={{
            backgroundColor: '#6BA6A6',
            color: '#fff',
            padding: '12px 30px',
            border: 'none',
            borderRadius: 8,
            cursor: 'pointer',
            fontSize: '1rem',
            boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#5a9292')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#6BA6A6')}
        >
          Submit
        </button>
      </form>
    </section>
  );
}
