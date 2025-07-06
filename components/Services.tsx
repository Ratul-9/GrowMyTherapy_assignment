'use client';
import ServiceCard from "./Card";
export default function Services() {
  return (
    <section
      style={{
        maxWidth: '1000px',
        margin: '40px auto',
        padding: '0 20px',
        textAlign: 'center',
      }}
    >
      <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#007acc' }}>
        Our Awesome Services
      </h2>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap',
        }}
      >
        <ServiceCard
          imageSrc="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80"
          title="Service One"
          description="Efficient, reliable, and with precision — just like German engineering."
        />
        <ServiceCard
          imageSrc="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80"
          title="Service Two"
          description="Quality and innovation wrapped into one great package."
        />
        <ServiceCard
          imageSrc="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80"
          title="Service Three"
          description="Future-proof solutions that keep you ahead of the curve."
        />
      </div>
    </section>
  );
}
