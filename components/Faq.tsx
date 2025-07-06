'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Do you accept insurance?',
    answer: 'No, but a superbill is provided for self-submission.',
  },
  {
    question: 'Are online sessions available?',
    answer: 'Yes—all virtual sessions via Zoom.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: '24-hour notice required.',
  },
  {
    question: 'Is everything I share confidential?',
    answer: 'Yes, confidentiality is a cornerstone of therapy. Your privacy is respected and protected at all times.',
  },
  {
    question: 'How often should I attend therapy?',
    answer: 'It depends on your goals. Most clients start with weekly sessions and adjust over time as needed.',
  },
  {
    question: 'What if I’m nervous about starting therapy?',
    answer: 'That’s completely normal. We’ll go at a pace that feels comfortable and safe for you.',
  },
  {
    question: 'How do I get started?',
    answer: 'You can reach out via the contact form to schedule a free 15-minute consultation call.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section className="max-w-xl mx-auto my-16 px-5 font-serif">
      <h2 className="text-center text-2xl mb-8 text-[#2D3E50] font-semibold">
        Frequently Asked Questions
      </h2>

      <div>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-4 rounded-xl shadow-md overflow-hidden bg-white border border-[#E0E6E6]"
          >
            <button
              onClick={() => toggle(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
              className={`w-full text-left px-5 py-4 font-medium text-lg flex justify-between items-center transition-all duration-300
                ${
                  openIndex === index
                    ? 'bg-[#6BA6A6] text-white'
                    : 'bg-[#F7FAFA] text-[#2D3E50]'
                }
              `}
            >
              {faq.question}
              <span
                className={`text-2xl transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-45' : 'rotate-0'
                }`}
              >
                +
              </span>
            </button>

            {openIndex === index && (
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className="px-5 py-4 bg-[#FAFAFA] text-[#4A5B6A] text-base leading-relaxed"
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
