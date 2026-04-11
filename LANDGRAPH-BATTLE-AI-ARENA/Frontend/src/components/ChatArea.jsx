import { useRef, useEffect } from 'react'
import MessageBlock from './MessageBlock'

const EXAMPLES = [
  'What is a binary search tree in JS?',
  'How do I implement debounce in JavaScript?',
  'Explain async/await vs Promises',
  'Write a function to flatten a nested array',
]

export default function ChatArea({ messages, loading }) {
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const isEmpty = messages.length === 0 && !loading

  return (
    <main className="flex-1 overflow-y-auto w-full p-8 md:p-12 flex flex-col gap-12" id="chat-area">
      {isEmpty ? (
        <EmptyState />
      ) : (
        <>
          {messages.map((msg) =>
            msg.role === 'user' ? (
              <UserMessageRow key={msg.id} text={msg.content} />
            ) : (
              <MessageBlock key={msg.id} data={msg} />
            )
          )}
          {loading && <LoadingBlock />}
        </>
      )}
      <div ref={bottomRef} className="h-4" />
    </main>
  )
}

function EmptyState() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center gap-8 min-h-[400px]">
      <div className="text-6xl drop-shadow-[0_4px_20px_rgba(43,52,55,0.05)]">⚖️</div>
      <div className="max-w-md">
        <h2 className="text-3xl font-bold text-on-surface mb-3 tracking-tight">Ready to Curate?</h2>
        <p className="text-on-surface-variant font-medium leading-relaxed">
          Ask any complex programming problem. Two distinctly tuned AI instances will formulate solutions.
          An impartial neural judge will evaluate and select the superior approach. 
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-3 mt-4">
        {EXAMPLES.map((ex) => (
          <button
            key={ex}
            className="px-5 py-2.5 rounded-full bg-surface-container-highest/50 border border-outline-variant/15 text-on-surface-variant text-sm hover:bg-surface-container-highest hover:text-on-surface hover:shadow-[0_4px_20px_0_rgba(43,52,55,0.05)] transition-all font-medium"
            onClick={() => {
              const ta = document.getElementById('chat-input')
              if (ta) {
                const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set
                nativeInputValueSetter.call(ta, ex)
                ta.dispatchEvent(new Event('input', { bubbles: true }))
                ta.focus()
              }
            }}
          >
            {ex}
          </button>
        ))}
      </div>
    </div>
  )
}

function UserMessageRow({ text }) {
  return (
    <div className="flex justify-end items-end gap-4 relative">
      <div className="max-w-2xl bg-surface-container-lowest text-on-surface px-6 py-4 rounded-[2rem] rounded-br-[0.5rem] shadow-[0_4px_20px_0_rgba(43,52,55,0.05)] flex items-center">
        <p className="text-base leading-relaxed whitespace-pre-wrap">{text}</p>
      </div>
    </div>
  )
}

function LoadingBlock() {
  return (
    <div className="flex flex-col gap-6 animate-pulse">
      <div className="flex items-center gap-2 px-2">
        <div className="w-1.5 h-1.5 rounded-full bg-ai1 animate-[ping_1.5s_ease-in-out_infinite]"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-ai2 animate-[ping_1.5s_ease-in-out_infinite] [animation-delay:0.2s]"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-judge animate-[ping_1.5s_ease-in-out_infinite] [animation-delay:0.4s]"></div>
        <span className="text-sm font-semibold text-on-surface-variant ml-2 uppercase tracking-wide">Synthesizing...</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="h-64 rounded-3xl bg-surface-container-highest/30"></div>
        <div className="h-64 rounded-3xl bg-surface-container-highest/30"></div>
      </div>
    </div>
  )
}
