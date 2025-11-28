import Header from '@/components/Header'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import BuiltForRealLife from '@/components/BuiltForRealLife'
import AlignmentSections from '@/components/AlignmentSections'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <BuiltForRealLife />
      <AlignmentSections />
      <Footer />
    </main>
  )
}
