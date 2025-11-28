'use client'

import Image from 'next/image'
import { Heart, Search, Puzzle, Shield, Settings } from 'lucide-react'

const steps = [
  {
    icon: Heart,
    title: 'Feel',
  },
  {
    icon: Search,
    title: 'Reflect',
  },
  {
    icon: Puzzle,
    title: 'Recognize\nPattern',
  },
  {
    icon: Shield,
    title: 'Reclaim\nChoice',
  },
  {
    icon: Settings,
    title: 'Integrate\nChange',
  },
]

export default function AlignmentSections() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Shared background image - Australian outback */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?w=1920&h=1080&fit=crop')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-alignment-sand/50 via-alignment-cream/40 to-alignment-sand/50 backdrop-blur-[2px]" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
        
        {/* Meet the Founder Card */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-alignment-navy mb-8">
            Meet the Founder
          </h2>
          
          {/* Top row: Photo left, Name/Title right */}
          <div className="flex items-center gap-6 mb-6">
            {/* Photo - no border */}
            <div className="flex-shrink-0">
              <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
                <Image
                  src="/founder.png"
                  alt="Jeremy Walker - Founder"
                  width={150}
                  height={150}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
            </div>
            
            {/* Name and Title */}
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-alignment-navy mb-1">
                Jeremy Walker
              </h3>
              <p className="text-alignment-teal font-medium text-lg">
                Founder, Beneath the Surface
              </p>
            </div>
          </div>
          
          {/* Bio text */}
          <div className="space-y-4 text-alignment-navy/80 text-base md:text-lg leading-relaxed">
            <p>
              I grew up in a farming family in regional Western Australia and began working on a relative&apos;s property straight after school. At 22, I took on clearing and farming a 6,000-acre ex-bluegum plantation—a demanding role that quickly became my identity. My self-worth rose and fell with the seasons, and eventually the pressure became impossible to ignore.
            </p>
            
            <p>
              Through therapy, psychology, and long periods alone—especially after my wife and daughter moved to Perth—I began to understand the habits and pain driving my behaviour. Leaving the farm marked a shift toward rebuilding with clarity. Since then, I&apos;ve focused on studying human behaviour through Dr Shefali Tsabary&apos;s Conscious Psychology Institute and a Diploma in Psychotherapy and Counselling. That journey led to Beneath the Surface, a platform designed to help people reflect honestly and explore what&apos;s happening beneath everyday life.
            </p>
          </div>
        </div>

        {/* How Alignment Works Card */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-alignment-navy mb-6">
            How Alignment Works
          </h2>
          
          <div className="space-y-4 text-alignment-navy/80 mb-12">
            <p className="text-lg leading-relaxed">
              Alignment listens to your reality and adapts to your world through contextual lensing. It helps you understand what&apos;s sitting beneath your emotions, recognise patterns, and make sense of your inner world in a grounded, practical way.
            </p>
            <p className="text-lg leading-relaxed">
              When you&apos;re ready, Alignment connects you to people and services that fit your situation. Its Resource Library isn&apos;t just a library — it provides tailored recommendations that surface the right tools, stories, and guidance for what you&apos;re facing.
            </p>
          </div>
          
          {/* Steps flow - icons row */}
          <div className="flex items-center justify-center gap-1 md:gap-2 mb-3">
            {steps.map((step, index) => (
              <div key={step.title} className="flex items-center">
                {/* Icon */}
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-alignment-teal flex items-center justify-center bg-white hover:bg-alignment-teal transition-colors duration-300 group cursor-pointer">
                  <step.icon className="w-6 h-6 md:w-7 md:h-7 text-alignment-teal group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                
                {/* Short arrow connector - aligned */}
                {index < steps.length - 1 && (
                  <div className="mx-1 md:mx-2 flex items-center">
                    <div className="w-4 md:w-6 h-0.5 bg-alignment-teal/50" />
                    <svg className="w-2 h-2 text-alignment-teal/60 -ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Labels row */}
          <div className="flex items-start justify-center gap-1 md:gap-2">
            {steps.map((step, index) => (
              <div key={`label-${step.title}`} className="flex items-center">
                {/* Label */}
                <div className="w-14 md:w-16 text-center">
                  <span className="text-xs md:text-sm font-medium text-alignment-navy whitespace-pre-line leading-tight">
                    {step.title}
                  </span>
                </div>
                
                {/* Spacer for arrow width */}
                {index < steps.length - 1 && (
                  <div className="mx-1 md:mx-2 w-4 md:w-6" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Social Impact & Giving Back Card */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50">
          <div className="flex items-start justify-between gap-4 mb-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-alignment-navy">
              Social Impact & Giving Back
            </h2>
            
            {/* Small logo icon */}
            <div className="flex-shrink-0">
              <svg viewBox="0 0 60 60" className="w-12 h-12 text-alignment-teal">
                <circle cx="30" cy="20" r="12" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.6" />
                <circle cx="20" cy="38" r="12" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.6" />
                <circle cx="40" cy="38" r="12" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.6" />
              </svg>
            </div>
          </div>
          
          <div className="space-y-5 text-alignment-navy/80">
            <p className="text-lg leading-relaxed">
              Alignment was born from lived experience — a journey through isolation, pressure, and honest self-reflection that reshaped how I understand mental health. That personal shift became a mission to make emotional awareness accessible to all Australians, especially those who carry the load quietly.
            </p>
            
            <p className="text-lg leading-relaxed">
              Our heart sits with regional and remote communities, and with Aboriginal and Torres Strait Islander communities, where the need for support is greatest. Suicide rates in very remote areas are more than double those of major cities, and First Nations people face rates nearly three times higher. These realities guide our commitment.
            </p>
            
            <p className="text-lg leading-relaxed">
              To support this, a minimum of 10% of annual net revenue goes to the Access & Outreach Fund, offering free access, education partnerships, and community-led programs where services are hardest to reach.
            </p>
            
            <p className="text-lg leading-relaxed">
              It&apos;s more than a business model — it&apos;s a promise to give back. Every reflection shared with Alignment helps build a wider ecosystem of care, and every dollar returned through our fund helps someone in a remote town or culturally rich community feel seen, supported, and connected.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
