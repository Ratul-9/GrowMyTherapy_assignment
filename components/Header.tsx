'use client';

export default function Header() {
  return (
    <footer
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        padding: '20px',
        backgroundColor: '#F5F5DC',
        color: 'blue',
        minHeight: '120px',
      }}
    >
      <div style={{ maxWidth: '300px' }}>
        <h1 style={{ margin: '0 0 8px 0', fontSize: '1.2rem' }}>Dr. Serena Blake, PsyD (Clinical Psychologist)</h1>
        <p style={{ margin: 0, fontSize: '0.8rem', lineHeight: '1.4' }}>
          This is a small paragraph below the heading for some info or tagline.
        </p>
      </div>
    </footer>
  );
}
