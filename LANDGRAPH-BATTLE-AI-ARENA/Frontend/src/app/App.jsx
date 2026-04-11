import { useState } from 'react'
import ChatArea from '../components/ChatArea'
import InputBar from '../components/InputBar'
import Header from '../components/Header'
import { generateBattleResponse } from '../services/battleService'

function App() {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)

  const handleNewChat = () => {
    setMessages([])
  }

  const handleSend = async (text) => {
    if (!text.trim() || loading) return

    const userMsg = { role: 'user', content: text, id: Date.now() }
    setMessages(prev => [...prev, userMsg])
    setLoading(true)

    try {
      const result = await generateBattleResponse(text)
      const arenaMsg = {
        role: 'arena',
        id: Date.now() + 1,
        problem: text,
        solution_1: result.solution_1,
        solution_2: result.solution_2,
        judge: result.judge,
      }
      setMessages(prev => [...prev, arenaMsg])
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col h-screen min-h-screen bg-surface">
      <Header onNewChat={handleNewChat} />
      <div className="flex-1 flex flex-col items-center overflow-hidden">
        <div className="w-full max-w-5xl flex flex-col h-full bg-surface-container-low shadow-[0_4px_20px_0_rgba(43,52,55,0.05)] border-x border-outline-variant/10">
          <ChatArea messages={messages} loading={loading} />
          <InputBar onSend={handleSend} loading={loading} />
        </div>
      </div>
    </div>
  )
}

export default App
