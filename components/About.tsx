'use client';

export default function About() {
  return (
    <section
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '40px 20px',
        maxWidth: '900px',
        margin: '0 auto',
        gap: '50px',
      }}
    >
      <div style={{ flex: 1, paddingRight: '50px' }}> {/* Increased from 20px to 50px */}
        <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>About Us</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#444' }}>
          Here you can put some captivating text about your project, your vision, or your team.
          Make it engaging, and don’t forget to add that German efficiency flair! Keep your users
          excited to learn more.
        </p>
      </div>

      <div style={{ flex: 1 }}>
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
          alt="About Image"
          style={{ width: '100%', borderRadius: '10px', objectFit: 'cover', maxHeight: '300px' }}
        />
      </div>
    </section>
  );
}
