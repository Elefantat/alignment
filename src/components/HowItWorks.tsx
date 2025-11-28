'use client'

import { Users, Brain, Sparkles, Target, Headphones } from 'lucide-react'

const steps = [
  {
    icon: Users,
    title: 'Connect',
    description: 'Join a community',
  },
  {
    icon: Brain,
    title: 'Reflect',
    description: 'Introspective Chat Bot',
  },
  {
    icon: Sparkles,
    title: 'Grow',
    description: 'AI insights',
  },
  {
    icon: Target,
    title: 'Integrate',
    description: 'Goal setting',
  },
  {
    icon: Headphones,
    title: 'Support',
    description: 'Access Pathways 24/7 access',
  },
]

export default function HowItWorks() {
  return (
    <section id="features" className="py-20 md:py-28" style={{ backgroundColor: 'rgb(244, 234, 215)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading text-center text-alignment-navy mb-16">
          HOW ALIGNMENT WORKS
        </h2>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-alignment-teal/20 via-alignment-teal to-alignment-teal/20" />
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <div 
                key={step.title}
                className="flex flex-col items-center text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon container */}
                <div className="relative mb-4">
                  {/* Background circle */}
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-alignment-teal/10 flex items-center justify-center group-hover:bg-alignment-teal/20 transition-colors duration-300">
                    {/* Inner circle with icon */}
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-alignment-teal flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-7 h-7 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  {/* Connector dot for timeline */}
                  <div className="hidden md:block absolute -bottom-[22px] left-1/2 -translate-x-1/2 w-3 h-3 bg-alignment-teal rounded-full border-2 shadow-sm" style={{ borderColor: 'rgb(244, 234, 215)' }} />
                </div>
                
                <h3 className="text-lg font-semibold text-alignment-navy mb-1 mt-4 md:mt-6">
                  {step.title}
                </h3>
                <p className="text-sm text-alignment-navy/60 max-w-[140px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
