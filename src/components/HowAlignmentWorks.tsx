'use client'

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

export default function HowAlignmentWorks() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background image with blur overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-alignment-sand/60 via-alignment-cream/70 to-alignment-sand/60 backdrop-blur-sm" />
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Glass card */}
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
      </div>
    </section>
  )
}
