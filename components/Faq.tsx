'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'What is your return policy?',
    answer: 'You can return any product within 30 days of purchase, no questions asked.',
  },
  {
    question: 'How do I track my order?',
    answer: 'Once your order ships, you will receive a tracking number via email.',
  },
  {
    question: 'Do you offer customer support?',
    answer: 'Absolutely! Our support team is available 24/7 via chat, email, or phone.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section style={{ maxWidth: '700px', margin: '40px auto', padding: '0 20px' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '30px' }}>Frequently Asked Questions</h2>

      <div>
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              marginBottom: '15px',
              borderRadius: '8px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              overflow: 'hidden',
            }}
          >
            <button
              onClick={() => toggle(index)}
              style={{
                width: '100%',
                textAlign: 'left',
                padding: '15px 20px',
                backgroundColor: openIndex === index ? '#007acc' : '#eee',
                color: openIndex === index ? '#fff' : '#333',
                fontSize: '1.1rem',
                border: 'none',
                cursor: 'pointer',
                outline: 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
            >
              {faq.question}
              <span style={{ fontSize: '1.4rem', transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}>
                +
              </span>
            </button>
            {openIndex === index && (
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                style={{
                  padding: '15px 20px',
                  backgroundColor: '#f9f9f9',
                  color: '#444',
                  fontSize: '1rem',
                  lineHeight: '1.5',
                }}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
