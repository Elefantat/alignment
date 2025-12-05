'use client'

import { Play } from 'lucide-react'
import PhoneMockup from './PhoneMockup'

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden flex items-center">
      {/* Background wheat field image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&h=1080&fit=crop&q=80')`,
        }}
      />
      
      {/* Very light overlay - mostly transparent */}
      <div className="absolute inset-0 bg-gradient-to-r from-alignment-cream/30 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-alignment-cream/20 via-transparent to-alignment-cream/20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">
          {/* Left Content - vertically centered */}
          <div className="text-center lg:text-left space-y-5 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-alignment-navy leading-tight drop-shadow-md">
              Alignment
            </h1>
            
            <p className="text-xl md:text-2xl text-alignment-navy font-light mx-auto lg:mx-0 drop-shadow-sm whitespace-nowrap">
              AI built for reflective wellbeing, not just comfort
            </p>
            
            <p className="text-base md:text-lg text-alignment-navy/80 mx-auto lg:mx-0 drop-shadow-sm whitespace-nowrap">
              AI supported inner work platform that meets you where you&apos;re at
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
              <button className="btn-primary text-lg px-8 py-4">
                Start Your Journey
              </button>
              
              <button className="inline-flex items-center justify-center text-lg px-8 py-4 text-alignment-navy font-medium rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 group">
                <Play size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </div>
          </div>
          
          {/* Right Content - Phone Mockup */}
          <div className="flex justify-center lg:justify-end animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Glow effect behind phone */}
              <div className="absolute -inset-8 bg-alignment-teal/10 rounded-full blur-3xl" />
              
              <PhoneMockup />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-alignment-navy/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-alignment-teal rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
