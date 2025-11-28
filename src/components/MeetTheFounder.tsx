'use client'

import Image from 'next/image'

export default function MeetTheFounder() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-alignment-navy text-center mb-16">
          Meet the Founder
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl">
                <Image
                  src="/founder.png"
                  alt="Jeremy Walker - Founder"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-alignment-navy mb-2">
              Jeremy Walker
            </h3>
            <p className="text-alignment-teal font-medium text-lg mb-6">
              Founder, Beneath the Surface
            </p>
            
            <div className="space-y-4 text-alignment-navy/75 leading-relaxed">
              <p>
                I grew up in a farming family in regional Western Australia and went straight from school into work on a relative&apos;s property. At 22, I took on the challenge of clearing and farming a 6,000-acre ex-bluegum plantation. The work was demanding, unpredictable, and eventually became my entire identity. My self-worth rose and fell with the seasons, and like most in the bush, I carried the pressure quietly—until it became too heavy to ignore.
              </p>
              
              <p>
                I began questioning why rest felt impossible, why failure felt personal, and what was really driving me. Therapy, psychology, and long stretches alone on the property—especially after my wife and daughter moved to Perth—forced me to face the habits and pain I&apos;d pushed aside for years. I realised that true change begins with awareness.
              </p>
              
              <p>
                Leaving the farm wasn&apos;t escape; it was the start of rebuilding with clarity. Since then, I&apos;ve focused on understanding human behaviour and self-awareness, studying through Dr Shefali Tsabary&apos;s Conscious Psychology Institute and completing a Diploma in Psychotherapy and Counselling. I also discovered the power of AI as a reflective tool, which inspired Beneath the Surface—a platform to help people slow down, reflect, and explore what&apos;s really happening beneath everyday life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

