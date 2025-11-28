'use client'

import Image from 'next/image'

const lenses = [
  {
    title: 'Rural & Agricultural',
    description: 'Supports the pressures, isolation, identity load, and realities of working the land.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=250&fit=crop',
  },
  {
    title: 'FIFO & Mining',
    description: 'Understands the emotional whiplash of swings, distance, fatigue, and relationship strain.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=250&fit=crop',
  },
  {
    title: 'Migrant',
    description: 'Supports belonging, identity, cultural transition, and emotional strength in new environments.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=250&fit=crop',
  },
  {
    title: 'Corporate',
    description: 'Helps leaders and teams manage pressure, performance identity, and emotional load.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=250&fit=crop',
  },
  {
    title: 'Healthcare & First Responders',
    description: 'Supports those carrying compassion fatigue, high stress, and the weight of caring for others.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=250&fit=crop',
  },
  {
    title: 'Students & Young Adults',
    description: 'Guides identity formation, emotional literacy, uncertainty, and life transitions.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop',
  },
  {
    title: 'Loneliness & Aged Care',
    description: 'Provides gentle support for isolation, life transitions, and connection in later life.',
    image: 'https://images.unsplash.com/photo-1516733968668-dbdce39c4651?w=400&h=250&fit=crop',
  },
  {
    title: 'First Nations',
    description: 'Grounded in cultural safety, community, Country, strength, and lived experience.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=250&fit=crop',
  },
]

export default function BuiltForRealLife() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-alignment-navy">
            Built For Real Life
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {lenses.map((lens) => (
            <div
              key={lens.title}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Text content */}
              <div className="p-5 flex-1">
                <h3 className="text-lg font-bold text-alignment-navy mb-2 leading-tight">
                  {lens.title}
                </h3>
                <p className="text-sm text-alignment-navy/70 leading-relaxed">
                  {lens.description}
                </p>
              </div>
              
              {/* Image */}
              <div className="relative h-40">
                <Image
                  src={lens.image}
                  alt={lens.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
