export default function ServiceCard({
  imageSrc,
  title,
  description,
}: {
  imageSrc: string;
  title: string;
  description: string;
}) {
  return (
    <div
      style={{
        flex: '1 1 0',
        maxWidth: '300px',
        backgroundColor: '#f5f5f5',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        textAlign: 'center',
        margin: '10px',
      }}
    >
      <img
        src={imageSrc}
        alt={title}
        style={{
          width: '100%',
          height: '180px',
          borderRadius: '10px',
          objectFit: 'cover',
          marginBottom: '15px',
          border: '3px solid #007acc',
        }}
      />
      <h3 style={{ margin: '0 0 10px 0', fontSize: '1.4rem', color: '#222' }}>{title}</h3>
      <p style={{ fontSize: '1rem', color: '#555', lineHeight: '1.4' }}>{description}</p>
    </div>
  );
}
