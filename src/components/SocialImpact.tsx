'use client'

export default function SocialImpact() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background image - Australian outback */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?w=1920&h=1080&fit=crop')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-alignment-sand/50 via-alignment-cream/60 to-alignment-sand/50 backdrop-blur-sm" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Glass card */}
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




