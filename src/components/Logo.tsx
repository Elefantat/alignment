import Image from 'next/image'

interface LogoProps {
  className?: string
}

export default function Logo({ className = "w-10 h-10" }: LogoProps) {
  return (
    <div className={className}>
      <Image
        src="/logo.png"
        alt="Alignment Logo"
        width={200}
        height={200}
        className="w-full h-full object-contain"
        priority
      />
    </div>
  )
}
