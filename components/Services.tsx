'use client';

import ServiceCard from './Card';

export default function Services() {
  return (
    <section className="max-w-[1100px] mx-auto my-16 px-5 text-center font-serif bg-[#F7FAFA] rounded-xl shadow-md pt-12 pb-12">
      <h2 className="text-[2.2rem] mb-5 text-[#2D3E50] font-medium">
        How I Can Help You
      </h2>

      <p className="text-[1.05rem] text-[#4A5B6A] max-w-[700px] mx-auto mb-10 leading-relaxed">
        Discover the different areas of support I offer — from overcoming anxiety and navigating life transitions to healing trauma in a safe, supportive environment.
      </p>

      <div className="flex justify-center gap-7 flex-wrap">
        <ServiceCard
          imageSrc="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
          title="Anxiety & Stress Management "
          description="Personalized therapy sessions to help you manage anxiety, build resilience, and restore emotional balance."
        />
        <ServiceCard
          imageSrc="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
          title="Relationship Counseling "
          description="Guidance through communication issues, trust rebuilding, or healing after loss or separation."
        />
        <ServiceCard
          imageSrc="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80"
          title="Trauma Recovery"
          description="Safe, compassionate care to help process past trauma and rebuild a sense of peace and empowerment."
        />
      </div>

      <div className="flex justify-center items-stretch gap-10 mt-16 flex-wrap">
        <div className="flex-1 min-w-[250px] ml-4 bg-white p-7 rounded-lg shadow-sm text-left">
          <h3 className="text-xl text-[#2D3E50] mb-2.5">Experience</h3>
          <p className="text-base text-[#4A5B6A] leading-relaxed">
            Over 8 years in practice<br />
            500+ sessions conducted<br />
            Licensed in California (PsyD)
          </p>
        </div>

        <div className="flex-1 min-w-[250px] mr-4 bg-white p-7 rounded-lg shadow-sm text-left">
          <h3 className="text-xl text-[#2D3E50] mb-2.5">Session Fees</h3>
          <p className="text-base text-[#4A5B6A] leading-relaxed">
            $200 / individual session<br />
            $240 / couples session<br />
            Sliding scale available upon request
          </p>
        </div>
      </div>
    </section>
  );
}
