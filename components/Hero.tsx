'use client';

export default function Hero() {
  return (
    <section
      style={{
        margin: '10px 20px 20px 20px',
        position: 'relative',
        height: '800px',
        borderRadius: '10px',
        backgroundColor: '#F5F5DC',  // background color under image
        backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.75)',
        overflow: 'hidden',
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
      }}
    >
      
      <button
        style={{
          position: 'absolute',
          top: '60%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '12px 30px',
          fontSize: '1.1rem',
          border: 'none',
          borderRadius: '5px',
          backgroundColor: '#ff5c5c',
          color: '#fff',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#ff1c1c')}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#ff5c5c')}
      >
        Click Me!
      </button>
    </section>
  );
}
