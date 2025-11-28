'use client'

import Image from 'next/image'

const audiences = [
  {
    title: 'Farmers',
    description: 'Away from services, facing land and weather uncertainties with limited support networks.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop',
  },
  {
    title: 'FIFO',
    description: 'Consistent support that works around your roster and lifestyle.',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=400&h=300&fit=crop',
  },
  {
    title: 'Everyday People',
    description: 'Accessible pathways for everyone to explore what matters to them.',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop',
  },
  {
    title: 'First Nations & Communities',
    description: 'Culturally aware support that respects tradition and community values.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop',
  },
]

export default function TargetAudience() {
  return (
    <section className="py-20 md:py-28 bg-alignment-sand/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading text-center text-alignment-navy mb-4">
          BUILT FOR REAL LIFE
        </h2>
        <p className="text-center text-alignment-navy/60 max-w-2xl mx-auto mb-16">
          No matter where you are or what you do, Alignment adapts to your unique circumstances.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
            >
              <div className="relative h-48">
                <Image
                  src={audience.image}
                  alt={audience.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-alignment-navy mb-2">
                  {audience.title}
                </h3>
                <p className="text-sm text-alignment-navy/60 leading-relaxed">
                  {audience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}




