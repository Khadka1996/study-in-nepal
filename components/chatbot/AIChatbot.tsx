 'use client'

import { useEffect, useRef, useState } from 'react'

const IconBot = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className} aria-hidden>
    <rect x="3" y="3" width="18" height="14" rx="3" strokeWidth="1.5" />
    <circle cx="8" cy="10" r="1" fill="currentColor" />
    <circle cx="16" cy="10" r="1" fill="currentColor" />
    <path d="M8 15c1 1 3 1 4 0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="7" y="1" width="10" height="2" rx="1" fill="currentColor" />
  </svg>
)

const IconTimes = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className} aria-hidden>
    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const IconWhatsapp = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M20.52 3.48A11.86 11.86 0 0012 .5C6.21.5 1.5 5.21 1.5 11c0 1.94.5 3.77 1.44 5.36L.5 23.5l7.38-2.02A11.5 11.5 0 0012 22.5c5.79 0 10.5-4.71 10.5-10.5 0-3.02-1.18-5.83-3.98-8.52zM12 20a9 9 0 01-4.56-1.18l-.33-.2-4.38 1.2 1.2-4.26-.21-.34A8.99 8.99 0 113 11c0-4.97 4.03-9 9-9a8.99 8.99 0 010 18z" />
    <path d="M17.6 14.2c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-1.76-.87-2.9-1.57-4.06-3.5-.3-.5.3-.46.86-1.52.1-.2 0-.37-.05-.52-.1-.15-.67-1.52-.92-2.08-.24-.55-.48-.48-.66-.49-.17 0-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.03 1.01-1.03 2.46s1.05 2.86 1.2 3.06c.15.2 2.06 3.22 5 4.51 2.98 1.3 3.44 1.09 4.06 1.02.62-.07 1.99-.81 2.28-1.59.3-.78.3-1.45.21-1.59-.08-.15-.27-.24-.57-.39z" />
  </svg>
)

export default function AIChatbot(): JSX.Element | null {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(true)
  const [isTyping, setIsTyping] = useState(false)
  const [currentMessage, setCurrentMessage] = useState('')
  const [showWelcome, setShowWelcome] = useState(false)
  const [messages, setMessages] = useState<any[]>([])
  const [config, setConfig] = useState<any | null>(null)
  const [chatData, setChatData] = useState<any | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isDashboard, setIsDashboard] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement | null>(null)
  const chatContainerRef = useRef<HTMLDivElement | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const resolveChatResponse = (response: any): { text: string; followUp: string | null } | null => {
    if (!response) return null

    if (Array.isArray(response)) {
      if (response.length === 0) return null
      return resolveChatResponse(response[Math.floor(Math.random() * response.length)])
    }

    if (typeof response === 'string') {
      return { text: response, followUp: null }
    }

    if (typeof response === 'object') {
      const text = response.response || response.text || ''
      if (!text) return null
      return { text, followUp: response.followUp || null }
    }

    return null
  }

  useEffect(() => {
    const path = typeof window !== 'undefined' ? window.location.pathname : ''
    setIsDashboard(path.startsWith('/dashboard'))

    const loadData = async () => {
      try {
        const [configResponse, chatResponse] = await Promise.all([
          fetch('/data/chat-config.json'),
          fetch('/data/chat-data.json')
        ])

        const configData = await configResponse.json()
        const chat = await chatResponse.json()

        setConfig(configData)
        setChatData(chat)
        setIsLoading(false)
      } catch (error) {
        console.error('Error loading chat data:', error)
        setIsLoading(false)
      }
    }

    loadData()
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (isOpen && !isMinimized && config?.enabled && chatData) {
      if (audioRef.current) {
        audioRef.current.play().catch((e) => console.log('Audio play failed:', e))
      }

      setTimeout(() => {
        setShowWelcome(true)
        const greetings = chatData.responses?.greeting || []
        const randomGreeting = greetings[Math.floor(Math.random() * (greetings.length || 1))] || 'Hello!'

        setMessages([
          {
            id: 1,
            text: randomGreeting,
            sender: 'bot',
            timestamp: new Date()
          }
        ])

        setTimeout(() => setShowWelcome(false), 5000)
      }, 500)
    }
  }, [isOpen, isMinimized, config, chatData])

  const handleOpenChat = () => {
    if (!config?.enabled) return
    setIsMinimized(false)
    setIsOpen(true)
  }

  const handleMinimize = () => {
    setIsMinimized(true)
    setShowWelcome(false)
    setTimeout(() => setIsOpen(false), 300)
  }

  const handleWhatsAppRedirect = (customMessage = '') => {
    if (!config) return

    const phoneNumber = config.phoneNumber
    const message = customMessage || config.defaultMessage
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    if (typeof window !== 'undefined') window.open(url, '_blank')
  }

  const isPositiveResponse = (message: string) => {
    const positiveWords = ['yes', 'ok', 'okay', 'sure', 'yeah', 'yep', 'ya', 'alright', 'definitely', 'absolutely']
    return positiveWords.includes(message.toLowerCase().trim())
  }

  const shouldRedirect = (message: string) => {
    const redirectWords = chatData?.redirect_triggers || []
    return redirectWords.some((word: string) => message.toLowerCase().includes(word.toLowerCase()))
  }

  const handleSmallTalk = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase()

    if (chatData?.small_talk) {
      if (lowerMessage.includes('how are you') || lowerMessage.includes('how do you do')) {
        return resolveChatResponse(chatData.small_talk.how_are_you || [])
      }
      if (lowerMessage.includes('who are you') || lowerMessage.includes('what are you')) {
        return resolveChatResponse(chatData.small_talk.who_are_you || [])
      }
      if (lowerMessage.includes('what can you do') || lowerMessage.includes('what do you do')) {
        return resolveChatResponse(chatData.small_talk.what_can_you_d || [])
      }
      if (lowerMessage.includes('joke') || lowerMessage.includes('funny')) {
        return resolveChatResponse(chatData.small_talk.jokes || [])
      }
    }

    return null
  }

  const findMatchingResponse = (userMessage: string) => {
    if (!chatData) return null
    const lowerMessage = userMessage.toLowerCase()

    const smallTalkResponse = handleSmallTalk(userMessage)
    if (smallTalkResponse) return smallTalkResponse

    if (chatData.keywords?.thank_you?.some((keyword: string) => lowerMessage.includes(keyword))) {
      return resolveChatResponse(chatData.responses?.thank_you || [])
    }

    if (chatData.keywords?.goodbye?.some((keyword: string) => lowerMessage.includes(keyword))) {
      return resolveChatResponse(chatData.responses?.goodbye || [])
    }

    if (chatData.keywords?.hello?.some((keyword: string) => lowerMessage === keyword || lowerMessage === `${keyword} there`)) {
      return resolveChatResponse(chatData.responses?.hello || [])
    }

    for (const [category, keywords] of Object.entries(chatData.keywords || {})) {
      if ((keywords as string[]).some((keyword) => lowerMessage.includes(keyword))) {
        return resolveChatResponse(chatData.responses?.[category])
      }
    }

    return null
  }

  const simulateBotResponse = (userMessage: string) => {
    setIsTyping(true)

    setTimeout(() => {
      let botResponse: any = null
      const matchingResponse = findMatchingResponse(userMessage)

      if (shouldRedirect(userMessage)) {
        botResponse = {
          id: messages.length + 1,
          text: "Perfect! I'd love to connect you with our expert education counselors. They'll provide personalized guidance for your study abroad journey. Let me redirect you to WhatsApp now!",
          sender: 'bot',
          timestamp: new Date(),
          action: 'redirect'
        }
      } else if (isPositiveResponse(userMessage)) {
        botResponse = {
          id: messages.length + 1,
          text: "Excellent! I'm connecting you with our education counselors on WhatsApp now. They'll provide personalized guidance for your study abroad journey.",
          sender: 'bot',
          timestamp: new Date(),
          action: 'redirect'
        }
      } else if (matchingResponse) {
        botResponse = {
          id: messages.length + 1,
          text: matchingResponse.text,
          sender: 'bot',
          timestamp: new Date(),
          followUp: matchingResponse.followUp,
        }
      } else {
        const defaultResponses = chatData.responses?.default || []
        const randomDefault = resolveChatResponse(defaultResponses) || { text: `Thanks — we'll follow up on "${userMessage}".`, followUp: null }
        const formattedResponse = randomDefault.text.replace('{query}', userMessage)
        botResponse = { id: messages.length + 1, text: formattedResponse, sender: 'bot', timestamp: new Date(), followUp: randomDefault.followUp }
      }

      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)

      if (botResponse.action === 'redirect') {
        setTimeout(() => {
          handleWhatsAppRedirect()
        }, 2000)
      }
    }, 1500)
  }

  const handleSendMessage = () => {
    if (currentMessage.trim() === '' || !config?.enabled) return

    const userMessage = { id: messages.length + 1, text: currentMessage, sender: 'user', timestamp: new Date() }
    setMessages((prev) => [...prev, userMessage])
    setCurrentMessage('')
    simulateBotResponse(currentMessage)
  }

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') handleSendMessage()
  }

  const quickActions = [
    { label: 'Services', query: 'What services do you offer?' },
    { label: 'Countries', query: 'Which countries do you cover for study abroad?' },
    { label: 'Tests', query: 'Do you provide test preparation for IELTS?' },
    { label: 'Fees', query: 'What are your service fees?' },
    { label: 'Contact', query: 'What is your phone number and address?' },
    { label: 'Consultation', query: 'I want to book free consultation' }
  ]

  const handleQuickAction = (query: string) => {
    setCurrentMessage(query)
    setTimeout(() => handleSendMessage(), 100)
  }

  if (isLoading || !config?.enabled || isDashboard) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 safe-bottom safe-right">
      <audio ref={audioRef} src="/sounds/notification.wav" preload="auto" />

      {!isOpen && (
          <div
          className="relative w-14 h-14 bg-[var(--color-secondary)] rounded-full shadow-2xl cursor-pointer transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
          onClick={handleOpenChat}
          style={{ boxShadow: '0 8px 25px rgba(200,16,46,0.24), 0 4px 8px rgba(200,16,46,0.16)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-full"></div>
          <div className="absolute inset-0 border-2 border-white/30 rounded-full"></div>
          <IconBot className="w-7 h-7 text-white" />
          <div className="absolute inset-0 rounded-full bg-[var(--color-secondary)] animate-ping opacity-20"></div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center border border-gray-200">
            <span className="text-[var(--color-secondary)] text-xs font-bold">1</span>
          </div>
        </div>
      )}

      {isOpen && (
        <div
          ref={chatContainerRef}
          className={`bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${isMinimized ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
          style={{ width: 'calc(100vw - 2rem)', maxWidth: '400px', height: 'calc(100vh - 8rem)', maxHeight: '600px', display: 'flex', flexDirection: 'column' }}
        >
          <div className="bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] p-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-primary)] rounded-full flex items-center justify-center shadow-lg">
                  <IconBot className="w-6 h-6 text-white" />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm sm:text-base">Study In Nepal Assistant</h3>
                <p className="text-xs text-white">Online</p>
              </div>
            </div>
            <button onClick={handleMinimize} className="text-white/80 hover:text-white transition-colors btn-mobile rounded-full p-1">
              <IconTimes className="w-5 h-5" />
            </button>
          </div>

          <div className="bg-gray-50 p-3 border-b">
            <div className="flex flex-wrap gap-2 overflow-x-auto scroll-mobile pb-1">
              {quickActions.map((action, index) => (
                <button key={index} onClick={() => handleQuickAction(action.query)} className="bg-white border border-gray-200 rounded-full px-3 py-2 text-xs text-gray-700 hover:bg-[var(--color-light)] hover:border-[var(--color-primary)] transition-colors whitespace-nowrap flex-shrink-0 btn-mobile shadow-sm">
                  {action.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 scroll-mobile">
            {messages.map((message) => (
              <div key={message.id} className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-2 ${message.sender === 'user' ? 'bg-[var(--color-primary)] text-white rounded-br-none' : 'bg-white text-gray-800 shadow-md rounded-bl-none'}`}>
                  <p className="text-sm whitespace-pre-line break-words">{message.text}</p>
                  <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-[var(--color-secondary)]' : 'text-gray-500'}`}>{new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="bg-white text-gray-800 shadow-md rounded-2xl rounded-bl-none px-4 py-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex items-center space-x-2 mb-3">
              <input type="text" value={currentMessage} onChange={(e) => setCurrentMessage(e.target.value)} onKeyPress={handleKeyPress} placeholder="Ask about studying abroad..." className="flex-1 border border-gray-300 rounded-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent" />

              <button onClick={() => { /* report/flag */ }} aria-label="flag" className="w-10 h-10 bg-red-50 text-[var(--color-secondary)] rounded-full flex items-center justify-center border border-red-100 shadow-sm">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
                  <path d="M12 2L2 7l10 5 10-5-10-5zm0 7v11" stroke="currentColor" strokeWidth="0" />
                </svg>
              </button>

              <button onClick={handleSendMessage} className="bg-[var(--color-secondary)] text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors btn-mobile">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </div>

            <button onClick={() => handleWhatsAppRedirect()} className="w-full bg-gradient-to-r from-[var(--color-secondary)] to-[#ab0d26] text-white rounded-full py-3 px-4 flex items-center justify-center space-x-2 hover:from-[#ab0d26] hover:to-[var(--color-secondary)] transition-all shadow-md text-sm font-semibold btn-mobile">
              <IconWhatsapp className="w-5 h-5" />
              <span>Free Education Consultation</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
