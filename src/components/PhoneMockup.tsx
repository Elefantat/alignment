import { MessageCircle, Send } from 'lucide-react'

export default function PhoneMockup() {
  return (
    <div className="phone-frame w-[280px] md:w-[320px] animate-float">
      <div className="phone-screen">
        {/* Status bar */}
        <div className="bg-alignment-teal px-4 py-2 flex justify-between items-center text-white text-xs">
          <span>9:41</span>
          <div className="flex gap-1">
            <div className="w-4 h-2 bg-white/80 rounded-sm" />
          </div>
        </div>
        
        {/* App header */}
        <div className="bg-alignment-teal px-4 py-3 flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <MessageCircle size={20} className="text-white" />
          </div>
          <div>
            <p className="text-white font-medium text-sm">Alignment</p>
            <p className="text-white/70 text-xs">Your reflection space</p>
          </div>
        </div>
        
        {/* Chat area */}
        <div className="bg-gradient-to-b from-alignment-cream-light to-white p-4 h-[380px] md:h-[420px] space-y-4">
          {/* AI Message */}
          <div className="flex gap-2">
            <div className="w-8 h-8 bg-alignment-teal rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-bold">A</span>
            </div>
            <div className="bg-white rounded-2xl rounded-tl-md px-4 py-3 shadow-sm max-w-[85%]">
              <p className="text-sm text-alignment-navy">
                Hi there! I&apos;m here to help you reflect and grow. How are you feeling today?
              </p>
            </div>
          </div>
          
          {/* User Message */}
          <div className="flex justify-end">
            <div className="bg-alignment-teal text-white rounded-2xl rounded-tr-md px-4 py-3 shadow-sm max-w-[85%]">
              <p className="text-sm">
                I&apos;ve been feeling a bit overwhelmed lately with work.
              </p>
            </div>
          </div>
          
          {/* AI Response */}
          <div className="flex gap-2">
            <div className="w-8 h-8 bg-alignment-teal rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-bold">A</span>
            </div>
            <div className="bg-white rounded-2xl rounded-tl-md px-4 py-3 shadow-sm max-w-[85%]">
              <p className="text-sm text-alignment-navy">
                That sounds challenging. It takes courage to acknowledge when things feel heavy. Would you like to explore what&apos;s contributing to that feeling?
              </p>
            </div>
          </div>
          
          {/* Typing indicator */}
          <div className="flex gap-2">
            <div className="w-8 h-8 bg-alignment-teal rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-bold">A</span>
            </div>
            <div className="bg-white rounded-2xl rounded-tl-md px-4 py-3 shadow-sm">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-alignment-teal/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-alignment-teal/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-alignment-teal/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        </div>
        
        {/* Input area */}
        <div className="bg-white border-t border-gray-100 px-4 py-3 flex items-center gap-3">
          <input
            type="text"
            placeholder="Type your thoughts..."
            className="flex-1 text-sm bg-gray-50 rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-alignment-teal/30"
            readOnly
          />
          <button className="w-10 h-10 bg-alignment-teal rounded-full flex items-center justify-center text-white hover:bg-alignment-teal-dark transition-colors">
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}




