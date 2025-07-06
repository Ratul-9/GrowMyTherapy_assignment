'use client';

export default function About() {
  return (
    <section
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '60px 30px',
        maxWidth: '1100px',
        margin: '0 auto',
        gap: '50px',
        fontFamily: `'Lora', 'Georgia', serif`,
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
      }}
    >
      <div style={{ flex: 1, paddingRight: '40px' }}>
        <h2
          style={{
            fontSize: '2.4rem',
            marginBottom: '14px',
            color: '#1F2A38',
            fontWeight: 600,
            letterSpacing: '0.3px',
          }}
        >
          Meet Dr. Serena Blake
        </h2>

        <h3
          style={{
            marginTop: '0',
            marginBottom: '22px',
            fontSize: '1.1rem',
            fontWeight: 500,
            color: '#3A4C5C',
            letterSpacing: '0.3px',
          }}
        >
          PsyD · Licensed Clinical Psychologist · EMDR Certified
        </h3>

        <p
          style={{
            fontSize: '1.08rem',
            lineHeight: '1.75',
            color: '#4A5B6A',
            marginBottom: '28px',
          }}
        >
          With over eight years of clinical experience and more than 500 client sessions, Dr. Serena Blake specializes in supporting adults facing anxiety, trauma, and relationship challenges. Her integrative approach blends cognitive-behavioral therapy, EMDR, and mindfulness, all delivered with warmth and empathy.  
        </p>

        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: '1.75',
            color: '#4A5B6A',
            marginBottom: '30px',
          }}
        >
          Sessions are available both in-person at her serene Maplewood Drive office, and virtually via secure Zoom video. Wherever you are on your path, Dr. Blake creates a grounded, supportive environment to help you heal and grow.
        </p>

    
        <div
          style={{
            backgroundColor: '#EDF3F5',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)',
          }}
        >
          <h4
            style={{
              fontSize: '1.2rem',
              marginBottom: '10px',
              color: '#2D3E50',
              fontWeight: 600,
            }}
          >
            Office Hours
          </h4>
          <p
            style={{
              margin: 0,
              fontSize: '1rem',
              color: '#4A5B6A',
              lineHeight: '1.6',
            }}
          >
            In-Person: Tue & Thu · 10 AM–6 PM<br />
            Virtual (Zoom): Mon, Wed & Fri · 1 PM–5 PM<br />
            Weekends: Closed
          </p>
        </div>
      </div>

  
      <div style={{ flex: 1 }}>
        <img
          src="/assessment_pic.jpg"
          alt="Dr. Serena Blake in her office"
          style={{
            width: '100%',
            borderRadius: '12px',
            objectFit: 'cover',
            maxHeight: '440px',
            boxShadow: '0 6px 16px rgba(0, 0, 0, 0.08)',
          }}
        />
      </div>
    </section>
  );
}
