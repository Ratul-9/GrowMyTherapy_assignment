'use client';

export default function Header() {
  return (
    <footer className="flex flex-wrap justify-between items-start p-12 bg-[#c4e1ef] border-t border-[#C3D6DE] text-[#1F2A38] font-sans gap-y-10 gap-x-16">
      <div className="flex-1 min-w-[300px] max-w-[460px]">
        <h1
          className="
            text-[1.75rem] 
            font-extrabold 
            mb-3 
            tracking-wider 
            text-[#1F2A38] 
            drop-shadow-[0_2px_3px_rgba(0,0,0,0.15)]
            font-serif
            "
          style={{ letterSpacing: '0.05em' }}
        >
          Dr. Serena Blake, PsyD
        </h1>
        <h2
          className="
            text-[1.15rem] 
            font-semibold 
            tracking-wide 
            text-[#3A4C5C] 
            drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)] 
            font-serif
            "
          style={{ letterSpacing: '0.04em' }}
        >
          Clinical Psychologist
        </h2>
      </div>

      <div className="flex-1 min-w-[300px] max-w-[460px] text-left">
        <div className="mb-7">
          <p className="font-semibold text-[1rem] mb-1.5 tracking-wide text-[#1F2A38]">
            Location
          </p>
          <p className="text-[0.95rem] leading-6 text-[#4A5B6A] m-0">
            1287 Maplewood Drive<br />
            Los Angeles, CA 90026
          </p>
        </div>

        <div>
          <p className="font-semibold text-[1rem] mb-1.5 tracking-wide text-[#1F2A38]">
            Contact
          </p>
          <p className="text-[0.95rem] leading-6 text-[#4A5B6A] m-0">
            Phone: (323) 555-0192<br />
            Email:{' '}
            <a
              href="mailto:serena@blakepsychology.com"
              className="text-[#1F2A38] no-underline font-medium"
            >
              serena@blakepsychology.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
