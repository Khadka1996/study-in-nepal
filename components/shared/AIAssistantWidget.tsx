'use client'

import React, { useEffect, useState, useRef } from 'react'

const IconTimes = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className} aria-hidden>
    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const IconWhatsapp = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M20.52 3.48A11.88 11.88 0 0012.06 0C5.4 0 .18 5.22.18 11.88c0 2.09.55 4.14 1.6 5.95L0 24l6.4-1.67A11.85 11.85 0 0012.06 24c6.66 0 11.88-5.22 11.88-11.88 0-3.17-1.24-6.13-3.42-8.45z"/>
  </svg>
)

const IconBot = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className} aria-hidden>
    <rect x="3" y="3" width="18" height="14" rx="3" strokeWidth="1.5" />
    <circle cx="8" cy="10" r="1" fill="currentColor" />
    <circle cx="16" cy="10" r="1" fill="currentColor" />
    <path d="M8 15c1 1 3 1 4 0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="7" y="1" width="10" height="2" rx="1" fill="currentColor" />
  </svg>
)

type ChatConfig = {
  enabled?: boolean
  phoneNumber?: string
  defaultMessage?: string
  redirect_triggers?: string[]
}

type SmallTalk = Record<string, string[]>

type ChatData = {
  responses: Record<string, any>
  keywords: Record<string, string[]>
  small_talk?: {
    how_are_you?: string[]
    who_are_you?: string[]
    what_can_you_d?: string[]
    jokes?: string[]
  }
  redirect_triggers?: string[]
}

type ChatMessage = {
  id: number
  text: string
  sender: 'user' | 'bot'
  timestamp: string | Date
  action?: string
  followUp?: string | null
}

export default function AIAssistantWidget(): JSX.Element | null {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(true)
  const [isTyping, setIsTyping] = useState(false)
  const [currentMessage, setCurrentMessage] = useState('')
  const [showWelcome, setShowWelcome] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [config, setConfig] = useState<ChatConfig | null>(null)
  const [chatData, setChatData] = useState<ChatData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isDashboard, setIsDashboard] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement | null>(null)
  const chatContainerRef = useRef<HTMLDivElement | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const path = typeof window !== 'undefined' ? window.location.pathname : ''
    setIsDashboard(path.startsWith('/dashboard'))

    const loadData = async () => {
      try {
        const [configResponse, chatResponse] = await Promise.all([
          fetch('/data/chat-config.json'),
          fetch('/data/chat-data.json')
        ])

        const configData: ChatConfig = await configResponse.json()
        const data: ChatData = await chatResponse.json()

        setConfig(configData)
        setChatData(data)
        setIsLoading(false)
      } catch (error) {
        // keep silent; component is preparatory
        console.error('Error loading chat data:', error)
        setIsLoading(false)
      }
    }

    loadData()
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && !isMinimized && config?.enabled && chatData) {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {})
      }

      setTimeout(() => {
        setShowWelcome(true)
        const greetings = (chatData.responses?.greeting as string[]) || []
        const randomGreeting = greetings[Math.floor(Math.random() * (greetings.length || 1))] || 'Hello!'

        setMessages([
          {
            id: 1,
            text: randomGreeting,
            sender: 'bot',
            timestamp: new Date()
          }
        ])

        setTimeout(() => {
          setShowWelcome(false)
        }, 5000)
      }, 500)
    }
  }, [isOpen, isMinimized, config, chatData])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

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

    const phoneNumber = config.phoneNumber || ''
    const message = customMessage || config.defaultMessage || ''
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    if (typeof window !== 'undefined') window.open(url, '_blank')
  }

  const isPositiveResponse = (message: string) => {
    const positiveWords = ['yes', 'ok', 'okay', 'sure', 'yeah', 'yep', 'ya', 'alright', 'definitely', 'absolutely']
    return positiveWords.includes(message.toLowerCase().trim())
  }

  const shouldRedirect = (message: string) => {
    const redirectWords = (chatData?.redirect_triggers as string[]) || []
    return redirectWords.some(word => message.toLowerCase().includes(word.toLowerCase()))
  }

  const handleSmallTalk = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase()

    if (chatData?.small_talk) {
      if (lowerMessage.includes('how are you') || lowerMessage.includes('how do you do')) {
        const responses = chatData.small_talk.how_are_you || []
        return responses[Math.floor(Math.random() * (responses.length || 1))]
      }

      if (lowerMessage.includes('who are you') || lowerMessage.includes('what are you')) {
        const responses = chatData.small_talk.who_are_you || []
        return responses[Math.floor(Math.random() * (responses.length || 1))]
      }

      if (lowerMessage.includes('what can you do') || lowerMessage.includes('what do you do')) {
        const responses = chatData.small_talk.what_can_you_d || []
        return responses[Math.floor(Math.random() * (responses.length || 1))]
      }

      if (lowerMessage.includes('joke') || lowerMessage.includes('funny')) {
        const responses = chatData.small_talk.jokes || []
        return responses[Math.floor(Math.random() * (responses.length || 1))]
      }
    }

    return null
  }

  const findMatchingResponse = (userMessage: string) => {
    if (!chatData) return null

    const lowerMessage = userMessage.toLowerCase()

    const smallTalkResponse = handleSmallTalk(userMessage)
    if (smallTalkResponse) return smallTalkResponse

    if (chatData.keywords?.thank_you?.some(keyword => lowerMessage.includes(keyword))) {
      const thankYouResponses = chatData.responses?.thank_you || []
      return thankYouResponses[Math.floor(Math.random() * (thankYouResponses.length || 1))]
    }

    if (chatData.keywords?.goodbye?.some(keyword => lowerMessage.includes(keyword))) {
      const goodbyeResponses = chatData.responses?.goodbye || []
      return goodbyeResponses[Math.floor(Math.random() * (goodbyeResponses.length || 1))]
    }

    if (chatData.keywords?.hello?.some(keyword => lowerMessage === keyword || lowerMessage === `${keyword} there`)) {
      const helloResponses = chatData.responses?.hello || []
      return helloResponses[Math.floor(Math.random() * (helloResponses.length || 1))]
    }

    for (const [category, keywords] of Object.entries(chatData.keywords || {})) {
      if (keywords.some(keyword => lowerMessage.includes(keyword))) {
        return chatData.responses?.[category] || null
      }
    }

    return null
  }

  const simulateBotResponse = (userMessage: string) => {
    setIsTyping(true)

    setTimeout(() => {
      let botResponse: ChatMessage
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
        if (typeof matchingResponse === 'string') {
          botResponse = {
            id: messages.length + 1,
            text: matchingResponse,
            sender: 'bot',
            timestamp: new Date()
          }
        } else {
          const responseText = matchingResponse.response || JSON.stringify(matchingResponse)
          botResponse = {
            id: messages.length + 1,
            text: responseText,
            sender: 'bot',
            timestamp: new Date(),
            followUp: matchingResponse.followUp || null
          }
        }
      } else {
        const defaultResponses = chatData?.responses?.default || ['Thanks for the question — we will connect you shortly.']
        const randomDefault = defaultResponses[Math.floor(Math.random() * (defaultResponses.length || 1))]
        const formattedResponse = randomDefault.replace('{query}', userMessage)

        botResponse = {
          id: messages.length + 1,
          text: formattedResponse,
          sender: 'bot',
          timestamp: new Date()
        }
      }

      setMessages(prev => [...prev, botResponse])
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

    const userMessage: ChatMessage = {
      id: messages.length + 1,
      text: currentMessage,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setCurrentMessage('')

    simulateBotResponse(currentMessage)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
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
    setTimeout(() => {
      handleSendMessage()
    }, 100)
  }

  if (isLoading || !config?.enabled || isDashboard) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 safe-bottom safe-right">
      <audio ref={audioRef} src="/sounds/notification.wav" preload="auto" />

      {!isOpen && (
        <div
          className="relative w-14 h-14 bg-[var(--color-primary)] rounded-full shadow-2xl cursor-pointer transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
          onClick={handleOpenChat}
          style={{ boxShadow: '0 8px 25px rgba(26,95,122,0.18), 0 4px 8px rgba(26,95,122,0.12)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-full"></div>
          <div className="absolute inset-0 border-2 border-white/30 rounded-full"></div>

          <IconBot className="w-7 h-7 text-white" />

          <div className="absolute inset-0 rounded-full bg-[var(--color-primary)] animate-ping opacity-20"></div>

          <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center border border-gray-200">
            <span className="text-[var(--color-primary)] text-xs font-bold">1</span>
          </div>
        </div>
      )}

      {isOpen && (
        <div
          ref={chatContainerRef}
          className={`bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
            isMinimized ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
          style={{
            width: 'calc(100vw - 2rem)',
            maxWidth: '400px',
            height: 'calc(100vh - 8rem)',
            maxHeight: '600px',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] p-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full flex items-center justify-center shadow-lg">
                  <IconBot className="w-6 h-6 text-white" />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm sm:text-base">Study In Nepal Assistant</h3>
                <p className="text-xs text-white">Online</p>
              </div>
            </div>
            <button onClick={handleMinimize} className="text-white/80 hover:text-white transition-colors btn-mobile">
              <IconTimes className="w-5 h-5" />
            </button>
          </div>

          <div className="bg-gray-50 p-3 border-b">
            <div className="flex flex-wrap gap-2 overflow-x-auto scroll-mobile pb-1">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickAction(action.query)}
                  className="bg-white border border-gray-300 rounded-full px-3 py-2 text-xs text-gray-700 hover:bg-[var(--color-light)] hover:border-[var(--color-primary)] transition-colors whitespace-nowrap flex-shrink-0 btn-mobile"
                >
                  {action.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 scroll-mobile">
            {messages.map(message => (
              <div key={message.id} className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-2 ${
                    message.sender === 'user' ? 'bg-[var(--color-primary)] text-white rounded-br-none' : 'bg-white text-gray-800 shadow-md rounded-bl-none'
                }`}>
                  <p className="text-sm whitespace-pre-line break-words">{message.text}</p>
                  <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-[var(--color-secondary)]' : 'text-gray-500'}`}>
                    {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
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
            <div className="flex space-x-2 mb-3">
              <input
                type="text"
                value={currentMessage}
                onChange={e => setCurrentMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about studying abroad..."
                className="flex-1 border border-gray-300 rounded-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
              />
                <button onClick={handleSendMessage} className="bg-[var(--color-primary)] text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-[var(--color-dark)] transition-colors btn-mobile">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>

            <button onClick={() => handleWhatsAppRedirect()} className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full py-3 px-4 flex items-center justify-center space-x-2 hover:from-green-600 hover:to-green-700 transition-all shadow-md text-sm font-semibold btn-mobile">
              <IconWhatsapp className="w-5 h-5" />
              <span>Free Education Consultation</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
